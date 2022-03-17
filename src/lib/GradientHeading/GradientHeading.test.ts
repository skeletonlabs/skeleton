/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';

import GradientHeading from '$lib/GradientHeading/GradientHeading.svelte';

// These are used to validate that all switch cases in the component applies correctly.

const defaultDirection: String = 'l';
const defaultSize: String = '4xl';

const sizes:        String[] = ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl'];
const directions:   String[] = ['t', 'b', 'l', 'r', 'tr', 'tl', 'br', 'bl'];

describe('Card.svelte', () => {
	afterEach(() => cleanup());

	it('Renders', async () => {
		render(GradientHeading);
	});

	it('Size style applied', () => {
		sizes.forEach((item) => {
			const instance = render(GradientHeading, { size: item });
			let el = screen.getByTestId('gradientHeading');
			expect(el.getAttribute('class').includes(`font-${item}`));
			instance.unmount();
		});
	});

	it('Default size applied (invalid prop)', () => {
		const instance = render(GradientHeading, { size: '2-xl' });
		let el = screen.getByTestId('gradientHeading');
		expect(el.getAttribute('class').includes(`font-${defaultSize}`));
	});

	it('Direction applied', () => {
		directions.forEach((item) => {
			const instance = render(GradientHeading, { directions: item });
			let el = screen.getByTestId('span');
			expect(el.getAttribute('class').includes(`bg-gradient-to-${item}`));
			instance.unmount();
		});
	});

	it('Default direction applied (invalid prop)', () => {
		const instance = render(GradientHeading, { direction: 'top' });
		let el = screen.getByTestId('span');
		expect(el.getAttribute('class').includes(`bg-gradient-to-${defaultDirection}`));
	});
});
