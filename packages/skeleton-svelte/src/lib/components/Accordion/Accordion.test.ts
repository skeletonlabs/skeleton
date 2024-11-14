import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import { Accordion } from '$lib/index.js';

describe('Accordion', () => {
	const testId = 'accordion';

	it('Renders the component', () => {
		render(Accordion, {});
		const component = screen.getByTestId(testId);
		expect(component).toBeInTheDocument();
	});

	for (const prop of ['base', 'padding', 'spaceY', 'rounded', 'width', 'classes']) {
		it(`Correctly applies the \`${prop}\` prop`, () => {
			const testClass = 'bg-green-500';
			render(Accordion, { [prop]: testClass });
			const component = screen.getByTestId(testId);
			expect(component).toHaveClass(testClass);
		});
	}
});

// describe('Accordion.Item', () => {
// 	const testContext = { ... };

// 	it('Renders the component', () => {
// 		render(Accordion.Item, {
// 			context: new Map([['messages', testContext]]),
// 			props: {label: 'Notifications'},
// 		});
// 		const component = screen.getByTestId('accordion-item');
// 		expect(component).toBeInTheDocument();
// 	});
// });
