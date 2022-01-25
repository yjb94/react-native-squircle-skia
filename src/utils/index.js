"use strict";
// code from https://github.com/tienphaw/figma-squircle
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathParamsForCorner = void 0;
exports.getPathParamsForCorner = memoize(function (_a) {
    var cornerRadius = _a.cornerRadius, cornerSmoothing = _a.cornerSmoothing, width = _a.width, height = _a.height;
    var maxRadius = Math.min(width, height) / 2;
    cornerRadius = Math.min(cornerRadius, maxRadius);
    var p = Math.min((1 + cornerSmoothing) * cornerRadius, maxRadius);
    var angleAlpha, angleBeta;
    if (cornerRadius <= maxRadius / 2) {
        angleBeta = 90 * (1 - cornerSmoothing);
        angleAlpha = 45 * cornerSmoothing;
    }
    else {
        var diffRatio = (cornerRadius - maxRadius / 2) / (maxRadius / 2);
        angleBeta = 90 * (1 - cornerSmoothing * (1 - diffRatio));
        angleAlpha = 45 * cornerSmoothing * (1 - diffRatio);
    }
    var angleTheta = (90 - angleBeta) / 2;
    var p3ToP4Distance = cornerRadius * Math.tan(toRadians(angleTheta / 2));
    var circularSectionLength = Math.sin(toRadians(angleBeta / 2)) * cornerRadius * Math.sqrt(2);
    var c = p3ToP4Distance * Math.cos(toRadians(angleAlpha));
    var d = c * Math.tan(toRadians(angleAlpha));
    var b = (p - circularSectionLength - c - d) / 3;
    var a = 2 * b;
    return {
        a: a,
        b: b,
        c: c,
        d: d,
        p: p,
        circularSectionLength: circularSectionLength,
    };
});
function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
}
function memoize(f) {
    var memory = new Map();
    var g = function (args) {
        memory.get(JSON.stringify(args));
        if (!memory.get(JSON.stringify(args))) {
            memory.set(JSON.stringify(args), f(args));
        }
        return memory.get(JSON.stringify(args));
    };
    return g;
}
