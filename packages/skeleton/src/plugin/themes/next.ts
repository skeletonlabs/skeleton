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
		'--color-primary-50': '242 247 253',
		'--color-primary-100': '229 237 249',
		'--color-primary-200': '197 219 242',
		'--color-primary-300': '146 189 231',
		'--color-primary-400': '87 154 217',
		'--color-primary-500': '49 126 198', // '--color-primary-500': '236 72 153',
		'--color-primary-600': '32 93 158',
		'--color-primary-700': '29 79 135',
		'--color-primary-800': '27 68 113',
		'--color-primary-900': '28 58 94',
		'--color-primary-950': '19 37 62',
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
		'--color-secondary-50': '237 239 255',
		'--color-secondary-100': '222 226 255',
		'--color-secondary-200': '196 201 255',
		'--color-secondary-300': '160 166 255',
		'--color-secondary-400': '114 111 255',
		'--color-secondary-500': '106 91 249',
		'--color-secondary-600': '91 61 238',
		'--color-secondary-700': '79 47 211',
		'--color-secondary-800': '64 41 170',
		'--color-secondary-900': '55 41 134',
		'--color-secondary-950': '34 24 78',
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
		'--color-tertiary-50': '244 244 254',
		'--color-tertiary-100': '236 234 253',
		'--color-tertiary-200': '219 216 252',
		'--color-tertiary-300': '192 185 249',
		'--color-tertiary-400': '164 149 245',
		'--color-tertiary-500': '129 100 238',
		'--color-tertiary-600': '111 67 228',
		'--color-tertiary-700': '96 49 208',
		'--color-tertiary-800': '80 40 175',
		'--color-tertiary-900': '67 35 143',
		'--color-tertiary-950': '40 20 97',
		'--color-tertiary-contrast-dark': 'var(--color-tertiary-950)',
		'--color-tertiary-contrast-light': 'var(--color-tertiary-50)',
		'--color-tertiary-contrast-50': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-100': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-200': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-300': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-400': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-500': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-600': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-700': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-800': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-900': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-950': 'var(--color-tertiary-contrast-light)',

		// Success
		'--color-success-50': '243 250 235',
		'--color-success-100': '228 243 212',
		'--color-success-200': '203 233 173',
		'--color-success-300': '171 218 127',
		'--color-success-400': '139 199 84',
		'--color-success-500': '107 172 54',
		'--color-success-600': '81 137 39',
		'--color-success-700': '63 105 34',
		'--color-success-800': '53 84 32',
		'--color-success-900': '47 72 31',
		'--color-success-950': '22 39 12',
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
		'--color-warning-50': '255 247 237',
		'--color-warning-100': '255 237 213',
		'--color-warning-200': '255 216 169',
		'--color-warning-300': '254 197 135',
		'--color-warning-400': '252 148 59',
		'--color-warning-500': '250 117 21',
		'--color-warning-600': '235 90 11',
		'--color-warning-700': '195 67 11',
		'--color-warning-800': '155 53 17',
		'--color-warning-900': '125 46 17',
		'--color-warning-950': '67 21 7',
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
		'--color-error-50': '255 241 243',
		'--color-error-100': '255 227 230',
		'--color-error-200': '255 204 212',
		'--color-error-300': '255 161 177',
		'--color-error-400': '255 124 149',
		'--color-error-500': '249 58 100',
		'--color-error-600': '231 23 79',
		'--color-error-700': '195 13 65',
		'--color-error-800': '163 14 62',
		'--color-error-900': '139 16 60',
		'--color-error-950': '78 3 27',
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
		'--color-surface-50': '250 250 249',
		'--color-surface-100': '245 245 244',
		'--color-surface-200': '231 229 228',
		'--color-surface-300': '214 211 209',
		'--color-surface-400': '168 162 158',
		'--color-surface-500': '120 113 108',
		'--color-surface-600': '87 83 78',
		'--color-surface-700': '68 64 60',
		'--color-surface-800': '41 37 36',
		'--color-surface-900': '23 25 26',
		'--color-surface-950': '17 17 20',
		'--color-surface-contrast-dark': 'var(--color-surface-950)',
		'--color-surface-contrast-light': 'var(--color-surface-50)',
		'--color-surface-contrast-50': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-100': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-200': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-300': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-400': 'var(--color-surface-contrast-dark)',
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
