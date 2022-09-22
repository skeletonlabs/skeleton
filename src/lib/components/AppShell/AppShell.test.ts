import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import AppShell from '$lib/components/AppShell/AppShell.svelte';

describe('AppShell.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(AppShell);
		expect(getByTestId('app-shell')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(AppShell, {
			props: {
				slotHeader: 'bg-red-500',
				slotSidebarLeft: 'w-auto',
				slotSidebarRight: 'w-auto',
				slotPageHeader: 'bg-green-500',
				slotPageContent: 'bg-blue-500',
				slotPageFooter: 'bg-yellow-500',
				slotFooter: 'bg-purple-500'
			}
		});
		expect(getByTestId('app-shell')).toBeTruthy();
	});
});
