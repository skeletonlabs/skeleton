import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import { mockSnippet } from '$lib/internal/test-utils.js';
import { Switch } from '$lib/index.js';

describe('Switch', () => {
	const testIds = {
		root: 'switch',
		input: 'switch-input',
		iconInactive: 'switch-icon-inactive',
		iconActive: 'switch-icon-active',
		control: 'switch-control'
	};
	const commonProps = {
		name: 'test'
	};

	it('Renders the component', () => {
		render(Switch, { ...commonProps, checked: false });
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});

	it('should render in the on state', () => {
		render(Switch, { ...commonProps, checked: true });
		const component = screen.getByTestId(testIds.input);
		expect(component).toBeChecked();
	});

	it('should render with an inactive icon', () => {
		const testValue = 'children';
		render(Switch, { ...commonProps, checked: false, inactiveChild: mockSnippet(testValue) });
		const component = screen.getByTestId(testIds.iconInactive);
		expect(component).toHaveTextContent(testValue);
	});

	it('should render with an inactive icon', () => {
		const testValue = 'children';
		render(Switch, { ...commonProps, checked: true, activeChild: mockSnippet(testValue) });
		const component = screen.getByTestId(testIds.iconActive);
		expect(component).toHaveTextContent(testValue);
	});

	it('should render in the disabled state', () => {
		render(Switch, { ...commonProps, disabled: true });
		const component = screen.getByTestId(testIds.input);
		expect(component).toHaveAttribute('disabled');
	});

	it('should render in the compact mode', () => {
		render(Switch, { ...commonProps, compact: true });
		const component = screen.getByTestId(testIds.control);
		expect(component).toHaveClass('aspect-square');
	});

	for (const prop of ['base', 'classes']) {
		it(`Correctly applies the root \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(Switch, { ...commonProps, [prop]: value });
			const component = screen.getByTestId(testIds.root);
			expect(component).toHaveClass(value);
		});
	}
});
