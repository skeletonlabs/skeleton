import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import { Accordion } from '$lib/index.js';
import AccordionTest from './Accordion.test.svelte';

describe('Accordion', () => {
	const testId = 'accordion';

	it('Renders the component', () => {
		render(Accordion, {});
		const component = screen.getByTestId(testId);
		expect(component).toBeInTheDocument();
	});

	for (const prop of ['base', 'padding', 'spaceY', 'rounded', 'width', 'classes']) {
		it(`Correctly applies the \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(Accordion, { [prop]: value });
			const component = screen.getByTestId(testId);
			expect(component).toHaveClass(value);
		});
	}
});

describe('Accordion.Item', () => {
	const testId = 'accordion-item';

	it('Renders the item', () => {
		render(AccordionTest, {});
		const component = screen.getAllByTestId(testId)[0];
		expect(component).toBeInTheDocument();
	});

	it('Renders all snippets', () => {
		render(AccordionTest, {});
		const component = screen.getAllByTestId(testId)[0];
		expect(component).toHaveTextContent('FooLead');
		expect(component).toHaveTextContent('FooControl');
		expect(component).toHaveTextContent('FooPanel');
	});

	for (const prop of ['base', 'spaceY', 'classes']) {
		it(`Correctly applies the \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(AccordionTest, { childProps: { [prop]: value } });
			const component = screen.getAllByTestId(testId)[0];
			expect(component).toHaveClass(value);
		});
	}

	it('Renders in open state', () => {
		render(AccordionTest, {});
		const component = screen.getAllByTestId(testId)[0]; // first item
		expect(component.dataset.state).toEqual('open');
	});

	it('Renders in closed state', () => {
		render(AccordionTest, {});
		const component = screen.getAllByTestId(testId)[1]; // second item
		expect(component.dataset.state).toEqual('closed');
	});
});
