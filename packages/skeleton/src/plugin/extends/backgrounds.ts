// Skeleton Backgrounds
// https://tailwindcss.com/docs/background-image

export const extendSpacing = () => {
	return {
		backgroundImage: {
			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
		}
	} satisfies Record<string, Record<string, string>>;
};

export default extendSpacing;
