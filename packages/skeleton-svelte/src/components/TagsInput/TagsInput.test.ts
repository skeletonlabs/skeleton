import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import { mockSnippet } from '../../internal/test-utils.js';
import { TagsInput } from '../../index.js';

describe('TagsInput', () => {
	const testIds = {
		root: 'tags',
		inputAdd: 'tags-input-add',
		delete: 'tag-delete',
	};
	const commonProps = {
		value: ['Vanilla', 'Chocolate', 'Strawberry'],
	};

	it('Renders the component', () => {
		render(TagsInput, { ...commonProps });
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});

	it('should render the `buttonDelete` snippet', () => {
		const testValue = 'testIcon';
		render(TagsInput, { ...commonProps, buttonDelete: mockSnippet(testValue) });
		const component = screen.getAllByTestId(testIds.delete)[0];
		expect(component).toHaveTextContent(testValue);
	});

	it('should render the component in the disabled state', () => {
		render(TagsInput, { ...commonProps, disabled: true });
		const component = screen.getByTestId(testIds.inputAdd);
		expect(component).toHaveAttribute('disabled');
	});

	for (const prop of ['base', 'gap', 'padding', 'classes']) {
		it(`Correctly applies the \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(TagsInput, { ...commonProps, [prop]: value });
			const component = screen.getByTestId(testIds.root);
			expect(component).toHaveClass(value);
		});
	}
});
