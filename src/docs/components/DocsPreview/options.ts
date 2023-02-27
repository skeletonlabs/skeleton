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

export const variants: any[] = [
	{
		label: 'Utility Classes',
		list: ['bg-initial', '!bg-transparent']
	},
	// filled
	{
		label: 'Filled Variants',
		list: [
			'variant-filled',
			'variant-filled-surface',
			'variant-filled-primary',
			'variant-filled-secondary',
			'variant-filled-tertiary',
			'variant-filled-success',
			'variant-filled-warning',
			'variant-filled-error'
		]
	},
	// ghost
	{
		label: 'Ghost Variants',
		list: [
			'variant-ghost',
			'variant-ghost-surface',
			'variant-ghost-primary',
			'variant-ghost-secondary',
			'variant-ghost-tertiary',
			'variant-ghost-success',
			'variant-ghost-warning',
			'variant-ghost-error'
		]
	},
	// soft
	{
		label: 'Soft Variants',
		list: [
			'variant-soft',
			'variant-soft-surface',
			'variant-soft-primary',
			'variant-soft-secondary',
			'variant-soft-tertiary',
			'variant-soft-success',
			'variant-soft-warning',
			'variant-soft-error'
		]
	},
	// ringed
	{
		label: 'Ringed Variants',
		list: [
			'variant-ringed',
			'variant-ringed-surface',
			'variant-ringed-primary',
			'variant-ringed-secondary',
			'variant-ringed-tertiary',
			'variant-ringed-success',
			'variant-ringed-warning',
			'variant-ringed-error'
		]
	}
];
