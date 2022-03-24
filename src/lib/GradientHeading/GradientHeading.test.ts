/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';

import GradientHeading from '$lib/GradientHeading/GradientHeading.svelte';

// These are used to validate that all switch cases in the component applies correctly.

const from: string = 'from-primary-500';
const to: string = 'to-accent-500';
const defaultDirection: String = 'l';
const defaultSize: String = '4xl';

const sizes:        String[] = ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl'];
const directions:   String[] = ['t', 'b', 'l', 'r', 'tr', 'tl', 'br', 'bl'];

const testid = 'gradientHeading';

describe('Card.svelte', () => {
	afterEach(() => cleanup());

	it('Renders', async () => {
		render(GradientHeading);
	});

	sizes.forEach((size) =>{
		it(`Size: ${size} applied`, ()=>{
			const { getByTestId } = render(GradientHeading, { size });
			expect(getByTestId(testid).getAttribute('class').includes(`font-${size}`));
		})
	})

	it('Default "from" prop applied")', () => {
		const {getByTestId} = render(GradientHeading);	
		expect(getByTestId(testid).getAttribute('class').includes(from));
	});
	
	it('Default "to" prop applied")', () => {
		const {getByTestId} = render(GradientHeading);	
		expect(getByTestId(testid).getAttribute('class').includes(to));
	});

	it('Default size applied (invalid prop)', () => {
		const {getByTestId} = render(GradientHeading, { size: '2-xl' });
		expect(getByTestId(testid).getAttribute('class').includes(`font-${defaultSize}`));
	});

	directions.forEach((direction) =>{
		it(`Direction: ${direction} applied`, ()=>{
			const {getByTestId} = render(GradientHeading, { directions: direction });
			expect(getByTestId('span').getAttribute('class').includes(`bg-gradient-to-${direction}`));
		})
	})

	it('Default direction applied (invalid prop)', () => {
		const {getByTestId} = render(GradientHeading, { direction: 'top' });
		expect(getByTestId('span').getAttribute('class').includes(`bg-gradient-to-${defaultDirection}`));
	});
});
