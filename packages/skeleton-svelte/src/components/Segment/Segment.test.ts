import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import { Segment } from '../../index.js';
import SegmentTest from './Segment.test.svelte';

describe('Segment', () => {
	const testId = 'segment';

	it('Renders the component', () => {
		render(Segment, {});
		const component = screen.getByTestId(testId);
		expect(component).toBeInTheDocument();
	});

	for (const prop of ['base', 'background', 'border', 'gap', 'padding', 'rounded', 'width', 'classes']) {
		it(`Correctly applies the root \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(Segment, { [prop]: value });
			const component = screen.getByTestId(testId);
			expect(component).toHaveClass(value);
		});
	}

	it('should render in the disabled state', () => {
		render(Segment, { disabled: true });
		const component = screen.getByTestId(testId);
		expect(component.dataset.disabled).toBeDefined();
	});

	it('should render in the read-only state', () => {
		render(Segment, { readOnly: true });
		const component = screen.getByTestId(testId);
		expect(component).toHaveClass('pointer-events-none');
	});
});

describe('SegmentItem', () => {
	const testIds = {
		root: 'segment-item',
		itemInput: 'segment-item-input',
	};

	it('Renders the item', () => {
		render(SegmentTest, {});
		const component = screen.getAllByTestId(testIds.root)[0];
		expect(component).toBeInTheDocument();
	});

	it('should render custom child content', () => {
		render(SegmentTest, {});
		const component = screen.getAllByTestId(testIds.root)[0];
		expect(component).toHaveTextContent('left');
	});

	it('should render in the checked state', () => {
		render(SegmentTest, {});
		const component = screen.getAllByTestId(testIds.root)[0];
		const attrDataState = component.getAttribute('data-state');
		expect(attrDataState).toBe('checked');
	});

	it('should render in the unchecked state', () => {
		render(SegmentTest, {});
		const component = screen.getAllByTestId(testIds.root)[1];
		const attrDataState = component.getAttribute('data-state');
		expect(attrDataState).toBe('unchecked');
	});

	it('should render in the disabled state', () => {
		render(SegmentTest, {});
		const component = screen.getAllByTestId('segment-item-input')[3];
		expect(component).toHaveAttribute('disabled');
	});

	for (const prop of ['base', 'classes']) {
		it(`Correctly applies the root \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(SegmentTest, { childProps: { [prop]: value } });
			const component = screen.getAllByTestId(testIds.root)[0];
			expect(component).toHaveClass(value);
		});
	}
});
