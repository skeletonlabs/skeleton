// Global Stores ---

// Form: Colors ---

export let storeFormColors: any = $state({
	primary: {
		seed: '#0170f3',
		contrastDark: 'var(--color-primary-50)',
		contrastLight: 'var(--color-primary-950)',
		breakpoint: 5
	},
	secondary: {
		seed: '#7928ca',
		contrastDark: 'var(--color-secondary-50)',
		contrastLight: 'var(--color-secondary-950)',
		breakpoint: 5
	},
	tertiary: {
		seed: '#ff0080',
		contrastDark: 'var(--color-tertiary-50)',
		contrastLight: 'var(--color-tertiary-950)',
		breakpoint: 5
	},
	success: {
		seed: '#50e3c2',
		contrastDark: 'var(--color-success-50)',
		contrastLight: 'var(--color-success-950)',
		breakpoint: 5
	},
	warning: {
		seed: '#f7b955',
		contrastDark: 'var(--color-warning-50)',
		contrastLight: 'var(--color-warning-950)',
		breakpoint: 5
	},
	error: {
		seed: '#f33f33',
		contrastDark: 'var(--color-error-50)',
		contrastLight: 'var(--color-error-950)',
		breakpoint: 5
	},
	surface: {
		seed: '#666666',
		contrastDark: 'var(--color-surface-50)',
		contrastLight: 'var(--color-surface-950)',
		breakpoint: 5
	}
});

export let storeFormBackgrounds: Record<string, string> = $state({
	bodyBackgroundColor: 'var(--color-surface-50)',
	bodyBackgroundColorDark: 'var(--color-surface-950)'
});

// Form: Typography ---

export let storeTypography: Record<string, number | string> = $state({
	typeScaleFactor: 0,
	// Base
	baseFontColor: 'var(--color-surface-950)',
	baseFontColorDark: 'var(--color-surface-50)',
	baseFontFamily: 'system-ui',
	baseFontsize: 'inherit',
	baseLineHeight: 'inherit',
	baseFontWeight: 'normal',
	baseFontStyle: 'normal',
	baseLetterSpacing: '0em',
	// heading
	headingFontColor: 'inherit',
	headingFontColorDark: 'inherit',
	headingFontFamily: 'inherit',
	headingFontWeight: 'bold',
	headingFontStyle: 'normal',
	headingLetterSpacing: 'inherit',
	// anchor
	anchorFontColor: 'var(--color-primary-500)',
	anchorFontColorDark: 'var(--color-primary-500)',
	anchorFontFamily: 'system-ui',
	anchorFontsize: 'inherit',
	anchorLineHeight: 'inherit',
	anchorFontWeight: 'normal',
	anchorFontStyle: 'normal',
	anchorLetterSpacing: 'inherit',
	anchorTextDecoration: 'none',
	anchorTextDecorationHover: 'underline',
	anchorTextDecorationActive: 'none',
	anchorTextDecorationFocus: 'none'
});

// Form: Spacing ---

// ...

// Form: Edges ---

// ...

// Combined Form Data ---

let storeForm = $derived({
	colors: storeFormColors,
	backgrounds: storeFormBackgrounds
});
