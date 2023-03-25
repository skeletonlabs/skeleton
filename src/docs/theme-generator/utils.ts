import { hexValueIsValid } from "$docs/layouts/DocsThemer/colors";
import type { ColorSettings, FormTheme } from "../../routes/(inner)/docs/simple-generator/types";

export const hexValuesAreValid = (colors: ColorSettings[]) => {
    // Check all hex values for validity.
    let valid = true;
    colors?.forEach((color: ColorSettings) => {
        valid = valid && hexValueIsValid(color.hex);
    });

    return valid;
};

export const generateColorCSS = (theme: FormTheme): string => {
    let newCSS = '';
    theme.colors.forEach((color: ColorSettings, i: number) => {
        const colorKey = color.key;
        // The color set comment
        newCSS += `/* ${colorKey} | ${color.palette[500].hex} */\n\t`;
        // CSS props for shade 50-900 per each color
        for (let [k, v] of Object.entries(color.palette)) {
            newCSS += `--color-${colorKey}-${k}: ${v.rgb}; /* ⬅ ${v.hex} */\n\t`;
        }
    });
    return newCSS;
}