// Skeleton Spacing
// https://tailwindcss.com/docs/customizing-spacing

export const extendSpacing = () => {
	return {
		spacing: {
			'0': '0',
			'0.5': 'var(--space-0-5)',
			'1': 'var(--space-1)',
			'1.5': 'var(--space-1-5)',
			'2': 'var(--space-2)',
			'2.5': 'var(--space-2-5)',
			'3': 'var(--space-3)',
			'3.5': 'var(--space-3-5)',
			'4': 'var(--space-4)',
			'5': 'var(--space-5)',
			'6': 'var(--space-6)',
			'7': 'var(--space-7)',
			'8': 'var(--space-8)',
			'9': 'var(--space-9)',
			'10': 'var(--space-10)',
			'11': 'var(--space-11)',
			'12': 'var(--space-12)',
			'14': 'var(--space-14)',
			'16': 'var(--space-16)',
			'20': 'var(--space-20)',
			'24': 'var(--space-24)',
			'28': 'var(--space-28)',
			'32': 'var(--space-32)',
			'36': 'var(--space-36)',
			'40': 'var(--space-40)',
			'44': 'var(--space-44)',
			'48': 'var(--space-48)',
			'52': 'var(--space-52)',
			'56': 'var(--space-56)',
			'60': 'var(--space-60)',
			'64': 'var(--space-64)',
			'72': 'var(--space-72)',
			'80': 'var(--space-80)',
			'96': 'var(--space-96)'
		}
	} satisfies Record<string, Record<string, string>>;
};

export default extendSpacing;
