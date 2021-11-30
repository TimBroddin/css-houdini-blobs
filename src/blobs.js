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
      "--extra-points",
      "--randomness",
      "--min-size",
      "--max-size",
      "--num-blobs",
      "--colors",
      "--min-opacity",
      "--max-opacity",
      "--seed",
    ];
  }
  parseProps(props) {
    return [
      "--extra-points",
      "--randomness",
      "--min-size",
      "--max-size",
      "--num-blobs",
      "--colors",
      "--min-opacity",
      "--max-opacity",
      "--seed",
    ].map((propName) => {
      const prop = props.get(propName);

      // Cater for browsers that don't speak CSS Typed OM and
      // for browsers that do speak it, but haven't registered the props
      if (
        typeof CSSUnparsedValue === "undefined" ||
        prop instanceof CSSUnparsedValue
      ) {
        if (!prop.length || prop === "") {
          return undefined;
        }

        switch (propName) {
          case "--extra-points":
          case "--randomness":
          case "--min-size":
          case "--max-size":
          case "--num-blobs":
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

      // Prop is not typed using @property (UnparsedValue) and not set either
      // ~> Return undefined so that we can fall back to the default value during destructuring
      if (prop instanceof CSSUnparsedValue && !prop.length) {
        return undefined;
      }

      // Prop is a UnitValue (Number, Percentage, Integer, …)
      // ~> Return the value
      if (prop instanceof CSSUnitValue) {
        return prop.value;
      }

      // Special case: cell colors
      // We need to get each value using props.getAll();
      if (propName === "--colors") {
        return props.getAll(propName).map((prop) => prop.toString().trim());
      }

      // All others (such as CSSKeywordValue)
      //~> Return the string
      return prop.toString().trim();
    });
  }

  paint(ctx, geom, props) {
    const { width: w, height: h } = geom;
    const [
      extraPoints = 1,
      randomness = 20,
      minSize = 20,
      maxSize = 400,
      numBlobs = 5,
      colors = ["#71a7ee", "#7940c1"],
      minOpacity = 0.5,
      maxOpacity = 1,
      seed = 123,
    ] = this.parseProps(props);

    console.log(this.parseProps(props));
    this.getRandom = mulberry32(seed);

    ctx.clearRect(0, 0, w, h);
    for (let i = 0, max = numBlobs; i < max; i++) {
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
      const color = parse(colors[this.rand(0, colors.length - 1)])?.rgba;

      if (color) {
        console.log(minOpacity * 100, maxOpacity * 100);
        ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${
          this.rand(minOpacity * 100, maxOpacity * 100) / 100
        })`;
      }
      console.log(ctx.fillStyle);
      ctx.fill(path);
    }
  }

  rand(min, max) {
    return Math.floor(this.getRandom() * (max - min + 1)) + min;
  }
}

registerPaint("blobs", BlobsPainter);
