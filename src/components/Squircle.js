"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_skia_1 = require("@shopify/react-native-skia");
require("@shopify/react-native-skia/src/renderer/DrawingContext");
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var utils_1 = require("../utils");
var Squircle = function (_a) {
    var _b = _a.smoothing, smoothing = _b === void 0 ? 1 : _b, style = _a.style, children = _a.children, color = _a.color, otherProps = __rest(_a, ["smoothing", "style", "children", "color"]);
    var flattenStyle = (0, react_1.useMemo)(function () { return react_native_1.StyleSheet.flatten(style); }, [style]);
    var borderRadius = flattenStyle.borderRadius, _c = flattenStyle.borderTopLeftRadius, borderTopLeftRadius = _c === void 0 ? borderRadius : _c, _d = flattenStyle.borderTopRightRadius, borderTopRightRadius = _d === void 0 ? borderRadius : _d, _e = flattenStyle.borderBottomLeftRadius, borderBottomLeftRadius = _e === void 0 ? borderRadius : _e, _f = flattenStyle.borderBottomRightRadius, borderBottomRightRadius = _f === void 0 ? borderRadius : _f, borderWidth = flattenStyle.borderWidth, borderColor = flattenStyle.borderColor, borderStyle = flattenStyle.borderStyle, backgroundColor = flattenStyle.backgroundColor, otherStyles = __rest(flattenStyle, ["borderRadius", "borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius", "borderWidth", "borderColor", "borderStyle", "backgroundColor"]);
    if (borderRadius === undefined ||
        (borderTopLeftRadius === undefined &&
            borderTopRightRadius === undefined &&
            borderBottomLeftRadius === undefined &&
            borderBottomRightRadius === undefined)) {
        throw new Error('react-native-squircle-skia: No borderRadius provided in Squircle style');
    }
    if (borderWidth !== undefined ||
        borderColor !== undefined ||
        borderStyle !== undefined) {
        throw new Error('react-native-squircle-skia: Setting border is not supported.');
    }
    var _g = (0, react_1.useState)(0), width = _g[0], setWidth = _g[1];
    var _h = (0, react_1.useState)(0), height = _h[0], setHeight = _h[1];
    var pathColor = (0, react_1.useMemo)(function () {
        return (color || backgroundColor || 'transparent');
    }, [backgroundColor, color]);
    var drawTopRightCornerPath = function (path) {
        if (borderTopRightRadius) {
            var _a = (0, utils_1.getPathParamsForCorner)({
                width: width,
                height: height,
                cornerRadius: borderTopRightRadius,
                cornerSmoothing: smoothing,
            }), a = _a.a, b = _a.b, c = _a.c, d = _a.d, p = _a.p, circularSectionLength = _a.circularSectionLength;
            path.moveTo(Math.max(width / 2, width - p), 0);
            path.cubicTo(width - (p - a), 0, width - (p - a - b), 0, width - (p - a - b - c), d);
            path.rArcTo(borderTopRightRadius, borderTopRightRadius, 0, true, false, circularSectionLength, circularSectionLength);
            path.cubicTo(width, p - a - b, width, p - a, width, Math.min(height / 2, p));
        }
        else {
            path.moveTo(width / 2, 0);
            path.lineTo(width, 0);
            path.lineTo(width, height / 2);
        }
    };
    var drawBottomRightCornerPath = function (path) {
        if (borderBottomRightRadius) {
            var _a = (0, utils_1.getPathParamsForCorner)({
                width: width,
                height: height,
                cornerRadius: borderBottomRightRadius,
                cornerSmoothing: smoothing,
            }), a = _a.a, b = _a.b, c = _a.c, d = _a.d, p = _a.p, circularSectionLength = _a.circularSectionLength;
            path.lineTo(width, Math.max(height / 2, height - p));
            path.cubicTo(width, height - (p - a), width, height - (p - a - b), width - d, height - (p - a - b - c));
            path.rArcTo(borderBottomRightRadius, borderBottomRightRadius, 0, true, false, -circularSectionLength, circularSectionLength);
            path.cubicTo(width - (p - a - b), height, width - (p - a), height, Math.max(width / 2, width - p), height);
        }
        else {
            path.lineTo(width, height);
            path.lineTo(width / 2, height);
        }
    };
    var drawBottomLeftCornerPath = function (path) {
        if (borderBottomLeftRadius) {
            var _a = (0, utils_1.getPathParamsForCorner)({
                width: width,
                height: height,
                cornerRadius: borderBottomLeftRadius,
                cornerSmoothing: smoothing,
            }), a = _a.a, b = _a.b, c = _a.c, d = _a.d, p = _a.p, circularSectionLength = _a.circularSectionLength;
            path.lineTo(Math.min(width / 2, p), height);
            path.cubicTo(p - a, height, p - a - b, height, p - a - b - c, height - d);
            path.rArcTo(borderBottomLeftRadius, borderBottomLeftRadius, 0, true, false, -circularSectionLength, -circularSectionLength);
            path.cubicTo(0, height - (p - a - b), 0, height - (p - a), 0, Math.max(height / 2, height - p));
        }
        else {
            path.lineTo(0, height);
            path.lineTo(0, height / 2);
        }
    };
    var drawTopLeftCornerPath = function (path) {
        if (borderTopLeftRadius) {
            var _a = (0, utils_1.getPathParamsForCorner)({
                width: width,
                height: height,
                cornerRadius: borderTopLeftRadius,
                cornerSmoothing: smoothing,
            }), a = _a.a, b = _a.b, c = _a.c, d = _a.d, p = _a.p, circularSectionLength = _a.circularSectionLength;
            path.lineTo(0, Math.min(height / 2, p));
            path.cubicTo(0, p - a, 0, p - a - b, d, p - a - b - c);
            path.rArcTo(borderTopLeftRadius, borderTopLeftRadius, 0, true, false, circularSectionLength, -circularSectionLength);
            path.cubicTo(p - a - b, 0, p - a, 0, Math.min(width / 2, p), 0);
        }
        else {
            path.lineTo(0, 0);
        }
        path.close();
    };
    var _path = (0, react_native_skia_1.usePath)(function (path) {
        drawTopRightCornerPath(path);
        drawBottomRightCornerPath(path);
        drawBottomLeftCornerPath(path);
        drawTopLeftCornerPath(path);
        return path;
    }, [smoothing, borderRadius, width, height]);
    var handleLayout = function (event) {
        setWidth(event.nativeEvent.layout.width);
        setHeight(event.nativeEvent.layout.height);
    };
    return (react_1.default.createElement(react_native_1.View, __assign({ style: [otherStyles] }, otherProps, { onLayout: handleLayout }),
        react_1.default.createElement(react_native_skia_1.Canvas, { style: react_native_1.StyleSheet.absoluteFill },
            react_1.default.createElement(react_native_skia_1.Path, { path: _path, color: pathColor })),
        children));
};
exports.default = Squircle;
