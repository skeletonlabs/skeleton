// Previewer Background Options

export const bgList: Record<string, string> = {
	neutral: 'bg-surface-100-800-token text-on-surface-token',
	none: '',
	// Gradient
	'primary-to-secondary': 'bg-gradient-to-br from-primary-500 to-secondary-500 text-on-primary-token',
	'secondary-to-tertiary': 'bg-gradient-to-br from-secondary-500 to-tertiary-500 text-on-secondary-token',
	'tertiary-to-primary': 'bg-gradient-to-br from-tertiary-500 to-primary-500 text-on-secondary-token',
	// Filled
	'filled-primary': `variant-filled-primary`,
	'filled-secondary': `variant-filled-secondary`,
	'filled-tertiary': `variant-filled-tertiary`,
	'filled-success': `variant-filled-success`,
	'filled-warning': `variant-filled-warning`,
	'filled-error': `variant-filled-error`,
	'filled-surface': `variant-filled-surface`,
	// Soft
	'soft-primary': 'variant-soft-primary',
	'soft-secondary': 'variant-soft-secondary',
	'soft-tertiary': 'variant-soft-tertiary',
	'soft-success': 'variant-soft-success',
	'soft-warning': 'variant-soft-warning',
	'soft-error': 'variant-soft-error',
	'soft-surface': 'variant-soft'
};
