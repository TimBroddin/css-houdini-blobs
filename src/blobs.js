const blobs2 = require("blobs/v2");

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    var t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

class BlobsPainter {
  constructor() {
    this.getRandom = mulberry32(0);
  }
  static get inputProperties() {
    return [
      "--extra-points",
      "--randomness",
      "--min-size",
      "--max-size",
      "--seed",
      "--colors",
      "--num-circles",
    ];
  }

  parseProps(props) {
    return [
      "--extra-points",
      "--randomness",
      "--min-size",
      "--max-size",
      "--seed",
      "--colors",
      "--num-circles",
    ].map((prop) => {
      if (!props.get(prop).length) {
        return undefined;
      }

      if (prop === "--colors") {
        return props
          .get(prop)
          .toString()
          .split(",")
          .map((color) => color.trim());
      } else {
        return parseInt(props.get(prop).toString());
      }
    });
  }

  paint(ctx, geom, props) {
    const { width: w, height: h } = geom;
    const [
      extraPoints = 1,
      randomness = 20,
      minSize = 20,
      maxSize = 400,
      seed = 123,
      colors = ["#71a7ee", "#7940c1"],
      numCircles = 5,
    ] = this.parseProps(props);
    this.getRandom = mulberry32(seed);

    ctx.clearRect(0, 0, w, h);
    for (let i = 0, max = numCircles; i < max; i++) {
      console.log(
        {
          seed: this.getRandom(),
          extraPoints: extraPoints,
          randomness: randomness,
          size: this.rand(minSize, maxSize),
        },
        {
          offsetX: this.rand(0, w),
          offsetY: this.rand(0, h),
        }
      );
      const path = blobs2.canvasPath(
        {
          seed: this.getRandom(),
          extraPoints: extraPoints,
          randomness: randomness,
          size: this.rand(minSize, maxSize),
        },
        {
          offsetX: this.rand(0, w),
          offsetY: this.rand(0, h),
        }
      );
      console.log(path);
      ctx.fillStyle = colors[i % colors.length];
      ctx.fill(path);
    }
  }

  rand(min, max) {
    return Math.floor(this.getRandom() * (max - min + 1)) + min;
  }
}

registerPaint("blobs", BlobsPainter);
