// Skeleton Typography

import { type CssClasses } from '../settings.js';

export const typography = () => {
	return {
		// Typographic Scale
		'.type-scale-1': { 'font-size': 'var(--type-scale-1)' },
		'.type-scale-2': { 'font-size': 'var(--type-scale-2)' },
		'.type-scale-3': { 'font-size': 'var(--type-scale-3)' },
		'.type-scale-4': { 'font-size': 'var(--type-scale-4)' },
		'.type-scale-5': { 'font-size': 'var(--type-scale-5)' },
		'.type-scale-6': { 'font-size': 'var(--type-scale-6)' },
		'.type-scale-7': { 'font-size': 'var(--type-scale-7)' },
		'.type-scale-8': { 'font-size': 'var(--type-scale-8)' },
		'.type-scale-9': { 'font-size': 'var(--type-scale-9)' },
		'.type-scale-10': { 'font-size': 'var(--type-scale-10)' },
		'.type-scale-11': { 'font-size': 'var(--type-scale-11)' },
		'.type-scale-12': { 'font-size': 'var(--type-scale-12)' },
		'.type-scale-13': { 'font-size': 'var(--type-scale-13)' },
		// Base Font
		'.base-font-color': { color: 'rgb(var(--base-font-color))' },
		'.base-font-color-dark': { color: 'rgb(var(--base-font-color-dark))' },
		'.base-font-family': { 'font-family': 'var(--base-font-family)' },
		'.base-font-size': { 'font-size': 'var(--base-font-size)' },
		'.base-line-height': { 'line-height': 'var(--base-line-height)' },
		'.base-font-weight': { 'font-weight': 'var(--base-font-weight)' },
		'.base-font-style': { 'font-style': 'var(--base-font-style)' },
		'.base-letter-spacing': { 'letter-spacing': 'var(--base-letter-spacing)' },
		// Header Font
		'.heading-font-color': { color: 'rgb(var(--heading-font-color))' },
		'.heading-font-color-dark': { color: 'rgb(var(--heading-font-color-dark))' },
		'.heading-font-family': { 'font-family': 'var(--heading-font-family)' },
		'.heading-font-size': { 'font-size': 'var(--heading-font-size)' },
		'.heading-line-height': { 'line-height': 'var(--heading-line-height)' },
		'.heading-font-weight': { 'font-weight': 'var(--heading-font-weight)' },
		'.heading-font-style': { 'font-style': 'var(--heading-font-style)' },
		'.heading-letter-spacing': { 'letter-spacing': 'var(--heading-letter-spacing)' },
		// Anchor Font
		'.anchor-font-color': { color: 'rgb(var(--anchor-font-color))' },
		'.anchor-font-color-dark': { color: 'rgb(var(--anchor-font-color-dark))' },
		'.anchor-font-family': { 'font-family': 'var(--anchor-font-family)' },
		'.anchor-font-size': { 'font-size': 'var(--anchor-font-size)' },
		'.anchor-line-height': { 'line-height': 'var(--anchor-line-height)' },
		'.anchor-font-weight': { 'font-weight': 'var(--anchor-font-weight)' },
		'.anchor-font-style': { 'font-style': 'var(--anchor-font-style)' },
		'.anchor-letter-spacing': { 'letter-spacing': 'var(--anchor-letter-spacing)' },
		'.anchor-text-decoration': { 'text-decoration': 'var(--anchor-text-decoration)' },
		'.anchor-text-decoration-active': { 'text-decoration': 'var(--anchor-text-decoration-active)' },
		'.anchor-text-decoration-focus': { 'text-decoration': 'var(--anchor-text-decoration-focus)' },
		'.anchor-text-decoration-hover': { 'text-decoration': 'var(--anchor-text-decoration-hover)' }
	} satisfies CssClasses;
};

export default typography;
