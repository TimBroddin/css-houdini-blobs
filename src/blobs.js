const blobs2 = require("blobs/v2");
const parse = require("parse-color");

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
      "--min-extra-points",
      "--max-extra-points",
      "--min-randomness",
      "--max-randomness",
      "--min-size",
      "--max-size",
      "--num-blobs",
      "--colors",
      "--min-opacity",
      "--max-opacity",
      "--offset-x",
      "--offset-y",
      "--seed",
    ];
  }

  propToVar(propName) {
    return propName.substr(2).replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  }

  parseProps(props) {
    const parsed = {};

    this.constructor.inputProperties.forEach((propName) => {
      parsed[this.propToVar(propName)] = this.parseProp(propName, props);
    });

    return parsed;
  }

  parseProp(propName, props) {
    const prop = props.get(propName);

    switch (propName) {
      case "--min-extra-points":
      case "--max-extra-points":
      case "--min-randomness":
      case "--max-randomness":
      case "--min-size":
      case "--max-size":
      case "--num-blobs":
      case "--offset-x":
      case "--offset-y":
      case "--seed":
        return parseInt(prop.toString());
      case "--min-opacity":
      case "--max-opacity":
        return parseFloat(prop.toString());
      case "--colors":
        return prop
          .toString()
          .split(",")
          .map((color) => color.trim());

      default:
        return prop.toString().trim();
    }
  }

  paint(ctx, geom, props) {
    const { width: w, height: h } = geom;

    const defaultProps = {
      minExtraPoints: 1,
      maxExtraPoints: 1,
      minRandomness: 20,
      maxRandomness: 20,
      minSize: 20,
      maxSize: 400,
      numBlobs: 5,
      colors: ["#71a7ee", "#7940c1"],
      minOpacity: 0.5,
      maxOpacity: 1,
      offsetX: 0,
      offsetY: 0,
      seed: 123,
    };

    const {
      minExtraPoints,
      maxExtraPoints,
      minRandomness,
      maxRandomness,
      minSize,
      maxSize,
      numBlobs,
      offsetX,
      offsetY,
      colors,
      minOpacity,
      maxOpacity,
      seed,
    } = { ...defaultProps, ...this.parseProps(props) };

    this.getRandom = mulberry32(seed);
    ctx.clearRect(0, 0, w, h);
    for (let i = 0, max = numBlobs; i < max; i++) {
      const path = blobs2.canvasPath(
        {
          seed: this.getRandom(),
          extraPoints: this.rand(minExtraPoints, maxExtraPoints),
          randomness: this.rand(minRandomness, maxRandomness),
          size: this.rand(minSize, maxSize),
        },
        {
          offsetX: this.rand(0 + offsetX, w),
          offsetY: this.rand(0 + offsetY, h),
        }
      );
      const color = parse(colors[this.rand(0, colors.length - 1)])?.rgba;

      if (color) {
        ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${
          this.rand(minOpacity * 100, maxOpacity * 100) / 100
        })`;
      }
      ctx.fill(path);
    }
  }

  rand(min, max) {
    return Math.floor(this.getRandom() * (max - min + 1)) + min;
  }
}

registerPaint("blobs", BlobsPainter);
