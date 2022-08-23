import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import Paginator from '$lib/Paginator/Paginator.svelte';

let offset: number = 1;
let limit: number = 50;
let size: number = 100;
let amounts: number[] = [1, 5, 10, 50, 100];

describe('Paginator.svelte', () => {
	it('Renders with props', async () => {
		const { getByTestId } = render(Paginator);
		expect(getByTestId('paginator')).toBeTruthy();
	});

	it('Renders with props', async () => {
		const { getByTestId } = render(Paginator, {
			props: {
				offset,
				limit,
				size,
				amounts
			}
		});
		expect(getByTestId('paginator')).toBeTruthy();
	});
});
