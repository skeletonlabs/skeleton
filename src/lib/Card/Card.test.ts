import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import Card from '$lib/Card/Card.svelte';

describe('Card.svelte', () => {
	it('Renders', async () => {
		render(Card);
	});

	// it('Renders with all props', async () => {});
});
