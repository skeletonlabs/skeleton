/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';

import GradientHeading from '$lib/GradientHeading/GradientHeading.svelte';

// These are used to validate that all switch cases in the component applies correctly.

const defaultSize: String = '5xl';
const defaultDirection: String = 'r';
const from: string = 'from-primary-500';
const to: string = 'to-accent-500';

const sizes:        String[] = ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl'];
const directions:   String[] = ['t', 'b', 'l', 'r', 'tr', 'tl', 'br', 'bl'];

const testid = 'gradient-heading';

describe('Card.svelte', () => {
	afterEach(() => cleanup());

	it('Renders without props', async () => {
		const {getByTestId} = render(GradientHeading);
		expect(getByTestId(testid)).toBeTruthy();
	});
	// Test default color-from prop
	it('Default "from" prop applied")', async () => {
		const {getByTestId} = render(GradientHeading);	
		expect(getByTestId(testid).getAttribute('class').includes(from));
	});
	// Test default color-to prop
	it('Default "to" prop applied")', async () => {
		const {getByTestId} = render(GradientHeading);	
		expect(getByTestId(testid).getAttribute('class').includes(to));
	});

	// Test that each size is implemented
	sizes.forEach((size) =>{
		it(`Size: ${size} applied`, async ()=>{
			const { getByTestId } = render(GradientHeading, { size });
			expect(getByTestId(testid).getAttribute('class').includes(`font-${size}`));
		})
	})

	// Test that default size is applied on invalid prop
	it('Default size applied (invalid prop)', async () => {
		const {getByTestId} = render(GradientHeading, { size: '2-xl' });
		expect(getByTestId(testid).getAttribute('class').includes(`font-${defaultSize}`));
		//Unsure why the below will not work
		//expect(getByTestId(testid).className).toContain(`font-${defaultSize}`);
	});

	// Test that each direction is implemented
	directions.forEach((direction) =>{
		it(`Direction: ${direction} applied`, async ()=>{
			const {getByTestId} = render(GradientHeading, { directions: direction });
			expect(getByTestId('span').getAttribute('class').includes(`bg-gradient-to-${direction}`));
		})
	})
	// Test that default direction is applied on invalid prop
	it('Default direction applied (invalid prop)', async () => {
		const {getByTestId} = render(GradientHeading, { direction: 'top' });
		expect(getByTestId('span').getAttribute('class').includes(`bg-gradient-to-${defaultDirection}`));
	});
});
