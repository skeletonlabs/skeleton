// Global State ---

// Form: Colors ---

export let stateFormColors: any = $state({
	primary: {
		seed: '#89b4fa', // '#0170f3',
		contrastDark: 'var(--color-primary-950)',
		contrastLight: 'var(--color-primary-50)',
		breakpoint: 5 // index
	},
	secondary: {
		seed: '#b4befe', // '#7928ca',
		contrastDark: 'var(--color-secondary-950)',
		contrastLight: 'var(--color-secondary-50)',
		breakpoint: 3 // index
	},
	tertiary: {
		seed: '#cba6f7', // '#ff0080',
		contrastDark: 'var(--color-tertiary-950)',
		contrastLight: 'var(--color-tertiary-50)',
		breakpoint: 5 // index
	},
	success: {
		seed: '#a6e3a1', // '#50e3c2',
		contrastDark: 'var(--color-success-950)',
		contrastLight: 'var(--color-success-50)',
		breakpoint: 6 // index
	},
	warning: {
		seed: '#f9e2af', // '#f7b955',
		contrastDark: 'var(--color-warning-950)',
		contrastLight: 'var(--color-warning-50)',
		breakpoint: 7 // index
	},
	error: {
		seed: '#f38ba8', // '#f33f33',
		contrastDark: 'var(--color-error-950)',
		contrastLight: 'var(--color-error-50)',
		breakpoint: 5 // index
	},
	surface: {
		seed: '#585b70', // '#666666',
		contrastDark: 'var(--color-surface-950)',
		contrastLight: 'var(--color-surface-50)',
		breakpoint: 4 // index
	}
});

export let stateFormBackgrounds: Record<string, string> = $state({
	bodyBackgroundColor: 'var(--color-surface-50)',
	bodyBackgroundColorDark: 'var(--color-surface-950)'
});

// Form: Typography ---

export let stateFormTypography: Record<string, number | string> = $state({
	factor: 0, // index
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
	anchorFontFamily: 'inherit',
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

export let stateFormSpacing: Record<string, number> = $state({
	factor: 1.0
});

// Form: Edges ---

export let stateFormEdges: Record<string, string> = $state({
	radiiDefault: '0.375rem', // 6px
	radiiContainer: '0.75rem', // 12px
	borderWidthDefault: '1px',
	ringWidthDefault: '1px',
	outlineWidthDefault: '1px',
	divideWidthDefault: '1px'
});
