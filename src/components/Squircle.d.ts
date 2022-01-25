import { ColorProp } from '@shopify/react-native-skia';
import { DrawingContext } from '@shopify/react-native-skia/src/renderer/DrawingContext';
import React from 'react';
import { ViewProps } from 'react-native';
declare type SquircleColorProp = ColorProp | ((ctx: DrawingContext) => ColorProp | undefined);
declare type SquircleProps = ViewProps & {
    smoothing?: number;
    color?: SquircleColorProp;
};
declare const Squircle: React.FC<SquircleProps>;
export default Squircle;
