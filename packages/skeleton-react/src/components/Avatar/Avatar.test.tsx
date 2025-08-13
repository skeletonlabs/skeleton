import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Avatar } from '../../index.js';

describe('Avatar', () => {
	// const testId = 'avatar';
	const testIds = {
		root: 'avatar',
		image: 'avatar-image',
		fallback: 'avatar-fallback'
	};
	const test = {
		src: 'https://picsum.photos/100',
		name: 'John Doe',
		initials: 'JD'
	};

	it('Renders the component', () => {
		const component = render(<Avatar name={test.name}></Avatar>);
		expect(component.getByTestId(testIds.root)).toBeInTheDocument();
	});

	it('Renders the children', () => {
		const component = render(
			<Avatar name={test.name}>
				<div data-testid="child"></div>
			</Avatar>
		);
		expect(component.getByTestId('child')).toBeInTheDocument();
	});

	for (const prop of ['base', 'background', 'size', 'font', 'border', 'rounded', 'shadow', 'classes']) {
		it(`Correctly applies the \`${prop}\` prop`, () => {
			const value = 'foo';
			const component = render(<Avatar name={test.name} {...{ [prop]: value }} />);
			expect(component.getByTestId(testIds.root)).toHaveClass(value);
		});
	}

	describe('Image', () => {
		// const testId = 'avatar-image';

		it('Renders the component', () => {
			const component = render(<Avatar name={test.name} src="src"></Avatar>);
			expect(component.getByTestId(testIds.image)).toBeInTheDocument();
		});

		for (const prop of ['imageBase', 'imageClasses']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				const component = render(<Avatar name={test.name} src="src" {...{ [prop]: value }} />);
				expect(component.getByTestId(testIds.image)).toHaveClass(value);
			});
		}
	});

	describe('Fallback', () => {
		// const testId = 'avatar-fallback';

		it('Renders the component', () => {
			const component = render(<Avatar name={test.name}></Avatar>);
			expect(component.getByTestId(testIds.fallback)).toBeInTheDocument();
		});

		it('Renders the children', () => {
			const component = render(
				<Avatar name={test.name}>
					<div data-testid="child"></div>
				</Avatar>
			);
			expect(component.getByTestId('child')).toBeInTheDocument();
		});

		it('Renders initials of `name` prop if no children provided', () => {
			const component = render(<Avatar name={test.name}></Avatar>);
			expect(component.getByTestId(testIds.fallback)).toHaveTextContent(test.initials);
		});
	});
});
