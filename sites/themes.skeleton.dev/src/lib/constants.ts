// Constants ---

// Colors
export const colorNames = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'surface'];
export const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

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
];
export const fontSizes = [
	'inherit',
	'0.75rem', // 12px
	'0.875rem', // 14px
	'1rem', // 16px
	'1.125rem', // 18px
	'1.25rem', // 20px
	'1.5rem' // 24px
];
export const lineHeights = [
	'inherit',
	'1rem', // 16px
	'1.25rem', // 20px
	'1.5rem', // 24px
	'1.75rem', // 28px
	'2rem', // 32px
	'2.25rem' // 36px
];
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
];
export const fontStyles = ['inherit', 'normal', 'italic'];
export const letterSpacings = ['inherit', '-0.05em', '-0.025em', '0em', '0.025em', '0.05em', '0.01em'];
export const textDecorations = ['none', 'underline', 'overline', 'line-through'];

// Edges
export let radii = [
	'0px',
	'0.125rem', // 2px
	'0.25rem', // 4px
	'0.375rem', // 6px
	'0.5rem', // 8px
	'0.75rem', // 12px
	'1rem', // 16px
	'1.5rem', // 24px
	'9999px'
];
export let edges = ['0px', '1px', '2px', '4px', '8px'];

// Theme Generation
export const themeStatic = {
	typoScale: {
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
