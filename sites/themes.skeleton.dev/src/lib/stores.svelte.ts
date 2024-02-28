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
		contrastDark: 'var(--color-warning-50)',
		contrastLight: 'var(--color-warning-950)',
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

// ...

// Form: Spacing ---

// ...

// Form: Edges ---

// ...

// Combined Form Data ---

let storeForm = $derived({
	colors: storeFormColors,
	backgrounds: storeFormBackgrounds
});
