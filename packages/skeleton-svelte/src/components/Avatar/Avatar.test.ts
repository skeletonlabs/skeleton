import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import { mockSnippet } from '../../internal/test-utils.js';
import { Avatar } from '../../index.js';

describe('Avatar', () => {
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
		render(Avatar, { src: test.src, name: test.name });
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});

	for (const prop of ['base', 'background', 'size', 'font', 'border', 'rounded', 'shadow', 'classes']) {
		it(`Correctly applies the \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(Avatar, { name: test.name, [prop]: value });
			const component = screen.getByTestId(testIds.root);
			expect(component).toHaveClass(value);
		});
	}

	describe('Image', () => {
		it('Renders the image element', () => {
			render(Avatar, { src: test.src, name: test.name });
			const component = screen.getByTestId(testIds.image);
			expect(component).toBeInTheDocument();
		});

		for (const prop of ['imageBase', 'imageClasses']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				render(Avatar, { src: test.src, name: test.name, [prop]: value });
				const component = screen.getByTestId(testIds.image);
				expect(component).toHaveClass(value);
			});
		}

		it('Correctly applies the `style` prop', () => {
			const value = 'background-color: rgb(0, 128, 0); opacity: 0.5;';
			render(Avatar, { src: test.src, name: test.name, style: value });
			const component = screen.getByTestId(testIds.image);
			expect(component).toHaveStyle(value);
		});
	});

	describe('Fallback', () => {
		it('Renders fallback initials', () => {
			render(Avatar, { name: test.name });
			const component = screen.getByTestId(testIds.fallback);
			expect(component).toHaveTextContent(test.initials);
		});

		it('Renders children snippet', () => {
			const testValue = 'childrenSnippet';
			render(Avatar, { name: test.name, children: mockSnippet(testValue) });
			const component = screen.getByTestId(testIds.fallback);
			expect(component).toHaveTextContent(testValue);
		});

		it('Correctly applies the `fallbackStyle` prop', () => {
			const value = 'background-color: rgb(0, 128, 0); opacity: 0.5;';
			render(Avatar, { name: test.name, fallbackStyle: value });
			const component = screen.getByTestId(testIds.fallback);
			expect(component).toHaveStyle(value);
		});
	});
});
