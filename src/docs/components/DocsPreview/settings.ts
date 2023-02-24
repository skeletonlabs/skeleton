// Previewer Background Options

export const bgList: Record<string, string> = {
	neutral: 'bg-surface-100-800-token text-on-surface-token',
	none: '',
	// Gradient
	'primary-to-secondary': 'bg-gradient-to-br from-primary-500 to-secondary-500 text-on-primary-token',
	'secondary-to-tertiary': 'bg-gradient-to-br from-secondary-500 to-tertiary-500 text-on-secondary-token',
	'tertiary-to-primary': 'bg-gradient-to-br from-tertiary-500 to-primary-500 text-on-secondary-token',
	// Filled
	'variant-filled-primary': `variant-filled-primary`,
	'variant-filled-secondary': `variant-filled-secondary`,
	'variant-filled-tertiary': `variant-filled-tertiary`,
	'variant-filled-success': `variant-filled-success`,
	'variant-filled-warning': `variant-filled-warning`,
	'variant-filled-error': `variant-filled-error`,
	'variant-filled-surface': `variant-filled-surface`,
	// Soft
	'variant-soft-primary': 'variant-soft-primary',
	'variant-soft-secondary': 'variant-soft-secondary',
	'variant-soft-tertiary': 'variant-soft-tertiary',
	'variant-soft-success': 'variant-soft-success',
	'variant-soft-warning': 'variant-soft-warning',
	'variant-soft-error': 'variant-soft-error',
	'variant-soft-surface': 'variant-soft-surface'
};
