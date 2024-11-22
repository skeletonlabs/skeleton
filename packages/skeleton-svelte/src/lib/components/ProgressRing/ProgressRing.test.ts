import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/svelte';

import { mockSnippet } from '$lib/internal/test-utils.js';
import { ProgressRing } from '$lib/index.js';

describe('ProgressRing', () => {
	const testIds = {
		root: 'progress-ring',
		ringChildren: 'progress-ring-children',
		svgRing: 'progress-ring-svg',
		ringLabel: 'progress-label'
	};
	const commonProps = {
		value: 50,
		max: 100
	};

	it('Renders the component', () => {
		render(ProgressRing, {});
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});

	it('Should render the component with a value and max props', () => {
		render(ProgressRing, { ...commonProps });
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});

	it('should render the value percentage text', () => {
		render(ProgressRing, { ...commonProps, showLabel: true });
		const component = screen.getByTestId(testIds.ringLabel);
		expect(component).toHaveTextContent(`${commonProps.value}%`);
	});

	it('should render the component with child content', () => {
		const testValue = 'children';
		render(ProgressRing, { children: mockSnippet(testValue) });
		const component = screen.getByTestId(testIds.ringChildren);
		expect(component).toHaveTextContent(testValue);
	});

	it('should render in indeterminate mode', () => {
		render(ProgressRing, {});
		const componentRoot = screen.getByTestId(testIds.root);
		expect(componentRoot.dataset.state).toBe('loading');
		waitFor(async () => {
			const componentSvg = screen.getByTestId(testIds.svgRing);
			expect(componentSvg).toHaveClass('animate-spin');
		});
	});

	for (const prop of ['base', 'size', 'classes']) {
		it(`Correctly applies the root \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(ProgressRing, { ...commonProps, [prop]: value });
			const component = screen.getByTestId(testIds.root);
			expect(component).toHaveClass(value);
		});
	}

	it('Should not render the label when `showLabel` is false', () => {
		render(ProgressRing, { ...commonProps, showLabel: false });
		expect(screen.queryAllByTestId(testIds.ringLabel)).toStrictEqual([]);
	});
});
