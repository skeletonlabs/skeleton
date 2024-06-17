// Constants ---

// FIXME:
// export type DisplayBorders = 'none' | 'surface'; // Record<DisplayBorders, string>
// export type DisplayBackgrounds = 'none' | 'surface' | 'surface-inverted'; // Record<DisplayBackgrounds, string>

export const displayBorders: Record<string, string> = {
	none: '',
	surface: 'border border-surface-200-800'
};
export const displayBackgrounds: Record<string, string> = {
	none: '',
	surface: 'preset-filled-surface-100-900',
	'surface-inverted': 'preset-filled-surface-50-950'
};

// Colors
export const colorNames = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'surface'] as const;
export const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

export type ColorNames = (typeof colorNames)[number];
export type ColorShades = (typeof colorShades)[number];
export type ColorPalette = Record<ColorNames, Record<ColorShades, [number, number, number]>>;
export type ColorSettings = {
	/** high, middle, low */
	seeds: [string, string, string];
	contrastDark: string;
	contrastLight: string;
	/** the index in the array of shades */
	breakpoint: number;
};
// Typographic Scales
export const typographicScales = [
	{ value: '1.0', label: 'Base' },
	{ value: '1.067', label: 'Minor Second' },
	{ value: '1.125', label: 'Major Second' },
	{ value: '1.2', label: 'Minor Third' },
	{ value: '1.25', label: 'Major Third' },
	{ value: '1.333', label: 'Perfect Fourth' },
	{ value: '1.414', label: 'Augmented Fourth' },
	{ value: '1.5', label: 'Perfect Fifth' },
	{ value: '1.618', label: 'Golden Ratio' }
] as const;
export const fontFamilies: Record<string, string[]> = {
	inherit: ['inherit'],
	// Source: https://github.com/system-fonts/modern-font-stacks
	'system-ui': ['system-ui', 'sans-serif'],
	transitional: ['Charter', 'Bitstream Charter', 'Sitka Text', 'Cambria', 'serif'],
	oldstyle: ['Iowan Old Style', 'Palatino Linotype', 'URW Palladio L', 'P052', 'serif'],
	humanist: ['Seravek', 'Gill Sans Nova', 'Ubuntu', 'Calibri', 'DejaVu Sans', 'source-sans-pro', 'sans-serif'],
	geohumanist: ['Avenir', 'Montserrat', 'Corbel', 'URW Gothic', 'source-sans-pro', 'sans-serif'],
	'class-human': ['Optima', 'Candara', 'Noto Sans', 'source-sans-pro', 'sans-serif'],
	neogrote: ['Inter', 'Roboto', 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', 'Arial', 'sans-serif'],
	monoslab: ['Nimbus Mono PS', 'Courier New', 'monospace'],
	monocode: ['ui-monospace', 'Cascadia Code', 'Source Code Pro', 'Menlo', 'Consolas', 'DejaVu Sans Mono', 'monospace'],
	industrial: ['Bahnschrift', 'DIN Alternate', 'Franklin Gothic Medium', 'Nimbus Sans Narrow', 'sans-serif-condensed', 'sans-serif'],
	'round-sans': [
		'ui-rounded',
		'Hiragino Maru Gothic ProN',
		'Quicksand',
		'Comfortaa',
		'Manjari',
		'Arial Rounded MT',
		'Arial Rounded MT Bold',
		'Calibri',
		'source-sans-pro',
		'sans-serif'
	],
	'slab-serif': ['Rockwell', 'Rockwell Nova', 'Roboto Slab', 'DejaVu Serif', 'Sitka Small', 'serif'],
	antique: ['Superclarendon', 'Bookman Old Style', 'URW Bookman', 'URW Bookman L', 'Georgia Pro', 'Georgia', 'serif'],
	didone: ['Didot', 'Bodoni MT', 'Noto Serif Display', 'URW Palladio L', 'P052', 'Sylfaen', 'serif'],
	handwritten: ['Segoe Print', 'Bradley Hand', 'Chilanka', 'TSCu_Comic', 'casual', 'cursive']
} as const;
export const fontSizes = [
	'inherit',
	'12px', // '0.75rem',
	'14px', // '0.875rem',
	'16px', // '1rem',
	'18px', // '1.125rem',
	'20px', // '1.25rem',
	'24px' // '1.5rem'
] as const;
export const lineHeights = [
	'inherit',
	'16px', // '1rem',
	'20px', // '1.25rem',
	'24px', // '1.5rem',
	'28px', // '1.75rem',
	'32px', // '2rem',
	'36px' // '2.25rem,
] as const;
export const fontWeights = [
	'inherit',
	'normal',
	'bold',
	'lighter',
	'bolder',
	'100',
	'200',
	'300',
	'400',
	'500',
	'600',
	'700',
	'800',
	'900'
] as const;
export const fontStyles = ['inherit', 'normal', 'italic'];
export const letterSpacings = ['inherit', '-0.05em', '-0.025em', '0em', '0.025em', '0.05em', '0.01em'];
export const textDecorations = ['none', 'underline', 'overline', 'line-through'];

// Edges
export const radii = [
	'0px',
	'2px', // '0.125rem',
	'4px', // '0.25rem',
	'6px', // '0.375rem',
	'8px', // '0.5rem',
	'12px', // '0.75rem',
	'16px', // '1rem',
	'24px', // '1.5rem',
	'9999px'
] as const;
export const edges = ['0px', '1px', '2px', '4px', '8px'] as const;

// Theme Generation
export const themeStatic = {
	typeScale: {
		'--type-scale-1': 'calc(0.75rem * var(--type-scale-factor))', // 12px
		'--type-scale-2': 'calc(0.875rem * var(--type-scale-factor))', // 14px
		'--type-scale-3': 'calc(1rem * var(--type-scale-factor))', // 16px
		'--type-scale-4': 'calc(1.125rem * var(--type-scale-factor))', // 18px
		'--type-scale-5': 'calc(1.25rem * var(--type-scale-factor))', // 20px
		'--type-scale-6': 'calc(1.5rem * var(--type-scale-factor))', // 24px
		'--type-scale-7': 'calc(1.875rem * var(--type-scale-factor))', // 30px
		'--type-scale-8': 'calc(2.25rem * var(--type-scale-factor))', // 36px
		'--type-scale-9': 'calc(3rem * var(--type-scale-factor))', // 48px
		'--type-scale-10': 'calc(3.75rem * var(--type-scale-factor))', // 60px
		'--type-scale-11': 'calc(4.5rem * var(--type-scale-factor))', // 72px
		'--type-scale-12': 'calc(6rem * var(--type-scale-factor))', // 96px
		'--type-scale-13': 'calc(8rem * var(--type-scale-factor))' // 128px
	}
};
