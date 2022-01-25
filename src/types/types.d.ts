import { ColorProp } from '@shopify/react-native-skia';
import { DrawingContext } from '@shopify/react-native-skia/src/renderer/DrawingContext';

export type SquircleColorProp =
  | ColorProp
  | ((ctx: DrawingContext) => ColorProp | undefined);

export type SquircleProps = ViewProps & {
  smoothing?: number;
  color?: SquircleColorProp;
};

export interface CornerParams {
  cornerRadius: number;
  cornerSmoothing: number;
  width: number;
  height: number;
}

export interface CornerPathParams {
  a: number;
  b: number;
  c: number;
  d: number;
  p: number;
  circularSectionLength: number;
}
