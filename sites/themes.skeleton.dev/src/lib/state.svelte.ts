// Global State ---

// Form: Colors ---

export let stateFormColors: any = $state({
	primary: {
		seeds: ['#d3e5ff', '#0170f3', '#092750'],
		contrastDark: 'var(--color-primary-950)',
		contrastLight: 'var(--color-primary-50)',
		breakpoint: 5 // index
	},
	secondary: {
		seeds: ['#d8ccf1', '#7928ca', '#321968'],
		contrastDark: 'var(--color-secondary-950)',
		contrastLight: 'var(--color-secondary-50)',
		breakpoint: 4 // index
	},
	tertiary: {
		seeds: ['#ffcefb', '#ff0080', '#760043'],
		contrastDark: 'var(--color-tertiary-950)',
		contrastLight: 'var(--color-tertiary-50)',
		breakpoint: 3 // index
	},
	success: {
		seeds: ['#aaffec', '#50e3c2', '#052e2a'],
		contrastDark: 'var(--color-success-950)',
		contrastLight: 'var(--color-success-50)',
		breakpoint: 6 // index
	},
	warning: {
		seeds: ['#ffefcf', '#f7b955', '#a14d05'],
		contrastDark: 'var(--color-warning-950)',
		contrastLight: 'var(--color-warning-50)',
		breakpoint: 6 // index
	},
	error: {
		seeds: ['#f7d4d6', '#f33f33', '#940000'],
		contrastDark: 'var(--color-error-950)',
		contrastLight: 'var(--color-error-50)',
		breakpoint: 5 // index
	},
	surface: {
		seeds: ['#ffffff', '#666666', '#111111'],
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
	// anchor (extras)
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
	radiiDefault: '6px', // 0.375rem
	radiiContainer: '12px', // 0.75rem
	borderWidthDefault: '1px',
	ringWidthDefault: '1px',
	outlineWidthDefault: '1px',
	divideWidthDefault: '1px'
});
