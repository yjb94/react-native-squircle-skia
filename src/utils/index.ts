// code from https://github.com/tienphaw/figma-squircle

import { CornerParams, CornerPathParams } from 'src/types';

export const getPathParamsForCorner = memoize(
  ({
    cornerRadius,
    cornerSmoothing,
    width,
    height,
  }: CornerParams): CornerPathParams => {
    const maxRadius = Math.min(width, height) / 2;
    cornerRadius = Math.min(cornerRadius, maxRadius);

    const p = Math.min((1 + cornerSmoothing) * cornerRadius, maxRadius);

    let angleAlpha: number, angleBeta: number;

    if (cornerRadius <= maxRadius / 2) {
      angleBeta = 90 * (1 - cornerSmoothing);
      angleAlpha = 45 * cornerSmoothing;
    } else {
      const diffRatio = (cornerRadius - maxRadius / 2) / (maxRadius / 2);

      angleBeta = 90 * (1 - cornerSmoothing * (1 - diffRatio));
      angleAlpha = 45 * cornerSmoothing * (1 - diffRatio);
    }

    const angleTheta = (90 - angleBeta) / 2;
    const p3ToP4Distance = cornerRadius * Math.tan(toRadians(angleTheta / 2));

    const circularSectionLength =
      Math.sin(toRadians(angleBeta / 2)) * cornerRadius * Math.sqrt(2);

    const c = p3ToP4Distance * Math.cos(toRadians(angleAlpha));
    const d = c * Math.tan(toRadians(angleAlpha));
    const b = (p - circularSectionLength - c - d) / 3;
    const a = 2 * b;

    return {
      a,
      b,
      c,
      d,
      p,
      circularSectionLength,
    };
  }
);

function toRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

function memoize<R, T extends (args: any) => R>(f: T): T {
  const memory = new Map<string, R>();

  const g = (args: any) => {
    memory.get(JSON.stringify(args));
    if (!memory.get(JSON.stringify(args))) {
      memory.set(JSON.stringify(args), f(args));
    }

    return memory.get(JSON.stringify(args));
  };

  return g as T;
}
