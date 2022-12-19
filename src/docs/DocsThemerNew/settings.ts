const colorNames = ['primary', 'accent', 'tertiary', 'success', 'warning', 'error', 'surface'];
const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const colorArr: any[] = [];
colorNames.forEach((colorName) => {
	return colorShades.forEach((colorShade) => {
		const colorLabel = colorName.charAt(0).toUpperCase() + colorName.slice(1);
		colorArr.push({ label: `${colorLabel} ${colorShade}`, value: `var(--color-${colorName}-${colorShade})` });
	});
});

export const settings = {
	colorProps: [
		// Black
		{ label: 'Black', value: '0 0 0' },
		// White
		{ label: 'White', value: '255 255 255' },
		// Implement each color shade
		...colorArr
	],
	rounded: ['0px', '2px', '4px', '6px', '8px', '12px', '16px', '24px', '9999px'],
	border: ['0px', '1px', '2px', '4px', '6px', '8px']
};
