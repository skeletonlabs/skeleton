export type TailwindNumbers = typeof tailwindNumbers[number];
export declare const tailwindNumbers: readonly ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
export type SemanticNames = typeof semanticNames[number];
export declare const semanticNames: readonly ["primary", "secondary", "tertiary", "success", "warning", "error", "surface"];
export type HexRgb = {
    hex: string;
    rgb: string;
};
export type TailwindColorObject = {
    label: string;
    shades: Record<TailwindNumbers, HexRgb>;
};
export declare const tailwindDefaultColors: TailwindColorObject[];
