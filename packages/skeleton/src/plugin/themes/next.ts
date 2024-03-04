// import type { PresetTheme } from './index.js';

const next = {
	name: 'next',
	properties: {
		// Spacing ---
		// https://tailwindcss.com/docs/customizing-spacing

		'--space-scale-factor': '1',

		// Typography ---
		// https://designcode.io/typographic-scales

		// 1.067, 1.125, 1.2, 1.250, 1.333, 1.414, 1.5, 1.618
		'--type-scale-factor': '1.067' /* Minor Second */,

		'--type-scale-1': 'calc(0.75rem * var(--type-scale-factor))', // 12px
		'--type-scale-2': 'calc(0.875rem * var(--type-scale-factor))', // 14px
		'--type-scale-3': 'calc(1rem * var(--type-scale-factor))', // 16px
		'--type-scale-4': 'calc(1.125rem * var(--type-scale-factor))', // 18px
		'--type-scale-5': 'calc(1.25rem * var(--type-scale-factor))', // 20px
		'--type-scale-6': 'calc(1.5rem * var(--type-scale-factor))', // 24px
		'--type-scale-7': 'calc(1.875rem * var(--type-scale-factor))', // 30px
		'--type-scale-8': 'calc(2.25rem * var(--type-scale-factor))', // 36px
		'--type-scale-9': 'calc(3rem * var(--type-scale-factor))', // 48px
		'--type-scale-10': 'calc(3.75rem * var(--type-scale-factor))', // 60px
		'--type-scale-11': 'calc(4.5rem * var(--type-scale-factor))', // 72px
		'--type-scale-12': 'calc(6rem * var(--type-scale-factor))', // 96px
		'--type-scale-13': 'calc(8rem * var(--type-scale-factor))', // 128px

		'--base-font-color': 'var(--color-surface-950)',
		'--base-font-color-dark': 'var(--color-surface-50)',
		'--base-font-family': 'system-ui',
		'--base-font-size': 'inherit',
		'--base-line-height': 'inherit',
		'--base-font-weight': 'normal',
		'--base-font-style': 'normal',
		'--base-letter-spacing': '0em',

		'--heading-font-color': 'inherit',
		'--heading-font-color-dark': 'inherit',
		'--heading-font-family': 'inherit',
		'--heading-font-weight': 'bold',
		'--heading-font-style': 'normal',
		'--heading-letter-spacing': 'inherit',

		'--anchor-font-color': 'var(--color-primary-500)',
		'--anchor-font-color-dark': 'var(--color-primary-500)',
		'--anchor-font-family': 'inherit',
		'--anchor-font-size': 'inherit',
		'--anchor-line-height': 'inherit',
		'--anchor-font-weight': 'inherit',
		'--anchor-font-style': 'inherit',
		'--anchor-letter-spacing': 'inherit',
		'--anchor-text-decoration': 'none',
		'--anchor-text-decoration-hover': 'underline',
		'--anchor-text-decoration-active': 'none',
		'--anchor-text-decoration-focus': 'none',

		// Backgrounds ---

		'--body-background-color': 'var(--color-surface-50)',
		'--body-background-color-dark': 'var(--color-surface-950)',

		// Borders ---
		// Covers: rounded, borders, divides, outlines, rings

		'--radii-default': '0.375rem',
		'--radii-container': '0.75rem',

		'--border-width-default': '1px',
		'--divide-width-default': 'var(--border-width-default)',
		'--outline-width-default': 'var(--border-width-default)',
		'--ring-width-default': 'var(--border-width-default)',

		// Colors ---

		// Primary
		'--color-primary-50': '211 229 255',
		'--color-primary-100': '169 206 253',
		'--color-primary-200': '127 182 250',
		'--color-primary-300': '85 159 248',
		'--color-primary-400': '43 135 245',
		'--color-primary-500': '1 112 243',
		'--color-primary-600': '3 97 210',
		'--color-primary-700': '4 83 178',
		'--color-primary-800': '6 68 145',
		'--color-primary-900': '7 54 113',
		'--color-primary-950': '9 39 80',
		'--color-primary-contrast-dark': 'var(--color-primary-950)',
		'--color-primary-contrast-light': 'var(--color-primary-50)',
		'--color-primary-contrast-50': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-100': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-200': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-300': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-400': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-500': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-600': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-700': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-800': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-900': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-950': 'var(--color-primary-contrast-light)',

		// Secondary
		'--color-secondary-50': '216 204 241',
		'--color-secondary-100': '197 171 233',
		'--color-secondary-200': '178 138 225',
		'--color-secondary-300': '159 106 218',
		'--color-secondary-400': '140 73 210',
		'--color-secondary-500': '121 40 202',
		'--color-secondary-600': '107 37 182',
		'--color-secondary-700': '93 34 163',
		'--color-secondary-800': '78 31 143',
		'--color-secondary-900': '64 28 124',
		'--color-secondary-950': '50 25 104',
		'--color-secondary-contrast-dark': 'var(--color-secondary-950)',
		'--color-secondary-contrast-light': 'var(--color-secondary-50)',
		'--color-secondary-contrast-50': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-100': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-200': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-300': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-400': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-500': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-600': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-700': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-800': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-900': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-950': 'var(--color-secondary-contrast-light)',

		// Tertiary
		'--color-tertiary-50': '255 206 251',
		'--color-tertiary-100': '255 165 226',
		'--color-tertiary-200': '255 124 202',
		'--color-tertiary-300': '255 82 177',
		'--color-tertiary-400': '255 41 153',
		'--color-tertiary-500': '255 0 128',
		'--color-tertiary-600': '228 0 116',
		'--color-tertiary-700': '200 0 104',
		'--color-tertiary-800': '173 0 91',
		'--color-tertiary-900': '145 0 79',
		'--color-tertiary-950': '118 0 67',
		'--color-tertiary-contrast-dark': 'var(--color-tertiary-950)',
		'--color-tertiary-contrast-light': 'var(--color-tertiary-50)',
		'--color-tertiary-contrast-50': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-100': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-200': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-300': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-400': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-500': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-600': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-700': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-800': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-900': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-950': 'var(--color-tertiary-contrast-light)',

		// Success
		'--color-success-50': '170 255 236',
		'--color-success-100': '152 249 228',
		'--color-success-200': '134 244 219',
		'--color-success-300': '116 238 211',
		'--color-success-400': '98 233 202',
		'--color-success-500': '80 227 194',
		'--color-success-600': '65 191 164',
		'--color-success-700': '50 155 133',
		'--color-success-800': '35 118 103',
		'--color-success-900': '20 82 72',
		'--color-success-950': '5 46 42',
		'--color-success-contrast-dark': 'var(--color-success-950)',
		'--color-success-contrast-light': 'var(--color-success-50)',
		'--color-success-contrast-50': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-100': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-200': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-300': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-400': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-500': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-600': 'var(--color-success-contrast-light)',
		'--color-success-contrast-700': 'var(--color-success-contrast-light)',
		'--color-success-contrast-800': 'var(--color-success-contrast-light)',
		'--color-success-contrast-900': 'var(--color-success-contrast-light)',
		'--color-success-contrast-950': 'var(--color-success-contrast-light)',

		// Warning
		'--color-warning-50': '255 239 207',
		'--color-warning-100': '253 228 183',
		'--color-warning-200': '252 217 158',
		'--color-warning-300': '250 207 134',
		'--color-warning-400': '249 196 109',
		'--color-warning-500': '247 185 85',
		'--color-warning-600': '230 163 69',
		'--color-warning-700': '213 142 53',
		'--color-warning-800': '195 120 37',
		'--color-warning-900': '178 99 21',
		'--color-warning-950': '161 77 5',
		'--color-warning-contrast-dark': 'var(--color-warning-950)',
		'--color-warning-contrast-light': 'var(--color-warning-50)',
		'--color-warning-contrast-50': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-100': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-200': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-300': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-400': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-500': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-600': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-700': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-800': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-900': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-950': 'var(--color-warning-contrast-light)',

		// Error
		'--color-error-50': '247 212 214',
		'--color-error-100': '246 182 181',
		'--color-error-200': '245 152 149',
		'--color-error-300': '245 123 116',
		'--color-error-400': '244 93 84',
		'--color-error-500': '243 63 51',
		'--color-error-600': '224 50 41',
		'--color-error-700': '205 38 31',
		'--color-error-800': '186 25 20',
		'--color-error-900': '167 13 10',
		'--color-error-950': '148 0 0',
		'--color-error-contrast-dark': 'var(--color-error-950)',
		'--color-error-contrast-light': 'var(--color-error-50)',
		'--color-error-contrast-50': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-100': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-200': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-300': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-400': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-500': 'var(--color-error-contrast-light)',
		'--color-error-contrast-600': 'var(--color-error-contrast-light)',
		'--color-error-contrast-700': 'var(--color-error-contrast-light)',
		'--color-error-contrast-800': 'var(--color-error-contrast-light)',
		'--color-error-contrast-900': 'var(--color-error-contrast-light)',
		'--color-error-contrast-950': 'var(--color-error-contrast-light)',

		// Surface
		'--color-surface-50': '255 255 255',
		'--color-surface-100': '224 224 224',
		'--color-surface-200': '194 194 194',
		'--color-surface-300': '163 163 163',
		'--color-surface-400': '133 133 133',
		'--color-surface-500': '102 102 102',
		'--color-surface-600': '85 85 85',
		'--color-surface-700': '68 68 68',
		'--color-surface-800': '51 51 51',
		'--color-surface-900': '34 34 34',
		'--color-surface-950': '17 17 17',
		'--color-surface-contrast-dark': 'var(--color-surface-950)',
		'--color-surface-contrast-light': 'var(--color-surface-50)',
		'--color-surface-contrast-50': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-100': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-200': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-300': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-400': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-500': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-600': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-700': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-800': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-900': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-950': 'var(--color-surface-contrast-light)'
	},
	properties_dark: {}, // TODO: REMOVE
	enhancements: {} // TODO: REMOVE
}; // satisfies PresetTheme;

export default next;
