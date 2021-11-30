function __swcpack_require__(mod) {
    var cache;
    if (cache) {
        return cache;
    }
    var module = {
        exports: {
        }
    };
    mod(module, module.exports);
    cache = module.exports;
    return cache;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
var load = __swcpack_require__.bind(void 0, function(module, exports) {
    !function(n, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define([
            "exports"
        ], t) : t((n = n || self).blobs2 = {
        });
    }(this, function(n1) {
        "use strict";
        function o1(n) {
            return {
                x: n.x,
                y: n.y,
                handleIn: t1({
                }, n.handleIn),
                handleOut: t1({
                }, n.handleOut)
            };
        }
        function i1(e, r) {
            for(var n2 = function(n) {
                function t(n) {
                    return o1(e[c(n, e.length)]);
                }
                r({
                    curr: o1(e[n]),
                    index: n,
                    sibling: t,
                    prev: function() {
                        return t(n - 1);
                    },
                    next: function() {
                        return t(n + 1);
                    }
                });
            }, t2 = 0; t2 < e.length; t2++)n2(t2);
        }
        function f(n3, t) {
            var e = [];
            return i1(n3, function(n) {
                e.push(t(n));
            }), e;
        }
        function s1(n, t) {
            return {
                x: n.x + t.length * Math.cos(t.angle),
                y: n.y + t.length * Math.sin(t.angle)
            };
        }
        function l(n4, s) {
            return f(n4, function(n) {
                var t, e, r = n.curr, o = n.next, i = n.prev, n = (t = i(), e = o(), n = e.x - t.x, t = -e.y + t.y, (n = Math.atan2(t, n)) < 0 ? Math.abs(n) : 2 * Math.PI - n);
                return {
                    x: r.x,
                    y: r.y,
                    handleIn: {
                        angle: n + Math.PI,
                        length: s * d(r, i())
                    },
                    handleOut: {
                        angle: n,
                        length: s * d(r, o())
                    }
                };
            });
        }
        function u1(n5) {
            var t3, e1, r1, o2, i2 = (u2 = function(n) {
                for(var t = 2166136261, e = 0; e < n.length; e++)t = Math.imul(t ^ n.charCodeAt(e), 16777619);
                return function() {
                    return t += t << 13, t ^= t >>> 7, t += t << 3, t ^= t >>> 17, (t += t << 5) >>> 0;
                };
            }(u2 = String(n5.seed)), t3 = u2(), e1 = u2(), r1 = u2(), o2 = u2(), function() {
                var n = (t3 >>>= 0) + (e1 >>>= 0) | 0;
                return t3 = e1 ^ e1 >>> 9, e1 = (r1 >>>= 0) + (r1 << 3) | 0, r1 = (r1 = r1 << 21 | r1 >>> 11) + (n = n + (o2 = (o2 >>>= 0) + 1 | 0) | 0) | 0, (n >>> 0) / 4294967296;
            }), s2 = 1 / (1 + n5.randomness / 10), u2 = function(n, t) {
                for(var e = 2 * Math.PI / n, r = [], o = 0; o < n; o++){
                    var i = t(), s = Math.sin(o * e), u = Math.cos(o * e);
                    r.push({
                        x: 0.5 + s * i,
                        y: 0.5 + u * i,
                        handleIn: {
                            angle: 0,
                            length: 0
                        },
                        handleOut: {
                            angle: 0,
                            length: 0
                        }
                    });
                }
                var a = 4 / 3 * Math.tan(e / 4) / Math.sin(e / 2) / 2;
                return l(r, a);
            }(3 + n5.extraPoints, function() {
                return (s2 + i2() * (1 - s2)) / 2;
            }), a2 = n5.size;
            return f(u2, function(n) {
                n = n.curr;
                return n.x *= a2, n.y *= a2, n.handleIn.length *= a2, n.handleOut.length *= a2, n;
            });
        }
        function a1(n, t, e) {
            var r = typeof t;
            if ("number" === r && isNaN(t) && (r = "NaN"), !e.includes(r = "object" === r && null === t ? "null" : r)) throw '"' + n + '" should have type "' + e.join("|") + '" but was "' + r + '".';
        }
        function h(n) {
            a1("blobOptions", n, [
                "object"
            ]);
            var t = n.seed, e = n.extraPoints, r = n.randomness, n = n.size;
            if (a1("blobOptions.seed", t, [
                "string",
                "number"
            ]), a1("blobOptions.extraPoints", e, [
                "number"
            ]), e < 0) throw 'blobOptions.extraPoints is invalid "' + e + '".';
            if (a1("blobOptions.randomness", r, [
                "number"
            ]), r < 0) throw 'blobOptions.randomness is invalid "' + r + '".';
            if (a1("blobOptions.size", n, [
                "number"
            ]), n < 0) throw 'blobOptions.size is invalid "' + n + '".';
        }
        var t1 = function() {
            return (t1 = Object.assign || function(n) {
                for(var t, e = 1, r = arguments.length; e < r; e++)for(var o in t = arguments[e])Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
                return n;
            }).apply(this, arguments);
        }, c = function(n, t) {
            return (n % t + t) % t;
        }, d = function(n, t) {
            return Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2));
        }, v = function(n7) {
            try {
                h(n7);
            } catch (n6) {
                throw "(blobs2): " + n6;
            }
            var r;
            return n7 = u1(n7), r = "M" + n7[0].x + "," + n7[0].y, i1(n7, function(n) {
                var t = n.curr, e = (0, n.next)(), n = s1(t, t.handleOut), t = s1(e, e.handleIn);
                r += "C" + n.x + "," + n.y + "," + t.x + "," + t.y + "," + e.x + "," + e.y;
            }), r;
        };
        n1.canvasPath = function(n9, t4) {
            void 0 === t4 && (t4 = {
            });
            try {
                h(n9), a1("canvasOptions", e2 = t4, [
                    "object",
                    "undefined"
                ]), e2 && (r = e2.offsetX, e2 = e2.offsetY, a1("canvasOptions.offsetX", r, [
                    "number",
                    "undefined"
                ]), a1("canvasOptions.offsetY", e2, [
                    "number",
                    "undefined"
                ]));
            } catch (n8) {
                throw "(blobs2): " + n8;
            }
            var e2, r, o;
            return n9 = f(u1(n9), function(n) {
                n = n.curr;
                return n.x += t4.offsetX || 0, n.y += t4.offsetY || 0, n;
            }), o = new Path2D, n9.length < 1 || (o.moveTo(n9[0].x, n9[0].y), i1(n9, function(n) {
                var t = n.curr, e = (0, n.next)(), n = s1(t, t.handleOut), t = s1(e, e.handleIn);
                o.bezierCurveTo(n.x, n.y, t.x, t.y, e.x, e.y);
            })), o;
        }, n1.svg = function(n, t) {
            void 0 === t && (t = {
            });
            try {
                h(n), a1("svgOptions", o = t, [
                    "object",
                    "undefined"
                ]), o && (e = o.fill, r = o.stroke, o = o.strokeWidth, a1("svgOptions.fill", e, [
                    "string",
                    "undefined"
                ]), a1("svgOptions.stroke", r, [
                    "string",
                    "undefined"
                ]), a1("svgOptions.strokeWidth", o, [
                    "number",
                    "undefined"
                ]));
            } catch (n10) {
                throw "(blobs2): " + n10;
            }
            var e, r = v(n), o = Math.floor(n.size), n = void 0 === t.fill ? "#ec576b" : t.fill;
            return ('\n<svg width="' + o + '" height="' + o + '" viewBox="0 0 ' + o + " " + o + '" xmlns="http://www.w3.org/2000/svg">\n    <path stroke="' + (void 0 === t.stroke ? "none" : t.stroke) + '" stroke-width="' + (void 0 === t.strokeWidth ? 0 : t.strokeWidth) + '" fill="' + n + '" d="' + r + '"/>\n</svg>').trim();
        }, n1.svgPath = v, Object.defineProperty(n1, "__esModule", {
            value: !0
        });
    }); //# sourceMappingURL=index.js.map
});
var blobs2 = load();
function mulberry32(a) {
    return function() {
        a |= 0;
        a = a + 1831565813 | 0;
        var t = Math.imul(a ^ a >>> 15, 1 | a);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
var BlobsPainter1 = /*#__PURE__*/ function() {
    "use strict";
    function BlobsPainter() {
        _classCallCheck(this, BlobsPainter);
        this.getRandom = mulberry32(0);
    }
    _createClass(BlobsPainter, [
        {
            key: "parseProps",
            value: function parseProps(props) {
                return [
                    "--extra-points",
                    "--randomness",
                    "--min-size",
                    "--max-size",
                    "--seed",
                    "--colors",
                    "--num-circles", 
                ].map(function(prop) {
                    if (!props.get(prop).length) return undefined;
                    if (prop === "--colors") return props.get(prop).toString().split(",").map(function(color) {
                        return color.trim();
                    });
                    else return parseInt(props.get(prop).toString());
                });
            }
        },
        {
            key: "paint",
            value: function paint(ctx, geom, props) {
                var w = geom.width, h = geom.height;
                var ref = _slicedToArray(this.parseProps(props), 7), tmp = ref[0], extraPoints = tmp === void 0 ? 1 : tmp, tmp1 = ref[1], randomness = tmp1 === void 0 ? 20 : tmp1, tmp2 = ref[2], minSize = tmp2 === void 0 ? 20 : tmp2, tmp3 = ref[3], maxSize = tmp3 === void 0 ? 400 : tmp3, tmp4 = ref[4], seed = tmp4 === void 0 ? 123 : tmp4, tmp5 = ref[5], colors = tmp5 === void 0 ? [
                    "#71a7ee",
                    "#7940c1"
                ] : tmp5, tmp6 = ref[6], numCircles = tmp6 === void 0 ? 5 : tmp6;
                this.getRandom = mulberry32(seed);
                ctx.clearRect(0, 0, w, h);
                for(var i = 0, max = numCircles; i < max; i++){
                    console.log({
                        seed: this.getRandom(),
                        extraPoints: extraPoints,
                        randomness: randomness,
                        size: this.rand(minSize, maxSize)
                    }, {
                        offsetX: this.rand(0, w),
                        offsetY: this.rand(0, h)
                    });
                    var path = blobs2.canvasPath({
                        seed: this.getRandom(),
                        extraPoints: extraPoints,
                        randomness: randomness,
                        size: this.rand(minSize, maxSize)
                    }, {
                        offsetX: this.rand(0, w),
                        offsetY: this.rand(0, h)
                    });
                    console.log(path);
                    ctx.fillStyle = colors[i % colors.length];
                    ctx.fill(path);
                }
            }
        },
        {
            key: "rand",
            value: function rand(min, max) {
                return Math.floor(this.getRandom() * (max - min + 1)) + min;
            }
        }
    ], [
        {
            key: "inputProperties",
            get: function get() {
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
        }
    ]);
    return BlobsPainter;
}();
registerPaint("blobs", BlobsPainter1);
