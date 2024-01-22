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
		}
	} satisfies Record<string, Record<string, string>>;
};

export default extendBorders;
