// import type { PresetTheme } from './index.js';

const next = {
	name: 'next',
	properties: {
		// Spacing ---
		// https://tailwindcss.com/docs/customizing-spacing

		'--space-scale-factor': '1',

		'--space-0-5': 'calc(0.125rem * var(--space-scale-factor))', // 2px
		'--space-1': 'calc(0.25rem * var(--space-scale-factor))', // 4px
		'--space-1-5': 'calc(0.375rem * var(--space-scale-factor))', // 6px
		'--space-2': 'calc(0.5rem * var(--space-scale-factor))', // 8px
		'--space-2-5': 'calc(0.625rem * var(--space-scale-factor))', // 10px
		'--space-3': 'calc(0.75rem * var(--space-scale-factor))', // 12px
		'--space-3-5': 'calc(0.875rem * var(--space-scale-factor))', // 14px
		'--space-4': 'calc(1rem * var(--space-scale-factor))', // 16px
		'--space-5': 'calc(1.25rem * var(--space-scale-factor))', // 20px
		'--space-6': 'calc(1.5rem * var(--space-scale-factor))', // 24px
		'--space-7': 'calc(1.75rem * var(--space-scale-factor))', // 28px
		'--space-8': 'calc(2rem * var(--space-scale-factor))', // 32px
		'--space-9': 'calc(2.25rem * var(--space-scale-factor))', // 36px
		'--space-10': 'calc(2.5rem * var(--space-scale-factor))', // 40px
		'--space-11': 'calc(2.75rem * var(--space-scale-factor))', // 44px
		'--space-12': 'calc(3rem * var(--space-scale-factor))', // 48px
		'--space-14': 'calc(3.5rem * var(--space-scale-factor))', // 56px
		'--space-16': 'calc(4rem * var(--space-scale-factor))', // 64px
		'--space-20': 'calc(5rem * var(--space-scale-factor))', // 80px
		'--space-24': 'calc(6rem * var(--space-scale-factor))', // 96px
		'--space-28': 'calc(7rem * var(--space-scale-factor))', // 112px
		'--space-32': 'calc(8rem * var(--space-scale-factor))', // 128px
		'--space-36': 'calc(9rem * var(--space-scale-factor))', // 144px
		'--space-40': 'calc(10rem * var(--space-scale-factor))', // 160px
		'--space-44': 'calc(11rem * var(--space-scale-factor))', // 176px
		'--space-48': 'calc(12rem * var(--space-scale-factor))', // 192px
		'--space-52': 'calc(13rem * var(--space-scale-factor))', // 208px
		'--space-56': 'calc(14rem * var(--space-scale-factor))', // 224px
		'--space-60': 'calc(15rem * var(--space-scale-factor))', // 240px
		'--space-64': 'calc(16rem * var(--space-scale-factor))', // 256px
		'--space-72': 'calc(18rem * var(--space-scale-factor))', // 288px
		'--space-80': 'calc(20rem * var(--space-scale-factor))', // 320px
		'--space-96': 'calc(24rem * var(--space-scale-factor))', // 384px

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
		'--heading-font-family': 'var(--base-font-family)',
		'--heading-font-size': 'var(--base-font-size)',
		'--heading-line-height': 'var(--base-line-height)',
		'--heading-font-weight': 'bold',
		'--heading-font-style': 'normal',
		'--heading-letter-spacing': 'var(--base-letter-spacing)',

		'--anchor-font-color': 'var(--color-primary-500)',
		'--anchor-font-color-dark': 'var(--color-primary-500)',
		'--anchor-font-family': 'var(--base-font-family)',
		'--anchor-font-size': 'var(--base-font-size)',
		'--anchor-line-height': 'var(--base-line-height)',
		'--anchor-font-weight': 'var(--base-font-weight)',
		'--anchor-font-style': 'var(--base-font-style)',
		'--anchor-letter-spacing': 'var(--base-letter-spacing)',
		'--anchor-text-decoration': 'none',
		'--anchor-text-decoration-hover': 'underline',
		'--anchor-text-decoration-active': 'var(--anchor-text-decoration-hover)',
		'--anchor-text-decoration-focus': 'var(--anchor-text-decoration-hover)',

		// Backgrounds ---

		'--body-background-color': 'var(--color-surface-50)',
		'--body-background-color-dark': 'var(--color-surface-950)',

		// Borders ---
		// Covers: rounded, borders, divides, outlines, rings

		'--radii-default': '6px',
		'--radii-container': '12px',

		'--border-width-default': '1px',
		'--divide-width-default': 'var(--border-width-default)',
		'--outline-width-default': 'var(--border-width-default)',
		'--ring-width-default': 'var(--border-width-default)',

		// Colors ---

		// Primary
		'--color-primary-50': '237 250 255',
		'--color-primary-100': '182 232 255',
		'--color-primary-200': '131 220 255',
		'--color-primary-300': '73 199 255',
		'--color-primary-400': '31 167 255',
		'--color-primary-500': '1 112 243',
		'--color-primary-600': '3 98 212',
		'--color-primary-700': '4 84 181',
		'--color-primary-800': '5 69 147',
		'--color-primary-900': '7 55 117',
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
		'--color-secondary-100': '196 170 233',
		'--color-secondary-200': '177 137 225',
		'--color-secondary-300': '158 104 217',
		'--color-secondary-400': '140 73 210',
		'--color-secondary-500': '121 40 202',
		'--color-secondary-600': '107 36 181',
		'--color-secondary-700': '94 35 165',
		'--color-secondary-800': '80 31 146',
		'--color-secondary-900': '68 29 125',
		'--color-secondary-950': '50 25 104',
		'--color-secondary-contrast-dark': 'var(--color-secondary-950)',
		'--color-secondary-contrast-light': 'var(--color-secondary-50)',
		'--color-secondary-contrast-50': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-100': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-200': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-300': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-400': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-500': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-600': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-700': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-800': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-900': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-950': 'var(--color-secondary-contrast-light)',

		// Tertiary
		'--color-tertiary-50': '255 206 251',
		'--color-tertiary-100': '255 166 227',
		'--color-tertiary-200': '255 129 205',
		'--color-tertiary-300': '255 84 178',
		'--color-tertiary-400': '255 43 154',
		'--color-tertiary-500': '255 0 128',
		'--color-tertiary-600': '229 0 117',
		'--color-tertiary-700': '201 0 104',
		'--color-tertiary-800': '173 0 92',
		'--color-tertiary-900': '149 0 81',
		'--color-tertiary-950': '118 0 67',
		'--color-tertiary-contrast-dark': 'var(--color-tertiary-950)',
		'--color-tertiary-contrast-light': 'var(--color-tertiary-50)',
		'--color-tertiary-contrast-50': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-100': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-200': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-300': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-400': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-500': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-600': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-700': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-800': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-900': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-950': 'var(--color-tertiary-contrast-light)',

		// Success
		'--color-success-50': '209 248 239',
		'--color-success-100': '183 244 230',
		'--color-success-200': '159 240 222',
		'--color-success-300': '131 235 212',
		'--color-success-400': '108 231 203',
		'--color-success-500': '80 227 194',
		'--color-success-600': '65 192 165',
		'--color-success-700': '50 155 134',
		'--color-success-800': '35 119 103',
		'--color-success-900': '22 87 76',
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
		'--color-warning-50': '255 245 215',
		'--color-warning-100': '253 227 180',
		'--color-warning-200': '251 217 157',
		'--color-warning-300': '250 207 135',
		'--color-warning-400': '249 196 109',
		'--color-warning-500': '247 185 85',
		'--color-warning-600': '232 166 70',
		'--color-warning-700': '217 146 55',
		'--color-warning-800': '203 128 42',
		'--color-warning-900': '188 108 26',
		'--color-warning-950': '161 77 5',
		'--color-warning-contrast-dark': 'var(--color-warning-950)',
		'--color-warning-contrast-light': 'var(--color-warning-50)',
		'--color-warning-contrast-50': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-100': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-200': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-300': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-400': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-500': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-600': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-700': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-800': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-900': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-950': 'var(--color-warning-contrast-light)',

		// Error
		'--color-error-50': '247 212 214',
		'--color-error-100': '246 181 180',
		'--color-error-200': '246 149 146',
		'--color-error-300': '244 123 117',
		'--color-error-400': '244 94 85',
		'--color-error-500': '243 63 51',
		'--color-error-600': '210 53 43',
		'--color-error-700': '177 43 35',
		'--color-error-800': '144 33 26',
		'--color-error-900': '108 23 17',
		'--color-error-950': '71 12 8',
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
		'--color-surface-100': '250 250 250',
		'--color-surface-200': '230 230 230',
		'--color-surface-300': '200 200 200',
		'--color-surface-400': '150 150 150',
		'--color-surface-500': '100 100 100',
		'--color-surface-600': '80 80 80',
		'--color-surface-700': '70 70 70',
		'--color-surface-800': '40 40 40',
		'--color-surface-900': '25 25 25',
		'--color-surface-950': '10 10 10',
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
