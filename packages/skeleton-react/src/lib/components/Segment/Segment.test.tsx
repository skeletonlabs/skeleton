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

	it('should render children', () => {
		const testTextContent = 'testTextContent';
		const { getByTestId } = render(
			<Segment name="align" value="0">
				<Segment.Item value="0">{testTextContent}</Segment.Item>
			</Segment>
		);
		const component = getByTestId('segment');
		expect(component).toHaveTextContent(testTextContent);
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

	it('should render children', () => {
		const testTextContent = 'testTextContent';
		const { getByTestId } = render(
			<Segment name="align" value="0">
				<Segment.Item value="0">{testTextContent}</Segment.Item>
			</Segment>
		);
		const component = getByTestId('segment-item');
		expect(component).toHaveTextContent(testTextContent);
	});

	// FIXME: resolve after Zag migration

	// it('should render the component in the unchecked state', () => {
	// 	const { getByTestId } = render(
	// 		<Segment.Item name="bar" value="bar">
	// 			Foo
	// 		</Segment.Item>
	// 	);
	// 	const component = getByTestId('segment-item');
	// 	const ariaSelected = component.getAttribute('aria-selected');
	// 	expect(ariaSelected).toBeFalsy;
	// });

	// it('should render the component in the checked state', () => {
	// 	const { getByTestId } = render(
	// 		<Segment.Item name="foo" value="foo">
	// 			Foo
	// 		</Segment.Item>
	// 	);
	// 	const component = getByTestId('segment-item');
	// 	const ariaSelected = component.getAttribute('aria-selected');
	// 	expect(ariaSelected).toBeTruthy;
	// });

	// it('should render the component in the disabled state', () => {
	// 	const { getByTestId } = render(
	// 		<Segment.Item name="test" value="foo" disabled>
	// 			Foo
	// 		</Segment.Item>
	// 	);
	// 	const component = getByTestId('segment-item');
	// 	expect(component).toHaveAttribute('disabled');
	// });
});
