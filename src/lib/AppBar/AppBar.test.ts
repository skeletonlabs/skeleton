import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import AppBar from '$lib/AppBar/AppBar.svelte';

describe('AppBar.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(AppBar);
		expect(getByTestId('app-bar')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(AppBar, {
			props: {
				background: 'bg-primary-500',
                border: 'border border-accent-500',
                padding: 'p-4',
                shadow: 'shadow',
                space: 'space-x-2',
                // a11y
                label: 'TestAppShell',
                labelledby: 'TestLabelAppShell',
			}
		});
		expect(getByTestId('app-bar')).toBeTruthy();
	});
});
