import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import { mockSnippet } from '$lib/internal/test-utils.js';
import { AppBar } from '$lib/index.js';

describe('AppBar', () => {
	const testId = 'app-bar';
	const testIdToolbar = `${testId}-toolbar`;
	const testIdHeadline = `${testId}-headline`;

	it('Renders the component', () => {
		render(AppBar, {});
		const component = screen.getByTestId(testId);
		expect(component).toBeInTheDocument();
	});

	it('Renders all snippets', () => {
		render(AppBar, {
			children: mockSnippet('childrenSnippet'),
			lead: mockSnippet('leadSnippet'),
			trail: mockSnippet('trailSnippet'),
			headline: mockSnippet('headlineSnippet')
		});
		const component = screen.getByTestId(testId);
		expect(component).toHaveTextContent('childrenSnippet');
		expect(component).toHaveTextContent('leadSnippet');
		expect(component).toHaveTextContent('trailSnippet');
		expect(component).toHaveTextContent('headlineSnippet');
	});

	for (const prop of ['base', 'background', 'spaceY', 'border', 'padding', 'shadow', 'classes']) {
		it(`Correctly applies the root \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(AppBar, { [prop]: value });
			const component = screen.getByTestId(testId);
			expect(component).toHaveClass(value);
		});
	}

	for (const prop of ['toolbarBase', 'toolbarGridCols', 'toolbarGap', 'toolbarClasses']) {
		it(`Correctly applies toolbar \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(AppBar, { [prop]: value, lead: mockSnippet('Skeleton') });
			const component = screen.getByTestId(testIdToolbar);
			expect(component).toHaveClass(value);
		});
	}

	for (const prop of ['headlineBase', 'headlineClasses']) {
		it(`Correctly applies headline \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(AppBar, { [prop]: value, headline: mockSnippet('Skeleton') });
			const component = screen.getByTestId(testIdHeadline);
			expect(component).toHaveClass(value);
		});
	}
});
