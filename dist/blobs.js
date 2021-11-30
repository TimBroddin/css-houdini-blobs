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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
var load1 = __swcpack_require__.bind(void 0, function(module, exports) {
    /* MIT license */ module.exports = {
        rgb2hsl: rgb2hsl,
        rgb2hsv: rgb2hsv,
        rgb2hwb: rgb2hwb,
        rgb2cmyk: rgb2cmyk,
        rgb2keyword: rgb2keyword,
        rgb2xyz: rgb2xyz,
        rgb2lab: rgb2lab,
        rgb2lch: rgb2lch,
        hsl2rgb: hsl2rgb,
        hsl2hsv: hsl2hsv,
        hsl2hwb: hsl2hwb,
        hsl2cmyk: hsl2cmyk,
        hsl2keyword: hsl2keyword,
        hsv2rgb: hsv2rgb,
        hsv2hsl: hsv2hsl,
        hsv2hwb: hsv2hwb,
        hsv2cmyk: hsv2cmyk,
        hsv2keyword: hsv2keyword,
        hwb2rgb: hwb2rgb,
        hwb2hsl: hwb2hsl,
        hwb2hsv: hwb2hsv,
        hwb2cmyk: hwb2cmyk,
        hwb2keyword: hwb2keyword,
        cmyk2rgb: cmyk2rgb,
        cmyk2hsl: cmyk2hsl,
        cmyk2hsv: cmyk2hsv,
        cmyk2hwb: cmyk2hwb,
        cmyk2keyword: cmyk2keyword,
        keyword2rgb: keyword2rgb,
        keyword2hsl: keyword2hsl,
        keyword2hsv: keyword2hsv,
        keyword2hwb: keyword2hwb,
        keyword2cmyk: keyword2cmyk,
        keyword2lab: keyword2lab,
        keyword2xyz: keyword2xyz,
        xyz2rgb: xyz2rgb,
        xyz2lab: xyz2lab,
        xyz2lch: xyz2lch,
        lab2xyz: lab2xyz,
        lab2rgb: lab2rgb,
        lab2lch: lab2lch,
        lch2lab: lch2lab,
        lch2xyz: lch2xyz,
        lch2rgb: lch2rgb
    };
    function rgb2hsl(rgb) {
        var r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), delta = max - min, h, s, l;
        if (max == min) h = 0;
        else if (r == max) h = (g - b) / delta;
        else if (g == max) h = 2 + (b - r) / delta;
        else if (b == max) h = 4 + (r - g) / delta;
        h = Math.min(h * 60, 360);
        if (h < 0) h += 360;
        l = (min + max) / 2;
        if (max == min) s = 0;
        else if (l <= 0.5) s = delta / (max + min);
        else s = delta / (2 - max - min);
        return [
            h,
            s * 100,
            l * 100
        ];
    }
    function rgb2hsv(rgb) {
        var r = rgb[0], g = rgb[1], b = rgb[2], min = Math.min(r, g, b), max = Math.max(r, g, b), delta = max - min, h, s, v;
        if (max == 0) s = 0;
        else s = delta / max * 1000 / 10;
        if (max == min) h = 0;
        else if (r == max) h = (g - b) / delta;
        else if (g == max) h = 2 + (b - r) / delta;
        else if (b == max) h = 4 + (r - g) / delta;
        h = Math.min(h * 60, 360);
        if (h < 0) h += 360;
        v = max / 255 * 1000 / 10;
        return [
            h,
            s,
            v
        ];
    }
    function rgb2hwb(rgb) {
        var r = rgb[0], g = rgb[1], b = rgb[2], h = rgb2hsl(rgb)[0], w = 1 / 255 * Math.min(r, Math.min(g, b)), b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
        return [
            h,
            w * 100,
            b * 100
        ];
    }
    function rgb2cmyk(rgb) {
        var r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255, c, m, y, k;
        k = Math.min(1 - r, 1 - g, 1 - b);
        c = (1 - r - k) / (1 - k) || 0;
        m = (1 - g - k) / (1 - k) || 0;
        y = (1 - b - k) / (1 - k) || 0;
        return [
            c * 100,
            m * 100,
            y * 100,
            k * 100
        ];
    }
    function rgb2keyword(rgb) {
        return reverseKeywords[JSON.stringify(rgb)];
    }
    function rgb2xyz(rgb) {
        var r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255;
        // assume sRGB
        r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
        g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
        b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
        var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
        var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
        var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
        return [
            x * 100,
            y * 100,
            z * 100
        ];
    }
    function rgb2lab(rgb) {
        var xyz = rgb2xyz(rgb), x = xyz[0], y = xyz[1], z = xyz[2], l, a, b;
        x /= 95.047;
        y /= 100;
        z /= 108.883;
        x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
        y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
        z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
        l = 116 * y - 16;
        a = 500 * (x - y);
        b = 200 * (y - z);
        return [
            l,
            a,
            b
        ];
    }
    function rgb2lch(args) {
        return lab2lch(rgb2lab(args));
    }
    function hsl2rgb(hsl) {
        var h = hsl[0] / 360, s = hsl[1] / 100, l = hsl[2] / 100, t1, t2, t3, rgb, val;
        if (s == 0) {
            val = l * 255;
            return [
                val,
                val,
                val
            ];
        }
        if (l < 0.5) t2 = l * (1 + s);
        else t2 = l + s - l * s;
        t1 = 2 * l - t2;
        rgb = [
            0,
            0,
            0
        ];
        for(var i = 0; i < 3; i++){
            t3 = h + 1 / 3 * -(i - 1);
            t3 < 0 && t3++;
            t3 > 1 && t3--;
            if (6 * t3 < 1) val = t1 + (t2 - t1) * 6 * t3;
            else if (2 * t3 < 1) val = t2;
            else if (3 * t3 < 2) val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
            else val = t1;
            rgb[i] = val * 255;
        }
        return rgb;
    }
    function hsl2hsv(hsl) {
        var h = hsl[0], s = hsl[1] / 100, l = hsl[2] / 100, sv, v;
        if (l === 0) // no need to do calc on black
        // also avoids divide by 0 error
        return [
            0,
            0,
            0
        ];
        l *= 2;
        s *= l <= 1 ? l : 2 - l;
        v = (l + s) / 2;
        sv = 2 * s / (l + s);
        return [
            h,
            sv * 100,
            v * 100
        ];
    }
    function hsl2hwb(args) {
        return rgb2hwb(hsl2rgb(args));
    }
    function hsl2cmyk(args) {
        return rgb2cmyk(hsl2rgb(args));
    }
    function hsl2keyword(args) {
        return rgb2keyword(hsl2rgb(args));
    }
    function hsv2rgb(hsv) {
        var h = hsv[0] / 60, s = hsv[1] / 100, v = hsv[2] / 100, hi = Math.floor(h) % 6;
        var f = h - Math.floor(h), p = 255 * v * (1 - s), q = 255 * v * (1 - s * f), t = 255 * v * (1 - s * (1 - f)), v = 255 * v;
        switch(hi){
            case 0:
                return [
                    v,
                    t,
                    p
                ];
            case 1:
                return [
                    q,
                    v,
                    p
                ];
            case 2:
                return [
                    p,
                    v,
                    t
                ];
            case 3:
                return [
                    p,
                    q,
                    v
                ];
            case 4:
                return [
                    t,
                    p,
                    v
                ];
            case 5:
                return [
                    v,
                    p,
                    q
                ];
        }
    }
    function hsv2hsl(hsv) {
        var h = hsv[0], s = hsv[1] / 100, v = hsv[2] / 100, sl, l;
        l = (2 - s) * v;
        sl = s * v;
        sl /= l <= 1 ? l : 2 - l;
        sl = sl || 0;
        l /= 2;
        return [
            h,
            sl * 100,
            l * 100
        ];
    }
    function hsv2hwb(args) {
        return rgb2hwb(hsv2rgb(args));
    }
    function hsv2cmyk(args) {
        return rgb2cmyk(hsv2rgb(args));
    }
    function hsv2keyword(args) {
        return rgb2keyword(hsv2rgb(args));
    }
    // http://dev.w3.org/csswg/css-color/#hwb-to-rgb
    function hwb2rgb(hwb) {
        var h = hwb[0] / 360, wh = hwb[1] / 100, bl = hwb[2] / 100, ratio = wh + bl, i, v, f, n;
        // wh + bl cant be > 1
        if (ratio > 1) {
            wh /= ratio;
            bl /= ratio;
        }
        i = Math.floor(6 * h);
        v = 1 - bl;
        f = 6 * h - i;
        if ((i & 1) != 0) f = 1 - f;
        n = wh + f * (v - wh); // linear interpolation
        switch(i){
            default:
            case 6:
            case 0:
                r = v;
                g = n;
                b = wh;
                break;
            case 1:
                r = n;
                g = v;
                b = wh;
                break;
            case 2:
                r = wh;
                g = v;
                b = n;
                break;
            case 3:
                r = wh;
                g = n;
                b = v;
                break;
            case 4:
                r = n;
                g = wh;
                b = v;
                break;
            case 5:
                r = v;
                g = wh;
                b = n;
                break;
        }
        return [
            r * 255,
            g * 255,
            b * 255
        ];
    }
    function hwb2hsl(args) {
        return rgb2hsl(hwb2rgb(args));
    }
    function hwb2hsv(args) {
        return rgb2hsv(hwb2rgb(args));
    }
    function hwb2cmyk(args) {
        return rgb2cmyk(hwb2rgb(args));
    }
    function hwb2keyword(args) {
        return rgb2keyword(hwb2rgb(args));
    }
    function cmyk2rgb(cmyk) {
        var c = cmyk[0] / 100, m = cmyk[1] / 100, y = cmyk[2] / 100, k = cmyk[3] / 100, r, g, b;
        r = 1 - Math.min(1, c * (1 - k) + k);
        g = 1 - Math.min(1, m * (1 - k) + k);
        b = 1 - Math.min(1, y * (1 - k) + k);
        return [
            r * 255,
            g * 255,
            b * 255
        ];
    }
    function cmyk2hsl(args) {
        return rgb2hsl(cmyk2rgb(args));
    }
    function cmyk2hsv(args) {
        return rgb2hsv(cmyk2rgb(args));
    }
    function cmyk2hwb(args) {
        return rgb2hwb(cmyk2rgb(args));
    }
    function cmyk2keyword(args) {
        return rgb2keyword(cmyk2rgb(args));
    }
    function xyz2rgb(xyz) {
        var x = xyz[0] / 100, y = xyz[1] / 100, z = xyz[2] / 100, r, g, b;
        r = x * 3.2406 + y * -1.5372 + z * -0.4986;
        g = x * -0.9689 + y * 1.8758 + z * 0.0415;
        b = x * 0.0557 + y * -0.204 + z * 1.057;
        // assume sRGB
        r = r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r = r * 12.92;
        g = g > 0.0031308 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : g = g * 12.92;
        b = b > 0.0031308 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b = b * 12.92;
        r = Math.min(Math.max(0, r), 1);
        g = Math.min(Math.max(0, g), 1);
        b = Math.min(Math.max(0, b), 1);
        return [
            r * 255,
            g * 255,
            b * 255
        ];
    }
    function xyz2lab(xyz) {
        var x = xyz[0], y = xyz[1], z = xyz[2], l, a, b;
        x /= 95.047;
        y /= 100;
        z /= 108.883;
        x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
        y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
        z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
        l = 116 * y - 16;
        a = 500 * (x - y);
        b = 200 * (y - z);
        return [
            l,
            a,
            b
        ];
    }
    function xyz2lch(args) {
        return lab2lch(xyz2lab(args));
    }
    function lab2xyz(lab) {
        var l = lab[0], a = lab[1], b = lab[2], x, y, z, y2;
        if (l <= 8) {
            y = l * 100 / 903.3;
            y2 = 7.787 * (y / 100) + 16 / 116;
        } else {
            y = 100 * Math.pow((l + 16) / 116, 3);
            y2 = Math.pow(y / 100, 1 / 3);
        }
        x = x / 95.047 <= 0.008856 ? x = 95.047 * (a / 500 + y2 - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + y2, 3);
        z = z / 108.883 <= 0.008859 ? z = 108.883 * (y2 - b / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(y2 - b / 200, 3);
        return [
            x,
            y,
            z
        ];
    }
    function lab2lch(lab) {
        var l = lab[0], a = lab[1], b = lab[2], hr, h, c;
        hr = Math.atan2(b, a);
        h = hr * 360 / 2 / Math.PI;
        if (h < 0) h += 360;
        c = Math.sqrt(a * a + b * b);
        return [
            l,
            c,
            h
        ];
    }
    function lab2rgb(args) {
        return xyz2rgb(lab2xyz(args));
    }
    function lch2lab(lch) {
        var l = lch[0], c = lch[1], h = lch[2], a, b, hr;
        hr = h / 360 * 2 * Math.PI;
        a = c * Math.cos(hr);
        b = c * Math.sin(hr);
        return [
            l,
            a,
            b
        ];
    }
    function lch2xyz(args) {
        return lab2xyz(lch2lab(args));
    }
    function lch2rgb(args) {
        return lab2rgb(lch2lab(args));
    }
    function keyword2rgb(keyword) {
        return cssKeywords[keyword];
    }
    function keyword2hsl(args) {
        return rgb2hsl(keyword2rgb(args));
    }
    function keyword2hsv(args) {
        return rgb2hsv(keyword2rgb(args));
    }
    function keyword2hwb(args) {
        return rgb2hwb(keyword2rgb(args));
    }
    function keyword2cmyk(args) {
        return rgb2cmyk(keyword2rgb(args));
    }
    function keyword2lab(args) {
        return rgb2lab(keyword2rgb(args));
    }
    function keyword2xyz(args) {
        return rgb2xyz(keyword2rgb(args));
    }
    var cssKeywords = {
        aliceblue: [
            240,
            248,
            255
        ],
        antiquewhite: [
            250,
            235,
            215
        ],
        aqua: [
            0,
            255,
            255
        ],
        aquamarine: [
            127,
            255,
            212
        ],
        azure: [
            240,
            255,
            255
        ],
        beige: [
            245,
            245,
            220
        ],
        bisque: [
            255,
            228,
            196
        ],
        black: [
            0,
            0,
            0
        ],
        blanchedalmond: [
            255,
            235,
            205
        ],
        blue: [
            0,
            0,
            255
        ],
        blueviolet: [
            138,
            43,
            226
        ],
        brown: [
            165,
            42,
            42
        ],
        burlywood: [
            222,
            184,
            135
        ],
        cadetblue: [
            95,
            158,
            160
        ],
        chartreuse: [
            127,
            255,
            0
        ],
        chocolate: [
            210,
            105,
            30
        ],
        coral: [
            255,
            127,
            80
        ],
        cornflowerblue: [
            100,
            149,
            237
        ],
        cornsilk: [
            255,
            248,
            220
        ],
        crimson: [
            220,
            20,
            60
        ],
        cyan: [
            0,
            255,
            255
        ],
        darkblue: [
            0,
            0,
            139
        ],
        darkcyan: [
            0,
            139,
            139
        ],
        darkgoldenrod: [
            184,
            134,
            11
        ],
        darkgray: [
            169,
            169,
            169
        ],
        darkgreen: [
            0,
            100,
            0
        ],
        darkgrey: [
            169,
            169,
            169
        ],
        darkkhaki: [
            189,
            183,
            107
        ],
        darkmagenta: [
            139,
            0,
            139
        ],
        darkolivegreen: [
            85,
            107,
            47
        ],
        darkorange: [
            255,
            140,
            0
        ],
        darkorchid: [
            153,
            50,
            204
        ],
        darkred: [
            139,
            0,
            0
        ],
        darksalmon: [
            233,
            150,
            122
        ],
        darkseagreen: [
            143,
            188,
            143
        ],
        darkslateblue: [
            72,
            61,
            139
        ],
        darkslategray: [
            47,
            79,
            79
        ],
        darkslategrey: [
            47,
            79,
            79
        ],
        darkturquoise: [
            0,
            206,
            209
        ],
        darkviolet: [
            148,
            0,
            211
        ],
        deeppink: [
            255,
            20,
            147
        ],
        deepskyblue: [
            0,
            191,
            255
        ],
        dimgray: [
            105,
            105,
            105
        ],
        dimgrey: [
            105,
            105,
            105
        ],
        dodgerblue: [
            30,
            144,
            255
        ],
        firebrick: [
            178,
            34,
            34
        ],
        floralwhite: [
            255,
            250,
            240
        ],
        forestgreen: [
            34,
            139,
            34
        ],
        fuchsia: [
            255,
            0,
            255
        ],
        gainsboro: [
            220,
            220,
            220
        ],
        ghostwhite: [
            248,
            248,
            255
        ],
        gold: [
            255,
            215,
            0
        ],
        goldenrod: [
            218,
            165,
            32
        ],
        gray: [
            128,
            128,
            128
        ],
        green: [
            0,
            128,
            0
        ],
        greenyellow: [
            173,
            255,
            47
        ],
        grey: [
            128,
            128,
            128
        ],
        honeydew: [
            240,
            255,
            240
        ],
        hotpink: [
            255,
            105,
            180
        ],
        indianred: [
            205,
            92,
            92
        ],
        indigo: [
            75,
            0,
            130
        ],
        ivory: [
            255,
            255,
            240
        ],
        khaki: [
            240,
            230,
            140
        ],
        lavender: [
            230,
            230,
            250
        ],
        lavenderblush: [
            255,
            240,
            245
        ],
        lawngreen: [
            124,
            252,
            0
        ],
        lemonchiffon: [
            255,
            250,
            205
        ],
        lightblue: [
            173,
            216,
            230
        ],
        lightcoral: [
            240,
            128,
            128
        ],
        lightcyan: [
            224,
            255,
            255
        ],
        lightgoldenrodyellow: [
            250,
            250,
            210
        ],
        lightgray: [
            211,
            211,
            211
        ],
        lightgreen: [
            144,
            238,
            144
        ],
        lightgrey: [
            211,
            211,
            211
        ],
        lightpink: [
            255,
            182,
            193
        ],
        lightsalmon: [
            255,
            160,
            122
        ],
        lightseagreen: [
            32,
            178,
            170
        ],
        lightskyblue: [
            135,
            206,
            250
        ],
        lightslategray: [
            119,
            136,
            153
        ],
        lightslategrey: [
            119,
            136,
            153
        ],
        lightsteelblue: [
            176,
            196,
            222
        ],
        lightyellow: [
            255,
            255,
            224
        ],
        lime: [
            0,
            255,
            0
        ],
        limegreen: [
            50,
            205,
            50
        ],
        linen: [
            250,
            240,
            230
        ],
        magenta: [
            255,
            0,
            255
        ],
        maroon: [
            128,
            0,
            0
        ],
        mediumaquamarine: [
            102,
            205,
            170
        ],
        mediumblue: [
            0,
            0,
            205
        ],
        mediumorchid: [
            186,
            85,
            211
        ],
        mediumpurple: [
            147,
            112,
            219
        ],
        mediumseagreen: [
            60,
            179,
            113
        ],
        mediumslateblue: [
            123,
            104,
            238
        ],
        mediumspringgreen: [
            0,
            250,
            154
        ],
        mediumturquoise: [
            72,
            209,
            204
        ],
        mediumvioletred: [
            199,
            21,
            133
        ],
        midnightblue: [
            25,
            25,
            112
        ],
        mintcream: [
            245,
            255,
            250
        ],
        mistyrose: [
            255,
            228,
            225
        ],
        moccasin: [
            255,
            228,
            181
        ],
        navajowhite: [
            255,
            222,
            173
        ],
        navy: [
            0,
            0,
            128
        ],
        oldlace: [
            253,
            245,
            230
        ],
        olive: [
            128,
            128,
            0
        ],
        olivedrab: [
            107,
            142,
            35
        ],
        orange: [
            255,
            165,
            0
        ],
        orangered: [
            255,
            69,
            0
        ],
        orchid: [
            218,
            112,
            214
        ],
        palegoldenrod: [
            238,
            232,
            170
        ],
        palegreen: [
            152,
            251,
            152
        ],
        paleturquoise: [
            175,
            238,
            238
        ],
        palevioletred: [
            219,
            112,
            147
        ],
        papayawhip: [
            255,
            239,
            213
        ],
        peachpuff: [
            255,
            218,
            185
        ],
        peru: [
            205,
            133,
            63
        ],
        pink: [
            255,
            192,
            203
        ],
        plum: [
            221,
            160,
            221
        ],
        powderblue: [
            176,
            224,
            230
        ],
        purple: [
            128,
            0,
            128
        ],
        rebeccapurple: [
            102,
            51,
            153
        ],
        red: [
            255,
            0,
            0
        ],
        rosybrown: [
            188,
            143,
            143
        ],
        royalblue: [
            65,
            105,
            225
        ],
        saddlebrown: [
            139,
            69,
            19
        ],
        salmon: [
            250,
            128,
            114
        ],
        sandybrown: [
            244,
            164,
            96
        ],
        seagreen: [
            46,
            139,
            87
        ],
        seashell: [
            255,
            245,
            238
        ],
        sienna: [
            160,
            82,
            45
        ],
        silver: [
            192,
            192,
            192
        ],
        skyblue: [
            135,
            206,
            235
        ],
        slateblue: [
            106,
            90,
            205
        ],
        slategray: [
            112,
            128,
            144
        ],
        slategrey: [
            112,
            128,
            144
        ],
        snow: [
            255,
            250,
            250
        ],
        springgreen: [
            0,
            255,
            127
        ],
        steelblue: [
            70,
            130,
            180
        ],
        tan: [
            210,
            180,
            140
        ],
        teal: [
            0,
            128,
            128
        ],
        thistle: [
            216,
            191,
            216
        ],
        tomato: [
            255,
            99,
            71
        ],
        turquoise: [
            64,
            224,
            208
        ],
        violet: [
            238,
            130,
            238
        ],
        wheat: [
            245,
            222,
            179
        ],
        white: [
            255,
            255,
            255
        ],
        whitesmoke: [
            245,
            245,
            245
        ],
        yellow: [
            255,
            255,
            0
        ],
        yellowgreen: [
            154,
            205,
            50
        ]
    };
    var reverseKeywords = {
    };
    for(var key in cssKeywords)reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
});
var load2 = __swcpack_require__.bind(void 0, function(module, exports) {
    var conversions = load1();
    var convert = function() {
        return new Converter();
    };
    for(var func in conversions){
        // export Raw versions
        convert[func + "Raw"] = (function(func) {
            // accept array or plain args
            return function(arg) {
                if (typeof arg == "number") arg = Array.prototype.slice.call(arguments);
                return conversions[func](arg);
            };
        })(func);
        var pair = /(\w+)2(\w+)/.exec(func), from = pair[1], to = pair[2];
        // export rgb2hsl and ["rgb"]["hsl"]
        convert[from] = convert[from] || {
        };
        convert[from][to] = convert[func] = (function(func) {
            return function(arg) {
                if (typeof arg == "number") arg = Array.prototype.slice.call(arguments);
                var val = conversions[func](arg);
                if (typeof val == "string" || val === undefined) return val; // keyword
                for(var i = 0; i < val.length; i++)val[i] = Math.round(val[i]);
                return val;
            };
        })(func);
    }
    /* Converter does lazy conversion and caching */ var Converter = function() {
        this.convs = {
        };
    };
    /* Either get the values for a space or
  set the values for a space, depending on args */ Converter.prototype.routeSpace = function(space, args) {
        var values = args[0];
        if (values === undefined) // color.rgb()
        return this.getValues(space);
        // color.rgb(10, 10, 10)
        if (typeof values == "number") values = Array.prototype.slice.call(args);
        return this.setValues(space, values);
    };
    /* Set the values for a space, invalidating cache */ Converter.prototype.setValues = function(space, values) {
        this.space = space;
        this.convs = {
        };
        this.convs[space] = values;
        return this;
    };
    /* Get the values for a space. If there's already
  a conversion for the space, fetch it, otherwise
  compute it */ Converter.prototype.getValues = function(space) {
        var vals = this.convs[space];
        if (!vals) {
            var fspace = this.space, from = this.convs[fspace];
            vals = convert[fspace][space](from);
            this.convs[space] = vals;
        }
        return vals;
    };
    [
        "rgb",
        "hsl",
        "hsv",
        "cmyk",
        "keyword"
    ].forEach(function(space) {
        Converter.prototype[space] = function(vals) {
            return this.routeSpace(space, arguments);
        };
    });
    module.exports = convert;
});
var load3 = __swcpack_require__.bind(void 0, function(module, exports) {
    var convert = load2();
    module.exports = function(cstr) {
        var m, conv, parts, alpha;
        if (m = /^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(cstr)) {
            var name = m[1];
            var base = name.replace(/a$/, '');
            var size = base === 'cmyk' ? 4 : 3;
            conv = convert[base];
            parts = m[2].replace(/^\s+|\s+$/g, '').split(/\s*,\s*/).map(function(x, i) {
                if (/%$/.test(x) && i === size) return parseFloat(x) / 100;
                else if (/%$/.test(x)) return parseFloat(x);
                return parseFloat(x);
            });
            if (name === base) parts.push(1);
            alpha = parts[size] === undefined ? 1 : parts[size];
            parts = parts.slice(0, size);
            conv[base] = function() {
                return parts;
            };
        } else if (/^#[A-Fa-f0-9]+$/.test(cstr)) {
            var base = cstr.replace(/^#/, '');
            var size = base.length;
            conv = convert.rgb;
            parts = base.split(size === 3 ? /(.)/ : /(..)/);
            parts = parts.filter(Boolean).map(function(x) {
                if (size === 3) return parseInt(x + x, 16);
                else return parseInt(x, 16);
            });
            alpha = 1;
            conv.rgb = function() {
                return parts;
            };
            if (!parts[0]) parts[0] = 0;
            if (!parts[1]) parts[1] = 0;
            if (!parts[2]) parts[2] = 0;
        } else {
            conv = convert.keyword;
            conv.keyword = function() {
                return cstr;
            };
            parts = cstr;
            alpha = 1;
        }
        var res = {
            rgb: undefined,
            hsl: undefined,
            hsv: undefined,
            cmyk: undefined,
            keyword: undefined,
            hex: undefined
        };
        try {
            res.rgb = conv.rgb(parts);
        } catch (e) {
        }
        try {
            res.hsl = conv.hsl(parts);
        } catch (e3) {
        }
        try {
            res.hsv = conv.hsv(parts);
        } catch (e4) {
        }
        try {
            res.cmyk = conv.cmyk(parts);
        } catch (e5) {
        }
        try {
            res.keyword = conv.keyword(parts);
        } catch (e6) {
        }
        if (res.rgb) res.hex = '#' + res.rgb.map(function(x) {
            var s = x.toString(16);
            if (s.length === 1) return '0' + s;
            return s;
        }).join('');
        if (res.rgb) res.rgba = res.rgb.concat(alpha);
        if (res.hsl) res.hsla = res.hsl.concat(alpha);
        if (res.hsv) res.hsva = res.hsv.concat(alpha);
        if (res.cmyk) res.cmyka = res.cmyk.concat(alpha);
        return res;
    };
});
var blobs2 = load();
var parse = load3();
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
                    "--num-blobs",
                    "--colors",
                    "--min-opacity",
                    "--max-opacity",
                    "--seed", 
                ].map(function(propName) {
                    var prop1 = props.get(propName);
                    // Cater for browsers that don't speak CSS Typed OM and
                    // for browsers that do speak it, but haven't registered the props
                    if (typeof CSSUnparsedValue === "undefined" || _instanceof(prop1, CSSUnparsedValue)) {
                        if (!prop1.length || prop1 === "") return undefined;
                        switch(propName){
                            case "--extra-points":
                            case "--randomness":
                            case "--min-size":
                            case "--max-size":
                            case "--num-blobs":
                            case "--seed":
                                return parseInt(prop1.toString());
                            case "--min-opacity":
                            case "--max-opacity":
                                return parseFloat(prop1.toString());
                            case "--colors":
                                return prop1.toString().split(",").map(function(color) {
                                    return color.trim();
                                });
                            default:
                                return prop1.toString().trim();
                        }
                    }
                    // Prop is not typed using @property (UnparsedValue) and not set either
                    // ~> Return undefined so that we can fall back to the default value during destructuring
                    if (_instanceof(prop1, CSSUnparsedValue) && !prop1.length) return undefined;
                    // Prop is a UnitValue (Number, Percentage, Integer, …)
                    // ~> Return the value
                    if (_instanceof(prop1, CSSUnitValue)) return prop1.value;
                    // Special case: cell colors
                    // We need to get each value using props.getAll();
                    if (propName === "--colors") return props.getAll(propName).map(function(prop) {
                        return prop.toString().trim();
                    });
                    // All others (such as CSSKeywordValue)
                    //~> Return the string
                    return prop1.toString().trim();
                });
            }
        },
        {
            key: "paint",
            value: function paint(ctx, geom, props) {
                var w = geom.width, h = geom.height;
                var ref = _slicedToArray(this.parseProps(props), 9), tmp = ref[0], extraPoints = tmp === void 0 ? 1 : tmp, tmp1 = ref[1], randomness = tmp1 === void 0 ? 20 : tmp1, tmp2 = ref[2], minSize = tmp2 === void 0 ? 20 : tmp2, tmp3 = ref[3], maxSize = tmp3 === void 0 ? 400 : tmp3, tmp4 = ref[4], numBlobs = tmp4 === void 0 ? 5 : tmp4, tmp5 = ref[5], colors = tmp5 === void 0 ? [
                    "#71a7ee",
                    "#7940c1"
                ] : tmp5, tmp6 = ref[6], minOpacity = tmp6 === void 0 ? 0.5 : tmp6, tmp7 = ref[7], maxOpacity = tmp7 === void 0 ? 1 : tmp7, tmp8 = ref[8], seed = tmp8 === void 0 ? 123 : tmp8;
                console.log(this.parseProps(props));
                this.getRandom = mulberry32(seed);
                ctx.clearRect(0, 0, w, h);
                for(var i = 0, max = numBlobs; i < max; i++){
                    var ref1;
                    var path = blobs2.canvasPath({
                        seed: this.getRandom(),
                        extraPoints: extraPoints,
                        randomness: randomness,
                        size: this.rand(minSize, maxSize)
                    }, {
                        offsetX: this.rand(0, w),
                        offsetY: this.rand(0, h)
                    });
                    var color = (ref1 = parse(colors[this.rand(0, colors.length - 1)])) === null || ref1 === void 0 ? void 0 : ref1.rgba;
                    if (color) {
                        console.log(minOpacity * 100, maxOpacity * 100);
                        ctx.fillStyle = "rgba(".concat(color[0], ", ").concat(color[1], ", ").concat(color[2], ", ").concat(this.rand(minOpacity * 100, maxOpacity * 100) / 100, ")");
                    }
                    console.log(ctx.fillStyle);
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
                    "--num-blobs",
                    "--colors",
                    "--min-opacity",
                    "--max-opacity",
                    "--seed", 
                ];
            }
        }
    ]);
    return BlobsPainter;
}();
registerPaint("blobs", BlobsPainter1);
