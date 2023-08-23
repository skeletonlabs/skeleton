import { hslToHex, hexToHSL } from "./hexToHSL";

export function randomHexCode(): string {
    const hex = (Math.random() * 0xffffff) << 0;
    return '#' + hex.toString(16).padStart(6, '0');
}

export function generateRandomHexColors(baseColor: string, count: number) {
    const hexCodes = [baseColor];
    for (let i = 0; i < count-1; i++) {
        hexCodes.push(randomHexCode());
    }
    return hexCodes;
};

export function generateComplementaryColors(baseColor: string, count: number): string[] {
    const baseHSL = hexToHSL(baseColor);
    const complementaryHue = (baseHSL.h + 180) % 360;
    
    const hexCodes = [];
    const step = 360 / count;

    for (let i = 0; i < count; i++) {
        const hue = (complementaryHue + i * step) % 360;
        const complementaryColor = hslToHex({ h: hue, s: baseHSL.s, l: baseHSL.l });
        hexCodes.push(complementaryColor);
    }

    return hexCodes;
}

export function generateAnalogousColors(baseColor: string, count: number): string[] {
    const baseHSL = hexToHSL(baseColor);
    const step = 360 / count;
    const hexCodes = [];

    for (let i = 0; i < count; i++) {
        const hue = (baseHSL.h + i * step) % 360;
        const analogousColor = hslToHex({ h: hue, s: baseHSL.s, l: baseHSL.l });
        hexCodes.push(analogousColor);
    }

    return hexCodes;
}

export function generateTriadicColors(baseColor: string, count: number): string[] {
    const baseHSL = hexToHSL(baseColor);
    const step = 120; // Triadic hexCodes are 120 degrees apart

    const hexCodes = [];
    
    for (let i = 0; i < count; i++) {
        const hue = (baseHSL.h + i * step) % 360;
        const triadicColor = hslToHex({ h: hue, s: baseHSL.s, l: baseHSL.l });
        hexCodes.push(triadicColor);
    }

    return hexCodes;
}

export function generateSplitComplementaryColors(baseColor: string, count: number): string[] {
    const baseHSL = hexToHSL(baseColor);
    const complementaryHue = (baseHSL.h + 180) % 360;
    const offset1 = 30; // Adjust this value to control the offset from the complementary color
    const offset2 = 330; // Offset for the second adjacent color

    const hexCodes = [];

    for (let i = 0; i < count; i++) {
        const hue1 = (complementaryHue + offset1 + i * (360 / (count - 1))) % 360;
        const hue2 = (complementaryHue + offset2 + i * (360 / (count - 1))) % 360;
        
        const color1 = hslToHex({ h: hue1, s: baseHSL.s, l: baseHSL.l });
        const color2 = hslToHex({ h: hue2, s: baseHSL.s, l: baseHSL.l });
        
        hexCodes.push(color1, color2);
    }

    return hexCodes;
}

export function generateTetradicColors(baseColor: string, count: number): string[] {
    const baseHSL = hexToHSL(baseColor);
    const complementaryHue = (baseHSL.h + 180) % 360;
    const offset1 = 60; // Adjust this value to control the offset from the complementary color
    const offset2 = 180; // Offset for the second hue
    const offset3 = 240; // Offset for the third hue

    const hexCodes = [];

    for (let i = 0; i < count; i++) {
        const hue1 = (complementaryHue + offset1 + i * (360 / (count - 1))) % 360;
        const hue2 = (complementaryHue + offset2 + i * (360 / (count - 1))) % 360;
        const hue3 = (complementaryHue + offset3 + i * (360 / (count - 1))) % 360;
        
        const color1 = hslToHex({ h: hue1, s: baseHSL.s, l: baseHSL.l });
        const color2 = hslToHex({ h: hue2, s: baseHSL.s, l: baseHSL.l });
        const color3 = hslToHex({ h: hue3, s: baseHSL.s, l: baseHSL.l });
        
        hexCodes.push(color1, color2, color3);
    }

    return hexCodes;
}

export function generateMonochromaticColors(baseColor: string, count: number): string[] {
    const baseHSL = hexToHSL(baseColor);
    const hexCodes = [];
    
    for (let i = 0; i < count; i++) {
        const modifiedL = baseHSL.l - (i * (baseHSL.l / (count - 1))); // Adjust this value for lightness variation
        const modifiedColor = hslToHex({ h: baseHSL.h, s: baseHSL.s, l: modifiedL });
        hexCodes.push(modifiedColor);
    }

    return hexCodes;
}

export function generateNeutralWithAccentColors(baseColor: string, count: number): string[] {
    const neutralHSL = hexToHSL(baseColor);
    const neutralColors = generateMonochromaticColors(baseColor, count);
    
    const accentColors = [];

    for (let i = 0; i < count; i++) {
        const modifiedHue = (neutralHSL.h + 180 + (i * (360 / count))) % 360;
        const accentColor = hslToHex({ h: modifiedHue, s: 50, l: 50 }); // You can adjust saturation and lightness
        accentColors.push(accentColor);
    }

    return [...neutralColors, ...accentColors];
}

export function generatePastelColors(baseColor: string, count: number): string[] {
    const baseHSL = hexToHSL(baseColor);
    const hexCodes = [];
    
    for (let i = 0; i < count; i++) {
        const modifiedS = baseHSL.s * 0.5; // Adjust this value for saturation reduction
        const modifiedL = baseHSL.l * (1 - (i * 0.1)); // Adjust this value for lightness reduction
        const pastelColor = hslToHex({ h: baseHSL.h, s: modifiedS, l: modifiedL });
        hexCodes.push(pastelColor);
    }

    return hexCodes;
}

export function generateHighContrastColors(baseColor: string, count: number): string[] {
    const baseHSL = hexToHSL(baseColor);
    const colors = [];
    
    for (let i = 0; i < count; i++) {
        const modifiedHue = (baseHSL.h + 60 * i) % 360; // Adjust this value for hue variation
        const modifiedS = (baseHSL.s + 50) % 100; // Adjust this value for saturation variation
        const modifiedL = (baseHSL.l + 30 * i) % 100; // Adjust this value for lightness variation
        const contrastColor = hslToHex({ h: modifiedHue, s: modifiedS, l: modifiedL });
        colors.push(contrastColor);
    }

    return colors;
}