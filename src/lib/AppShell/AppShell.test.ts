import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import AppShell from '$lib/AppShell/AppShell.svelte';

describe('AppShell.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(AppShell);
		expect(getByTestId('app-shell')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(AppShell, {
			props: {
				sidebarLeftWidth: 'w-auto',
                sidebarRightWidth: 'w-auto',
			}
		});
		expect(getByTestId('app-shell')).toBeTruthy();
	});
});
