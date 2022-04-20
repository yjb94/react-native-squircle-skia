import { Color } from '@shopify/react-native-skia';
import { ViewProps } from 'react-native';

export declare type SquircleProps = ViewProps & {
  smoothing?: number;
  color?: Color;
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
