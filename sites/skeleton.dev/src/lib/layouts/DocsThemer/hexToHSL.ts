interface HSL {
    h: number; // Hue value between 0 and 360
    s: number; // Saturation value between 0 and 100
    l: number; // Lightness value between 0 and 100
}

export function hexToHSL(hex: string): HSL {
    // Remove the "#" symbol if present
    hex = hex.replace("#", "");

    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    let h = 0;
    if (delta !== 0) {
        if (max === r) {
            h = ((g - b) / delta) % 6;
        } else if (max === g) {
            h = (b - r) / delta + 2;
        } else {
            h = (r - g) / delta + 4;
        }
        h *= 60;
    }

    const l = (max + min) / 2;

    let s = 0;
    if (delta !== 0) {
        s = delta / (1 - Math.abs(2 * l - 1));
    }

    return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function hslToHex(hsl: HSL): string {
    const h = hsl.h;
    const s = hsl.s / 100;
    const l = hsl.l / 100;

    const C = (1 - Math.abs(2 * l - 1)) * s;
    const X = C * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - C / 2;

    let r: number, g: number, b: number;
    if (0 <= h && h < 60) {
        [r, g, b] = [C, X, 0];
    } else if (60 <= h && h < 120) {
        [r, g, b] = [X, C, 0];
    } else if (120 <= h && h < 180) {
        [r, g, b] = [0, C, X];
    } else if (180 <= h && h < 240) {
        [r, g, b] = [0, X, C];
    } else if (240 <= h && h < 300) {
        [r, g, b] = [X, 0, C];
    } else if (300 <= h && h < 360) {
        [r, g, b] = [C, 0, X];
    } else {
        [r, g, b] = [0, 0, 0]; // Default values for undefined hue
    }

    const rgbToHex = (num: number) => Math.round(num * 255).toString(16).padStart(2, '0');

    return `#${rgbToHex(r + m)}${rgbToHex(g + m)}${rgbToHex(b + m)}`;
}
