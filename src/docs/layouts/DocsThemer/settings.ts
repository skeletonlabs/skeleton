// Settings used for the Theme Generator

import { semanticNames, tailwindNumbers, type SemanticNames, type TailwindNumbers } from '$lib/types';

// Generate a list of color properties for selection inputs.
// Ex: --color-[colorName]-[colorShade]
const colorPropsArr: {
	label: string;
	value: `var(--color-${SemanticNames}-${TailwindNumbers})`;
}[] = [];
semanticNames.forEach((colorName) => {
	return tailwindNumbers.forEach((colorShade) => {
		const colorLabel = colorName.charAt(0).toUpperCase() + colorName.slice(1);
		colorPropsArr.push({ label: `${colorLabel} ${colorShade}`, value: `var(--color-${colorName}-${colorShade})` });
	});
});

// Theme Property Settings
export const inputSettings = {
	colorProps: [
		// Black
		{ label: 'Black', value: '0 0 0' },
		// White
		{ label: 'White', value: '255 255 255' },
		// Implement each available color shade
		...colorPropsArr
	],
	fonts: ['sans', 'serif', 'mono', 'system'],
	rounded: ['0px', '2px', '4px', '6px', '8px', '12px', '16px', '24px'],
	border: ['0px', '1px', '2px', '4px', '6px', '8px']
};

// Available Font Family Sets
export const fontSettings: Record<string, string> = {
	// Tailwind Sans-Serif
	sans: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
	// Tailwind Serif
	serif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
	// Tailwind Mono
	mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
	// System UI
	system: `system-ui`
};

// Available Swatch Color Classes
export const swatchColorClasses: Record<SemanticNames, Record<TailwindNumbers, string>> = {
	primary: {
		50: 'bg-primary-50',
		100: 'bg-primary-100',
		200: 'bg-primary-200',
		300: 'bg-primary-300',
		400: 'bg-primary-400',
		500: 'bg-primary-500 text-on-primary-token fill-on-primary-token',
		600: 'bg-primary-600',
		700: 'bg-primary-700',
		800: 'bg-primary-800',
		900: 'bg-primary-900'
	},
	secondary: {
		50: 'bg-secondary-50',
		100: 'bg-secondary-100',
		200: 'bg-secondary-200',
		300: 'bg-secondary-300',
		400: 'bg-secondary-400',
		500: 'bg-secondary-500 text-on-secondary-token fill-on-secondary-token',
		600: 'bg-secondary-600',
		700: 'bg-secondary-700',
		800: 'bg-secondary-800',
		900: 'bg-secondary-900'
	},
	tertiary: {
		50: 'bg-tertiary-50',
		100: 'bg-tertiary-100',
		200: 'bg-tertiary-200',
		300: 'bg-tertiary-300',
		400: 'bg-tertiary-400',
		500: 'bg-tertiary-500 text-on-tertiary-token fill-on-tertiary-token',
		600: 'bg-tertiary-600',
		700: 'bg-tertiary-700',
		800: 'bg-tertiary-800',
		900: 'bg-tertiary-900'
	},
	success: {
		50: 'bg-success-50',
		100: 'bg-success-100',
		200: 'bg-success-200',
		300: 'bg-success-300',
		400: 'bg-success-400',
		500: 'bg-success-500 text-on-success-token fill-on-success-token',
		600: 'bg-success-600',
		700: 'bg-success-700',
		800: 'bg-success-800',
		900: 'bg-success-900'
	},
	warning: {
		50: 'bg-warning-50',
		100: 'bg-warning-100',
		200: 'bg-warning-200',
		300: 'bg-warning-300',
		400: 'bg-warning-400',
		500: 'bg-warning-500 text-on-warning-token fill-on-warning-token',
		600: 'bg-warning-600',
		700: 'bg-warning-700',
		800: 'bg-warning-800',
		900: 'bg-warning-900'
	},
	error: {
		50: 'bg-error-50',
		100: 'bg-error-100',
		200: 'bg-error-200',
		300: 'bg-error-300',
		400: 'bg-error-400',
		500: 'bg-error-500 text-on-error-token fill-on-primary-token',
		600: 'bg-error-600',
		700: 'bg-error-700',
		800: 'bg-error-800',
		900: 'bg-error-900'
	},
	surface: {
		50: 'bg-surface-50',
		100: 'bg-surface-100',
		200: 'bg-surface-200',
		300: 'bg-surface-300',
		400: 'bg-surface-400',
		500: 'bg-surface-500 text-on-surface-token fill-on-surface-token',
		600: 'bg-surface-600',
		700: 'bg-surface-700',
		800: 'bg-surface-800',
		900: 'bg-surface-900'
	}
};
