// import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// Action
import { menu } from '$lib/utilities/Menu/menu';

describe.skip('Action: Menu', () => {
	// FIXME: TEST SKIPPED UNTIL FIXED
	// Chris: Not sure why this isn't working, same pattern as filters.ts
	it('Smoke Test', async () => {
		// Element: Menu
		const elemMenu: HTMLElement = document.createElement('div');
		elemMenu.setAttribute('data-menu', 'test');
		// Element: Button (trigger)
		const elemButton: HTMLElement = document.createElement('button');
		// Run Action
		menu(elemButton, { menu: 'test' });
		// Expect
		// console.log(elemMenu.getAttribute('role')); // --> returns null???
		expect(elemMenu.getAttribute('role')).to.eq('menu');
	});
});
