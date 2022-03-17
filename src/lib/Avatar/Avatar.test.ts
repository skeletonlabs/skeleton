/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, it, vi } from 'vitest';

import Avatar from '$lib/Avatar/Avatar.svelte';
import { fireEvent } from '@testing-library/dom';

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

	it('Hover state', async()=>{
		const instance = render(Avatar);
	})

	it('On click', async ()=>{
		const onClick = vi.fn()
		const instance = render(Avatar);
		// Set on:click to onEvent() for component.
		instance.component.$on('click', onClick);
		const btn = screen.getByTestId('wrapper');
    	await fireEvent.click(btn);
		await fireEvent.click(btn);
		expect(onClick.mock.calls.length).eq(2);
	})
});