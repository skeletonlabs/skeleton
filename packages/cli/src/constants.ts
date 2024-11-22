/*
	NOTE: Hugo, feel free to build off this. We use this technique for the theme
	generator with great success. Any time you need to loop through these values,
	which allows you to use this as the single source of truth.

	// Generate a list of all valid color properties
	colorProperties.forEach(colorPropery => {
		colorNames.forEach(colorNames => {
			colorShades.forEach(colorShade => {
				return `${colorPropery}-${colorNames}-${colorShade}`;
			});
		});
	});

	// Generate a list of colors + shades
	colorNames.forEach(colorNames => {
		colorShades.forEach(colorShade => {
			return `${colorPropery}-${colorNames}-${colorShade}`;
		});
	});
*/

// Colors ---

type ColorNames = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'surface';
export const colorNames: ColorNames[] = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'surface'];

type ColorShades = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
export const colorShades: ColorShades[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

// Color Pairings

export const v2ColorPairings = [
	'50-900',
	'100-800',
	'200-700',
	'300-600',
	'400-500',
	'500',
	'500-400',
	'600-300',
	'700-200',
	'800-100',
	'900-500'
];
export const v3ColorPairings = [
	'50-950',
	'100-900',
	'200-800',
	'300-700',
	'500', // Reminder: 400-600 won't be used
	'500',
	'500', // Reminder: 600-400 won't be used
	'700-300',
	'800-200',
	'900-100',
	'950-50'
];

// Color Properties
// NOTE: we use a subset of these in v2, but best to check all possible combinations.

export const colorProperties = [
	'accent',
	'bg',
	'border',
	'caret',
	'decoration',
	'divide',
	'fill',
	'outline',
	'ring',
	'shadow',
	'stroke',
	'text'
];

// Border Radius

type BorderRadiusCorners = 'tl' | 'tr' | 'bl' | 'br';
export const borderRadiusCorners: BorderRadiusCorners[] = ['tl', 'tr', 'bl', 'br'];
