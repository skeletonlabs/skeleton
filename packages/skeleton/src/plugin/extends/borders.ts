// Skeleton Borders

export const extendBorders = () => {
	return {
		// https://tailwindcss.com/docs/border-width#arbitrary-values
		borderWidth: {
			DEFAULT: 'var(--border-width-default)'
		},
		// https://tailwindcss.com/docs/border-radius#arbitrary-values
		borderRadius: {
			DEFAULT: 'var(--radii-default)',
			container: 'var(--radii-container)'
		},
		// https://tailwindcss.com/docs/divide-width#arbitrary-values
		divideWidth: {
			DEFAULT: 'var(--divide-width-default)'
		},
		// https://tailwindcss.com/docs/outline-width#arbitrary-values
		outlineWidth: {
			DEFAULT: 'var(--outline-width-default)'
		},
		// https://tailwindcss.com/docs/ring-width#arbitrary-values
		ringWidth: {
			DEFAULT: 'var(--ring-width-default)'
		}
	} satisfies Record<string, Record<string, string>>;
};

export default extendBorders;
