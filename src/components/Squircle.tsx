import { Canvas, IPath, Path, usePath } from '@shopify/react-native-skia';
import React, { useMemo, useState } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { SquircleColorProp, SquircleProps } from '../types/types';
import { getPathParamsForCorner } from '../utils';

const Squircle: React.FC<SquircleProps> = ({
  smoothing = 1,
  style,
  children,
  color,
  ...otherProps
}) => {
  const flattenStyle = useMemo(() => StyleSheet.flatten(style), [style]);
  const {
    borderRadius,
    borderTopLeftRadius = borderRadius,
    borderTopRightRadius = borderRadius,
    borderBottomLeftRadius = borderRadius,
    borderBottomRightRadius = borderRadius,
    borderWidth,
    borderColor,
    borderStyle,
    backgroundColor,
    ...otherStyles
  } = flattenStyle;

  if (
    borderRadius === undefined ||
    (borderTopLeftRadius === undefined &&
      borderTopRightRadius === undefined &&
      borderBottomLeftRadius === undefined &&
      borderBottomRightRadius === undefined)
  ) {
    throw new Error(
      'react-native-squircle-skia: No borderRadius provided in Squircle style'
    );
  }

  if (
    borderWidth !== undefined ||
    borderColor !== undefined ||
    borderStyle !== undefined
  ) {
    throw new Error(
      'react-native-squircle-skia: Setting border is not supported.'
    );
  }
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const pathColor = useMemo<SquircleColorProp | undefined>(() => {
    return (color || backgroundColor || 'transparent') as
      | SquircleColorProp
      | undefined;
  }, [backgroundColor, color]);

  const drawTopRightCornerPath = (path: IPath) => {
    if (borderTopRightRadius) {
      const { a, b, c, d, p, circularSectionLength } = getPathParamsForCorner({
        width,
        height,
        cornerRadius: borderTopRightRadius,
        cornerSmoothing: smoothing,
      });
      path.moveTo(Math.max(width / 2, width - p), 0);
      path.cubicTo(
        width - (p - a),
        0,
        width - (p - a - b),
        0,
        width - (p - a - b - c),
        d
      );
      path.rArcTo(
        borderTopRightRadius,
        borderTopRightRadius,
        0,
        true,
        false,
        circularSectionLength,
        circularSectionLength
      );
      path.cubicTo(
        width,
        p - a - b,
        width,
        p - a,
        width,
        Math.min(height / 2, p)
      );
    } else {
      path.moveTo(width / 2, 0);
      path.lineTo(width, 0);
      path.lineTo(width, height / 2);
    }
  };

  const drawBottomRightCornerPath = (path: IPath) => {
    if (borderBottomRightRadius) {
      const { a, b, c, d, p, circularSectionLength } = getPathParamsForCorner({
        width,
        height,
        cornerRadius: borderBottomRightRadius,
        cornerSmoothing: smoothing,
      });
      path.lineTo(width, Math.max(height / 2, height - p));
      path.cubicTo(
        width,
        height - (p - a),
        width,
        height - (p - a - b),
        width - d,
        height - (p - a - b - c)
      );
      path.rArcTo(
        borderBottomRightRadius,
        borderBottomRightRadius,
        0,
        true,
        false,
        -circularSectionLength,
        circularSectionLength
      );
      path.cubicTo(
        width - (p - a - b),
        height,
        width - (p - a),
        height,
        Math.max(width / 2, width - p),
        height
      );
    } else {
      path.lineTo(width, height);
      path.lineTo(width / 2, height);
    }
  };

  const drawBottomLeftCornerPath = (path: IPath) => {
    if (borderBottomLeftRadius) {
      const { a, b, c, d, p, circularSectionLength } = getPathParamsForCorner({
        width,
        height,
        cornerRadius: borderBottomLeftRadius,
        cornerSmoothing: smoothing,
      });
      path.lineTo(Math.min(width / 2, p), height);
      path.cubicTo(p - a, height, p - a - b, height, p - a - b - c, height - d);
      path.rArcTo(
        borderBottomLeftRadius,
        borderBottomLeftRadius,
        0,
        true,
        false,
        -circularSectionLength,
        -circularSectionLength
      );
      path.cubicTo(
        0,
        height - (p - a - b),
        0,
        height - (p - a),
        0,
        Math.max(height / 2, height - p)
      );
    } else {
      path.lineTo(0, height);
      path.lineTo(0, height / 2);
    }
  };

  const drawTopLeftCornerPath = (path: IPath) => {
    if (borderTopLeftRadius) {
      const { a, b, c, d, p, circularSectionLength } = getPathParamsForCorner({
        width,
        height,
        cornerRadius: borderTopLeftRadius,
        cornerSmoothing: smoothing,
      });
      path.lineTo(0, Math.min(height / 2, p));
      path.cubicTo(0, p - a, 0, p - a - b, d, p - a - b - c);
      path.rArcTo(
        borderTopLeftRadius,
        borderTopLeftRadius,
        0,
        true,
        false,
        circularSectionLength,
        -circularSectionLength
      );
      path.cubicTo(p - a - b, 0, p - a, 0, Math.min(width / 2, p), 0);
    } else {
      path.lineTo(0, 0);
    }
    path.close();
  };

  const _path = usePath(
    (path) => {
      drawTopRightCornerPath(path);
      drawBottomRightCornerPath(path);
      drawBottomLeftCornerPath(path);
      drawTopLeftCornerPath(path);
      return path;
    },
    [smoothing, borderRadius, width, height]
  );

  const handleLayout: ViewProps['onLayout'] = (event) => {
    setWidth(event.nativeEvent.layout.width);
    setHeight(event.nativeEvent.layout.height);
  };

  return (
    <View style={[otherStyles]} {...otherProps} onLayout={handleLayout}>
      <Canvas style={StyleSheet.absoluteFill}>
        <Path path={_path} color={pathColor} />
      </Canvas>
      {children}
    </View>
  );
};

export default Squircle;
