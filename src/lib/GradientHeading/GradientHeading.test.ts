/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';

import GradientHeading from '$lib/GradientHeading/GradientHeading.svelte';

// These are used to validate that all switch cases in the component applies correctly.

const defaultSize: String = 'text-4xl lg:text-6xl';
const defaultDirection: String = 'bg-gradient-to-r';
const defaultFrom: string = 'from-primary-500';
const defaultTo: string = 'to-accent-500';

const exampleSizes:        String[] = ['text-sm', 'text-base', 'text-9xl'];
const exampleDirections:   String[] = ['bg-gradient-to-r', 'bg-gradient-to-l'];

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
		expect(getByTestId(testid).getAttribute('class').includes(defaultFrom));
	});

	// Test default color-to prop
	it('Default "to" prop applied")', async () => {
		const {getByTestId} = render(GradientHeading);	
		expect(getByTestId(testid).getAttribute('class').includes(defaultTo));
	});

	// Test that each size is implemented
	exampleSizes.forEach((size) =>{
		it(`Size: ${size} applied`, async ()=>{
			const { getByTestId } = render(GradientHeading, { size });
			expect(getByTestId(testid).getAttribute('class').includes(`font-${size}`));
		})
	})

	// Test that default size is applied on invalid prop
	it('Default size applied (invalid prop)', async () => {
		const {getByTestId} = render(GradientHeading, { size: 'text-2xl' });
		expect(getByTestId(testid).getAttribute('class').includes(`font-${defaultSize}`));
	});

	// Test that each direction is implemented
	exampleDirections.forEach((direction) =>{
		it(`Direction: ${direction} applied`, async ()=>{
			const {getByTestId} = render(GradientHeading, { directions: direction });
			expect(getByTestId('span').getAttribute('class').includes(`bg-gradient-to-${direction}`));
		})
	})

	// Test that default direction is applied on invalid prop
	it('Default direction applied (invalid prop)', async () => {
		const {getByTestId} = render(GradientHeading, { direction: 'bg-gradient-to-r' });
		expect(getByTestId('span').getAttribute('class').includes(`bg-gradient-to-${defaultDirection}`));
	});
});
