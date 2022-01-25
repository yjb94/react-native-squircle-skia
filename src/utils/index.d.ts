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
export declare const getPathParamsForCorner: ({ cornerRadius, cornerSmoothing, width, height, }: CornerParams) => CornerPathParams;
