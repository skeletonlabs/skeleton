// Constants

// Colors ---

export const colorNames = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'surface'] as const;
export const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

// Typography ---

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

export const fontFamilies: string[] = [
	'inherit',
	// Source: https://github.com/system-fonts/modern-font-stacks
	`system-ui, sans-serif`,
	`Charter, 'Bitstream Charter', 'Sitka Text', Cambria, serif`,
	`'Iowan Old Style', 'Palatino Linotype', 'URW Palladio L', P052, serif`,
	`Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', source-sans-pro, sans-serif`,
	`Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif`,
	`Optima, Candara, 'Noto Sans', source-sans-pro, sans-serif`,
	`Inter, Roboto, 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif`,
	`'Nimbus Mono PS', 'Courier New', monospace`,
	`ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace`,
	`Bahnschrift, 'DIN Alternate', 'Franklin Gothic Medium', 'Nimbus Sans Narrow', sans-serif-condensed, sans-serif`,
	`ui-rounded, 'Hiragino Maru Gothic ProN', Quicksand, Comfortaa, Manjari, 'Arial Rounded MT', 'Arial Rounded MT Bold', Calibri, source-sans-pro, sans-serif`,
	`Rockwell, 'Rockwell Nova', 'Roboto Slab', 'DejaVu Serif', 'Sitka Small', serif`,
	`Superclarendon, 'Bookman Old Style', 'URW Bookman', 'URW Bookman L', 'Georgia Pro', Georgia, serif`,
	`Didot, 'Bodoni MT', 'Noto Serif Display', 'URW Palladio L', P052, Sylfaen, serif`,
	`'Segoe Print', 'Bradley Hand', Chilanka, TSCu_Comic, casual, cursive`
] as const;

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
