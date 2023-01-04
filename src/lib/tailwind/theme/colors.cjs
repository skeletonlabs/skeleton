// Extends Tailwind with Skeleton theme-specific colors values
// Doc: https://tailwindcss.com/docs/customizing-colors#using-css-variables

// NOTE: We use RGB to provide support for color opacity, ex: `bg-primary-500/50`

function generatePaletteSet(colorName) {
    return {
        50: `rgb(var(--color-${colorName}-50) / <alpha-value>)`,
        100: `rgb(var(--color-${colorName}-100) / <alpha-value>)`,
        200: `rgb(var(--color-${colorName}-200) / <alpha-value>)`,
        300: `rgb(var(--color-${colorName}-300) / <alpha-value>)`,
        400: `rgb(var(--color-${colorName}-400) / <alpha-value>)`,
        500: `rgb(var(--color-${colorName}-500) / <alpha-value>)`,
        600: `rgb(var(--color-${colorName}-600) / <alpha-value>)`,
        700: `rgb(var(--color-${colorName}-700) / <alpha-value>)`,
        800: `rgb(var(--color-${colorName}-800) / <alpha-value>)`,
        900: `rgb(var(--color-${colorName}-900) / <alpha-value>)`
    };
}

module.exports = () => {
    return {
        primary: generatePaletteSet('primary'),
        secondary: generatePaletteSet('secondary'),
        tertiary: generatePaletteSet('tertiary'),
        success: generatePaletteSet('success'),
        warning: generatePaletteSet('warning'),
        error: generatePaletteSet('error'),
        surface: generatePaletteSet('surface')
    }
}