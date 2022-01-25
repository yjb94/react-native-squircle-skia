"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var slider_1 = __importDefault(require("@react-native-community/slider"));
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_squircle_skia_1 = __importDefault(require("react-native-squircle-skia"));
var App = function () {
    var _a = (0, react_1.useState)(50), radius = _a[0], setRadius = _a[1];
    var handleValueChange = function (value) {
        setRadius(Math.floor(value));
    };
    return (react_1.default.createElement(react_native_1.SafeAreaView, { style: styles.container },
        react_1.default.createElement(react_native_squircle_skia_1.default, { style: [
                styles.squircle,
                {
                    borderRadius: radius,
                },
            ] },
            react_1.default.createElement(react_native_1.Text, null, "i am a child")),
        react_1.default.createElement(slider_1.default, { minimumValue: 0, maximumValue: 200, value: radius, onValueChange: handleValueChange }),
        react_1.default.createElement(react_native_1.Text, null, "radius: ".concat(radius))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    squircle: {
        width: '100%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
});
exports.default = App;
