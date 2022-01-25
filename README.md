# react-native-squircle-skia

## Disclaimer

> "@shopify/react-native-skia is alpha release. Use with caution.

> This library dependes on [figma's blog article](https://www.figma.com/blog/desperately-seeking-squircles/).

## What is this?

This library creates a smooth cornered rectangle view via skia path based on [Figma's corner smoothing](https://help.figma.com/hc/en-us/articles/360050986854-Adjust-corner-radius-and-smoothing).

## Installation

npm jobs in progress

## Usage

npm jobs in progress

## Props

Squircle inherits [View Props](https://facebook.github.io/react-native/docs/view#props) in order to use all the styles presetted in your own project.

- This library uses `borderRadius`(including all the others like borderTopLeftRadius) to set corner radius.
- This library uses `backgroundColor` to set the path fill

### squircleParams

#### cornerSmoothing

> `number` | defaults to 1

Goes from 0 to 1, controls how smooth the corners should be.

#### color

> `SquircleColorProp`

Is used to set backgroundColor(path fill color). you can use a skia ColorProp. `backgroundColor` in style prop will be ignored if you set color.

## TODO

- [ ] `borderWidth | borderColor | borderStyle` support for Squircle.

## Thanks to

- [Tien Pham
  ](https://github.com/tienphaw) for creating [figma-squircle](https://github.com/tienphaw/figma-squircle), helped me a lot with main logics

- [@shopify/react-native-skia](https://github.com/shopify/react-native-skia) for creating skia for react native.

## Motivated by

- [figma-squircle](https://github.com/tienphaw/figma-squircle) - This library helped me with drawing squircle path.
