/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';

import Avatar from '$lib/Avatar/Avatar.svelte';

describe('Button.svelte', () => {
	afterEach(() => cleanup());

	let img = 'https://i.pravatar.cc/512';

	it('Renders', async () => {
		render(Avatar); // , { label: 'Button' }
	});

	it('Image shown', async () => {
        const instance = render(Avatar, {src: img});
		const image = screen.getByRole('img');
		const src = image.getAttribute('src');
		expect(src).to.eq(img);
	
    });

	it('Placeholder shown', async()=>{
		const instance = render(Avatar);
		const text = screen.getByTestId('placeholder');
		expect(text.textContent).eq('A');
	})

});