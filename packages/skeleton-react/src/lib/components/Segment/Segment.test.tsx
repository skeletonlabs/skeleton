import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { Segment } from './Segment.js';

// Segment ---

describe('<Segment>', () => {
	it('should render the component', () => {
		const { getByTestId } = render(
			<Segment name="align" value="0">
				<Segment.Item value="0">TestItem1</Segment.Item>
			</Segment>
		);
		const component = getByTestId('segment');
		expect(component).toBeInTheDocument();
	});

	it('should allow you to pass arbitrary classses', () => {
		const testClasses = 'bg-green-500';
		const { getByTestId } = render(
			<Segment name="align" value="0" classes={testClasses}>
				<Segment.Item value="0">TestItem1</Segment.Item>
			</Segment>
		);
		const component = getByTestId('segment');
		expect(component.getAttribute('class')).toContain(testClasses);
	});

	it('should render in the disabled state', () => {
		const { getByTestId } = render(
			<Segment name="align" value="0" disabled>
				<Segment.Item value="0">TestItem1</Segment.Item>
			</Segment>
		);
		const component = getByTestId('segment');
		expect(component.dataset.disabled).toBeDefined();
	});

	it('should render in the read-only state', () => {
		const { getByTestId } = render(
			<Segment name="align" value="0" readOnly>
				<Segment.Item value="0">TestItem1</Segment.Item>
			</Segment>
		);
		const component = getByTestId('segment');
		expect(component).toHaveClass('pointer-events-none');
	});

	it('should render base classes on root', () => {
		const testClass = 'bg-green-500';
		const { getByTestId } = render(
			<Segment name="align" value="0" base={testClass}>
				<Segment.Item value="0">TestItem1</Segment.Item>
			</Segment>
		);
		const component = getByTestId('segment');
		expect(component).toHaveClass(testClass);
	});

	it('should render arbitrary classes on root', () => {
		const testClass = 'bg-green-500';
		const { getByTestId } = render(
			<Segment name="align" value="0" classes={testClass}>
				<Segment.Item value="0">TestItem1</Segment.Item>
			</Segment>
		);
		const component = getByTestId('segment');
		expect(component).toHaveClass(testClass);
	});

	it('should have semantic link', () => {
		const { getByTestId } = render(
			<Segment name="align" value="0" labelledby="align-label">
				<Segment.Item value="0">TestItem1</Segment.Item>
			</Segment>
		);
		const component = getByTestId('segment');
		expect(component).toHaveAttribute('aria-labelledby', 'align-label');
	});
});

// Segment Item ---

describe('<Segment.Item>', () => {
	it('should render the component', () => {
		const { getByTestId } = render(
			<Segment name="align" value="0">
				<Segment.Item value="0">TestItem1</Segment.Item>
			</Segment>
		);
		const component = getByTestId('segment-item');
		expect(component).toBeInTheDocument();
	});

	it('should render custom child content', () => {
		const testTextContent = 'testTextContent';
		const { getByTestId } = render(
			<Segment name="align" value="0">
				<Segment.Item value="0">{testTextContent}</Segment.Item>
			</Segment>
		);
		const component = getByTestId('segment-item');
		expect(component).toHaveTextContent(testTextContent);
	});

	it('should render in the unchecked state', () => {
		const { getByTestId } = render(
			<Segment name="align" value="1">
				<Segment.Item value="0">TestItem1</Segment.Item>
			</Segment>
		);
		const component = getByTestId('segment-item');
		const checked = component.getAttribute('data-state');
		expect(checked).toBe('unchecked');
	});

	it('should render in the checked state', () => {
		const { getByTestId } = render(
			<Segment name="align" value="0">
				<Segment.Item value="0">TestItem1</Segment.Item>
			</Segment>
		);
		const component = getByTestId('segment-item');
		const checked = component.getAttribute('data-state');
		expect(checked).toBe('checked');
	});

	it('should render in the disabled state', () => {
		const { getByTestId } = render(
			<Segment name="align" value="0">
				<Segment.Item value="0" disabled>
					TestItem1
				</Segment.Item>
			</Segment>
		);
		const component = getByTestId('segment-item-input');
		expect(component).toHaveAttribute('disabled');
	});

	it('should render base classes on root', () => {
		const testClass = 'bg-green-500';
		const { getByTestId } = render(
			<Segment name="align" value="0">
				<Segment.Item value="0" base={testClass}>
					TestItem1
				</Segment.Item>
			</Segment>
		);
		const component = getByTestId('segment-item');
		expect(component).toHaveClass(testClass);
	});

	it('should render arbitrary classes on root', () => {
		const testClass = 'bg-green-500';
		const { getByTestId } = render(
			<Segment name="align" value="0">
				<Segment.Item value="0" classes={testClass}>
					TestItem1
				</Segment.Item>
			</Segment>
		);
		const component = getByTestId('segment-item');
		expect(component).toHaveClass(testClass);
	});
});
