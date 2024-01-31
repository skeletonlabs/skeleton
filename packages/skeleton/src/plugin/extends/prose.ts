// Skeleton + Tailwind Typography Plugin (aka .prose)
// https://tailwindcss.com/docs/typography-plugin
// Defaults: https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js

export const extendProse = () => {
	return {
		// @ts-ignore
		typography: ({ theme }) => ({
			// Prose Theme via .prose-skeleton
			skeleton: {
				css: {
					// Color Resets
					'--tw-prose-body': 'inherit',
					'--tw-prose-headings': 'inherit',
					'--tw-prose-h2': 'inherit',
					'--tw-prose-lead': 'inherit',
					'--tw-prose-links': 'rgba(var(--anchor-font-color))',
					'--tw-prose-bold': 'inherit',
					'--tw-prose-counters': 'inherit',
					'--tw-prose-bullets': 'inherit',
					'--tw-prose-hr': 'inherit',
					'--tw-prose-quotes': 'inherit',
					'--tw-prose-quote-borders': 'inherit',
					'--tw-prose-captions': 'inherit',
					'--tw-prose-code': 'inherit',
					'--tw-prose-pre-code': 'inherit',
					'--tw-prose-pre-bg': 'inherit',
					'--tw-prose-th-borders': 'inherit',
					'--tw-prose-td-borders': 'inherit',
					'--tw-prose-invert-body': 'inherit',
					'--tw-prose-invert-headings': 'inherit',
					'--tw-prose-invert-lead': 'inherit',
					'--tw-prose-invert-links': 'inherit',
					'--tw-prose-invert-bold': 'inherit',
					'--tw-prose-invert-counters': 'inherit',
					'--tw-prose-invert-bullets': 'inherit',
					'--tw-prose-invert-hr': 'inherit',
					'--tw-prose-invert-quotes': 'inherit',
					'--tw-prose-invert-quote-borders': 'inherit',
					'--tw-prose-invert-captions': 'inherit',
					'--tw-prose-invert-code': 'inherit',
					'--tw-prose-invert-pre-code': 'inherit',
					'--tw-prose-invert-pre-bg': 'inherit',
					'--tw-prose-invert-th-borders': 'inherit',
					'--tw-prose-invert-td-borders': 'inherit'

					// Element Resets
					// h1: { all: 'inherit' },
					// h2: { all: 'inherit' },
					// h3: { all: 'inherit' },
					// h4: { all: 'inherit' },
					// h5: { all: 'inherit' },
					// h6: { all: 'inherit' },
					// p: { all: 'inherit' },
					// a: { all: 'inherit' }
					// blockquote: { all: 'inherit' }
					// code: { all: 'unset' },
					// table: { all: 'unset' }
					// 'thead th': { all: 'unset' },
					// 'thead th:first-child': { all: 'unset' },
					// 'thead th:last-child': { all: 'unset' },
					// 'tbody td, tfoot td': { all: 'unset' },
					// 'tbody td:first-child, tfoot td:first-child': { all: 'unset' },
					// 'tbody td:last-child, tfoot td:last-child': { all: 'unset' }

					// Element Styles
					// a: {
					// 	all: 'unset',
					// 	color: 'rgba(var(--anchor-font-color))',
					// 	fontFamily: 'var(--anchor-font-family)',
					// 	fontSize: 'var(--anchor-font-size)',
					// 	lineHeight: 'var(--anchor-line-height)',
					// 	fontWeight: 'var(--anchor-font-weight)',
					// 	fontStyle: 'var(--anchor-font-style)',
					// 	letterSpacing: 'var(--anchor-letter-spacing)',
					// 	textDecoration: 'var(--anchor-text-decoration)',
					// 	'&:hover': {
					// 		textDecoration: 'var(--anchor-text-decoration-hover)'
					// 	},
					// 	'&:active': {
					// 		textDecoration: 'var(--anchor-text-decoration-active)'
					// 	},
					// 	'&:focus': {
					// 		textDecoration: 'var(--anchor-text-decoration-focus)'
					// 	}
					// }
				}
			}
		})
	}; // satisfies Record<string, Record<string, string>>
};

export default extendProse;
