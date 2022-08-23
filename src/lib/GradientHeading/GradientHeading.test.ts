import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import GradientHeading from '$lib/GradientHeading/GradientHeading.svelte';

const defaultDirection: String = 'bg-gradient-to-r';
const defaultFrom: string = 'from-primary-500';
const defaultTo: string = 'to-accent-500';
const exampleDirections: String[] = ['bg-gradient-to-r', 'bg-gradient-to-l'];
const testid = 'gradient-heading';

describe('Card.svelte', () => {
	// NOTE: handling destructuring types:
	// https://daily-dev-tips.com/posts/object-destructuring-in-typescript/
	
	it('Renders without props', async () => {
		const { getByTestId }: { getByTestId: any } = render(GradientHeading, { tag: 'h1' });
		expect(getByTestId(testid)).toBeTruthy();
	});

	// Test default color-from prop
	it('Default "from" prop applied")', async () => {
		const { getByTestId }: { getByTestId: any } = render(GradientHeading, { tag: 'h1' });
		expect(getByTestId(testid).getAttribute('class').includes(defaultFrom));
	});

	// Test default color-to prop
	it('Default "to" prop applied")', async () => {
		const { getByTestId }: { getByTestId: any } = render(GradientHeading, { tag: 'h1' });
		expect(getByTestId(testid).getAttribute('class').includes(defaultTo));
	});

	// Test that each direction is implemented
	exampleDirections.forEach((direction) => {
		it(`Direction: ${direction} applied`, async () => {
			const { getByTestId }: { getByTestId: any } = render(GradientHeading, { tag: 'h1', directions: direction });
			expect(getByTestId(testid).getAttribute('class').includes(`bg-gradient-to-${direction}`));
		});
	});

	// Test that default direction is applied on invalid prop
	it('Default direction applied (invalid prop)', async () => {
		const { getByTestId }: { getByTestId: any } = render(GradientHeading, { tag: 'h1', direction: 'bg-gradient-to-r' });
		expect(getByTestId(testid).getAttribute('class').includes(`bg-gradient-to-${defaultDirection}`));
	});
});
