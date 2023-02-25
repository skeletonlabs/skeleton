// Previewer Background Options

export const backgrounds: Record<string, string> = {
	'bg-transparent': 'bg-transparent',
	neutral: 'bg-white/10 dark:bg-black/10',
	// Surfaces
	'bg-surface-50': 'bg-surface-50 text-surface-900',
	'bg-surface-900': 'bg-surface-900 text-surface-50',
	// Filled
	'variant-filled-primary': `variant-filled-primary`,
	'variant-filled-secondary': `variant-filled-secondary`,
	'variant-filled-tertiary': `variant-filled-tertiary`,
	'variant-filled-success': `variant-filled-success`,
	'variant-filled-warning': `variant-filled-warning`,
	'variant-filled-error': `variant-filled-error`,
	'variant-filled-surface': `variant-filled-surface`,
	// Gradient
	'primary-to-secondary': 'bg-gradient-to-br from-primary-500 to-secondary-500 text-on-primary-token'
};
