// Previewer Background Options

export const backgrounds: Record<string, string> = {
	'bg-transparent': 'bg-transparent',
	neutral: 'bg-white/10 dark:bg-black/10',
	// Surfaces
	'bg-surface-900-50-token': 'bg-surface-900-50-token text-on-surface-token',
	'bg-surface-50-900-token': 'bg-surface-50-900-token text-on-surface-token',
	// Gradient
	'primary-to-secondary': 'bg-gradient-to-br from-primary-500 to-secondary-500 text-on-primary-token',
	'secondary-to-tertiary': 'bg-gradient-to-br from-secondary-500 to-tertiary-500 text-on-secondary-token',
	'tertiary-to-primary': 'bg-gradient-to-br from-tertiary-500 to-primary-500 text-on-tertiary-token',
	'primary-to-surface': 'bg-gradient-to-br from-primary-500 to-surface-500 text-on-primary-token',
	// Filled
	'variant-filled-primary': `variant-filled-primary`,
	'variant-filled-secondary': `variant-filled-secondary`,
	'variant-filled-tertiary': `variant-filled-tertiary`,
	'variant-filled-success': `variant-filled-success`,
	'variant-filled-warning': `variant-filled-warning`,
	'variant-filled-error': `variant-filled-error`,
	'variant-filled-surface': `variant-filled-surface`,
	// Soft
	'variant-soft': 'variant-soft',
	'variant-soft-primary': 'variant-soft-primary',
	'variant-soft-secondary': 'variant-soft-secondary',
	'variant-soft-tertiary': 'variant-soft-tertiary',
	'variant-soft-success': 'variant-soft-success',
	'variant-soft-warning': 'variant-soft-warning',
	'variant-soft-error': 'variant-soft-error'
};
