import { ColorProp } from '@shopify/react-native-skia';
import { DrawingContext } from '@shopify/react-native-skia/src/renderer/DrawingContext';
import { ViewProps } from 'react-native';

export declare type SquircleColorProp =
  | ColorProp
  | ((ctx: DrawingContext) => ColorProp | undefined);

export declare type SquircleProps = ViewProps & {
  smoothing?: number;
  color?: SquircleColorProp;
};

export declare interface CornerParams {
  cornerRadius: number;
  cornerSmoothing: number;
  width: number;
  height: number;
}

export declare interface CornerPathParams {
  a: number;
  b: number;
  c: number;
  d: number;
  p: number;
  circularSectionLength: number;
}

export {};
