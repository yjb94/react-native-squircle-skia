# react-native-squircle-skia

![thumbnail](https://user-images.githubusercontent.com/6838787/151216382-2dcdb581-f5d8-4320-9684-ee96b0b54dc4.png)

## Disclaimer

> @shopify/react-native-skia is alpha release. Use with caution.

> This library dependes on [figma's blog article](https://www.figma.com/blog/desperately-seeking-squircles/).

## What is this?

This library creates a smooth cornered rectangle view via skia path based on [Figma's corner smoothing](https://help.figma.com/hc/en-us/articles/360050986854-Adjust-corner-radius-and-smoothing).

## Installation

follow installation guide in [@shopify/react-native-skia](https://shopify.github.io/react-native-skia/docs/getting-started/installation)

then using yarn,

```
  yarn add react-native-squircle-skia
```

or

```
  npm install react-native-squircle-skia --save
```

## Usage
<div>
  <img src="https://user-images.githubusercontent.com/6838787/151213872-e5ba4e04-2a69-47af-8cf3-c33c83ecd105.gif" width="300" />
  <img src="https://user-images.githubusercontent.com/6838787/151228256-0493d857-fd42-4dd2-ba7d-8ad5265b965a.gif" width="300" />
</div>

### basic usage

```tsx
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Squircle from 'react-native-squircle-skia';

const App = () => {
  const [radius, setRadius] = useState(50);

  return (
    <SafeAreaView style={styles.container}>
      <Squircle
        smoothing={0.7}
        style={[
          styles.squircle,
          {
            borderRadius: radius,
          },
        ]}
      >
        <Text>i am a child</Text>
      </Squircle>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default App;
```

## Props

Squircle inherits [View Props](https://facebook.github.io/react-native/docs/view#props) in order to use all the styles presetted in your own project.

- This library uses `borderRadius`(including all the others like borderTopLeftRadius) to set corner radius.
- This library uses `backgroundColor` to set the path fill

### squircleParams

#### smoothing

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
