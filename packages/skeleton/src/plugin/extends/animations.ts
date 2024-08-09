// Skeleton Animations and Keyframes
// https://tailwindcss.com/docs/animation#arbitrary-values

export const extendAnimAndKeyframes = () => {
	return {
		animation: {
			'progress-indeterminate': 'anim-progress-indeterminate 2s linear infinite',
			'ring-indeterminate': 'anim-ring-indeterminate 2s linear infinite'
		},
		keyframes: {
			'anim-progress-indeterminate': {
				from: { transform: 'translateX(-200%)' },
				to: { transform: 'translateX(200%)' }
			},
			'anim-ring-indeterminate': {
				from: { 'stroke-dasharray': '1, 400', 'stroke-dashoffset': '0' },
				to: { 'stroke-dasharray': '400, 400', 'stroke-dashoffset': '-140' }
			}
		}
	} satisfies Record<string, Record<string, unknown>>;
};

export default extendAnimAndKeyframes;
