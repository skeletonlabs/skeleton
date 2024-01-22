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
		// Base Font
		'.base-font-color': { color: 'rgb(var(--base-font-color))' },
		'.base-font-color-dark': { color: 'rgb(var(--base-font-color-dark))' },
		'.base-font-family': { 'font-family': 'var(--base-font-family)' },
		'.base-font-size': { 'font-size': 'var(--base-font-size)' },
		'.base-font-style': { 'font-style': 'var(--base-font-style)' },
		'.base-font-weight': { 'font-weight': 'var(--base-font-weight)' },
		'.base-line-height': { 'line-height': 'var(--base-line-height)' },
		'.base-letter-spacing': { 'letter-spacing': 'var(--base-letter-spacing)' },
		// Header Font
		'.heading-font-color': { color: 'rgb(var(--heading-font-color))' },
		'.heading-font-color-dark': { color: 'rgb(var(--heading-font-color-dark))' },
		'.heading-font-family': { 'font-family': 'var(--heading-font-family)' },
		'.heading-font-size': { 'font-size': 'var(--heading-font-size)' },
		'.heading-font-style': { 'font-style': 'var(--heading-font-style)' },
		'.heading-font-weight': { 'font-weight': 'var(--heading-font-weight)' },
		'.heading-line-height': { 'line-height': 'var(--heading-line-height)' },
		'.heading-letter-spacing': { 'letter-spacing': 'var(--heading-letter-spacing)' },
		// Anchor Font
		'.anchor-font-color': { color: 'rgb(var(--anchor-font-color))' },
		'.anchor-font-color-dark': { color: 'rgb(var(--anchor-font-color-dark))' }
	} satisfies CssClasses;
};

export default typography;
