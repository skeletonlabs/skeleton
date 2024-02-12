// Skeleton Spacing
// https://tailwindcss.com/docs/customizing-spacing

export const extendSpacing = () => {
	return {
		spacing: {
			'0.5': 'calc(0.125rem * var(--space-scale-factor))', // 2px
			'1': 'calc(0.25rem * var(--space-scale-factor))', // 4px
			'1.5': 'calc(0.375rem * var(--space-scale-factor))', // 6px
			'2': 'calc(0.5rem * var(--space-scale-factor))', // 8px
			'2.5': 'calc(0.625rem * var(--space-scale-factor))', // 10px
			'3': 'calc(0.75rem * var(--space-scale-factor))', // 12px
			'3.5': 'calc(0.875rem * var(--space-scale-factor))', // 14px
			'4': 'calc(1rem * var(--space-scale-factor))', // 16px
			'5': 'calc(1.25rem * var(--space-scale-factor))', // 20px
			'6': 'calc(1.5rem * var(--space-scale-factor))', // 24px
			'7': 'calc(1.75rem * var(--space-scale-factor))', // 28px
			'8': 'calc(2rem * var(--space-scale-factor))', // 32px
			'9': 'calc(2.25rem * var(--space-scale-factor))', // 36px
			'10': 'calc(2.5rem * var(--space-scale-factor))', // 40px
			'11': 'calc(2.75rem * var(--space-scale-factor))', // 44px
			'12': 'calc(3rem * var(--space-scale-factor))', // 48px
			'14': 'calc(3.5rem * var(--space-scale-factor))', // 56px
			'16': 'calc(4rem * var(--space-scale-factor))', // 64px
			'20': 'calc(5rem * var(--space-scale-factor))', // 80px
			'24': 'calc(6rem * var(--space-scale-factor))', // 96px
			'28': 'calc(7rem * var(--space-scale-factor))', // 112p
			'32': 'calc(8rem * var(--space-scale-factor))', // 128p
			'36': 'calc(9rem * var(--space-scale-factor))', // 144p
			'40': 'calc(10rem * var(--space-scale-factor))', // 160p
			'44': 'calc(11rem * var(--space-scale-factor))', // 176p
			'48': 'calc(12rem * var(--space-scale-factor))', // 192p
			'52': 'calc(13rem * var(--space-scale-factor))', // 208p
			'56': 'calc(14rem * var(--space-scale-factor))', // 224p
			'60': 'calc(15rem * var(--space-scale-factor))', // 240p
			'64': 'calc(16rem * var(--space-scale-factor))', // 256p
			'72': 'calc(18rem * var(--space-scale-factor))', // 288p
			'80': 'calc(20rem * var(--space-scale-factor))', // 320p
			'96': 'calc(24rem * var(--space-scale-factor))' // 384p
		}
	} satisfies Record<string, Record<string, string>>;
};

export default extendSpacing;
