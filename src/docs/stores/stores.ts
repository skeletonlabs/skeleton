import { writable, type Writable } from 'svelte/store';
import { localStorageStore } from '$lib/utilities/LocalStorageStore/LocalStorageStore';
import type { FormTheme } from '$docs/layouts/DocsThemer/types';

// Svelte Writable Stores ---

// Set within root layout, persists current SvelteKit $page.url.pathname
export const storeCurrentUrl: Writable<string | undefined> = writable(undefined);

// Set within the root layout, set TRUE if served in Vercel production mode
export const storeVercelProductionMode: Writable<boolean> = writable(false);

// Local Storage Stores ---

// Persists select preset theme
export const storeTheme: Writable<string> = localStorageStore('storeTheme', 'skeleton');

// Persists the tab selection for the user's preferred onboarding method
export const storeOnboardMethod: Writable<string> = localStorageStore('storeOnboardMethod', 'cli');

export const storeThemGenForm: Writable<FormTheme> = localStorageStore('storeThemGenForm', {
	colors: [
		{ key: 'primary', label: 'Primary', hex: '#0FBA81', on: '0 0 0' },
		{ key: 'secondary', label: 'Secondary', hex: '#4F46E5', on: '255 255 255' },
		{ key: 'tertiary', label: 'Tertiary', hex: '#0EA5E9', on: '0 0 0' },
		{ key: 'success', label: 'Success', hex: '#84cc16', on: '0 0 0' },
		{ key: 'warning', label: 'Warning', hex: '#EAB308', on: '0 0 0' },
		{ key: 'error', label: 'Error', hex: '#D41976', on: '255 255 255' },
		{ key: 'surface', label: 'Surface', hex: '#495a8f', on: '255 255 255' }
	],
	fontBase: 'system',
	fontHeadings: 'system',
	textColorLight: '0 0 0',
	textColorDark: '255 255 255',
	roundedBase: '9999px',
	roundedContainer: '8px',
	borderBase: '1px'
});
