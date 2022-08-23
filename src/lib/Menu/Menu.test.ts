import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import Menu from '$lib/Menu/Menu.svelte';

describe.skip('Menu.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Menu);
		expect(getByTestId('menu-wrapper')).toBeTruthy();
	});

	it('Renders with all props', () => {
		const { getByTestId } = render(Menu, {
			props: {
				select: true,
				open: false,
				origin: 'tr',
				duration: 250,
				disabled: false
			}
		});
		expect(getByTestId('menu-wrapper')).toBeTruthy();
	});

	it('Renders with default origin (auto)', () => {
		const { getByTestId } = render(Menu, {
			props: {
				select: true,
				open: false,
				duration: 250,
				disabled: false
			}
		});
		expect(getByTestId('menu-wrapper')).toBeTruthy();
	});
});
