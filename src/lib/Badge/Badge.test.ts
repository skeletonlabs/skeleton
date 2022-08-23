import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import Badge from '$lib/Badge/Badge.svelte';

describe('Badge.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Badge);
		expect(getByTestId('badge')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Badge, { background: 'bg-red-500' });
		expect(getByTestId('badge')).toBeTruthy();
	});
});
