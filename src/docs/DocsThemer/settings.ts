export const colorNames = ['primary', 'accent', 'tertiary', 'success', 'warning', 'error', 'surface'];
export const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const colorPropsArr: any[] = [];

// Generate a list of color properties for selection inputs.
colorNames.forEach((colorName) => {
	return colorShades.forEach((colorShade) => {
		const colorLabel = colorName.charAt(0).toUpperCase() + colorName.slice(1);
		colorPropsArr.push({ label: `${colorLabel} ${colorShade}`, value: `var(--color-${colorName}-${colorShade})` });
	});
});

// Form Settings
export const inputSettings = {
	colorProps: [
		// Black
		{ label: 'Black', value: '0 0 0' },
		// White
		{ label: 'White', value: '255 255 255' },
		// Implement each available color shade
		...colorPropsArr
	],
	fonts: ['sans', 'serif', 'mono', 'system'],
	rounded: ['0px', '2px', '4px', '6px', '8px', '12px', '16px', '24px', '9999px'],
	border: ['0px', '1px', '2px', '4px', '6px', '8px']
};

// Font Family - Translated Values
export const fontSettings: Record<string, string> = {
	// Tailwind Sans-Serif
	sans: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,

	// Tailwind Serif
	serif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,

	// Tailwind Mono
	mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,

	// System UI
	system: `system-ui`
};
