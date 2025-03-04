import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import { Navigation } from '../../index.js';
import { mockSnippet } from '../../internal/test-utils.js';
import NavRailTest from './NavRail.test.svelte';
import NavBarTest from './NavBar.test.svelte';

describe('NavRail', () => {
	const testIds = {
		root: 'nav-rail',
		header: 'nav-rail-header',
		tiles: 'nav-rail-tiles',
		footer: 'nav-rail-footer',
	};

	it('Renders the component', () => {
		render(Navigation.Rail, {});
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});

	it('Renders all snippets', () => {
		render(Navigation.Rail, {
			header: mockSnippet('headerSnippet'),
			tiles: mockSnippet('tilesSnippet'),
			footer: mockSnippet('footerSnippet'),
		});
		const component = screen.getByTestId(testIds.root);
		expect(component).toHaveTextContent('headerSnippet');
		expect(component).toHaveTextContent('tilesSnippet');
		expect(component).toHaveTextContent('footerSnippet');
	});

	for (const prop of ['base', 'background', 'padding', 'height', 'classes']) {
		it(`Correctly applies the root \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(Navigation.Rail, { [prop]: value });
			const component = screen.getByTestId(testIds.root);
			expect(component).toHaveClass(value);
		});
	}

	it('Renders in collapsed mode', () => {
		const width = 'width';
		const widthExpanded = 'widthExpanded';
		render(Navigation.Rail, {
			width: width,
			widthExpanded: widthExpanded,
			expanded: false,
		});
		const component = screen.getByTestId(testIds.root);
		expect(component).toHaveClass(width);
		expect(component).not.toHaveClass(widthExpanded);
	});

	it('Renders in expanded mode', () => {
		const width = 'width';
		const widthExpanded = 'widthExpanded';
		render(Navigation.Rail, {
			width: width,
			widthExpanded: widthExpanded,
			expanded: true,
		});
		const component = screen.getByTestId(testIds.root);
		expect(component).not.toHaveClass(width);
		expect(component).toHaveClass(widthExpanded);
	});

	for (const prop of ['headerBase', 'headerFlexDirection', 'headerJustify', 'headerItems', 'headerGap', 'headerClasses']) {
		it(`Correctly applies the header \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(Navigation.Rail, {
				header: mockSnippet('header'),
				[prop]: value,
			});
			const component = screen.getByTestId(testIds.header);
			expect(component).toHaveClass(value);
		});
	}

	for (const prop of ['tilesBase', 'tilesFlexDirection', 'tilesJustify', 'tilesItems', 'tilesGap', 'tilesClasses']) {
		it(`Correctly applies the tiles \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(Navigation.Rail, {
				tiles: mockSnippet('tiles'),
				[prop]: value,
			});
			const component = screen.getByTestId(testIds.tiles);
			expect(component).toHaveClass(value);
		});
	}

	for (const prop of ['footerBase', 'footerFlexDirection', 'footerJustify', 'footerItems', 'footerGap', 'footerClasses']) {
		it(`Correctly applies the tiles \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(Navigation.Rail, {
				footer: mockSnippet('footer'),
				[prop]: value,
			});
			const component = screen.getByTestId(testIds.footer);
			expect(component).toHaveClass(value);
		});
	}

	describe('NavTile', () => {
		const testIds = {
			root: 'nav-tile',
			labelExpanded: 'nav-tile-label-expanded',
		};

		it('Renders the component', () => {
			render(NavRailTest, {});
			const component = screen.getAllByTestId(testIds.root)[0];
			expect(component).toBeInTheDocument();
		});

		it('Renders child snippet', () => {
			render(NavRailTest, {});
			const component = screen.getAllByTestId(testIds.root)[0];
			expect(component).toHaveTextContent('HeaderTile');
		});

		for (const prop of ['base', 'width', 'aspect', 'background', 'hover', 'gap', 'rounded']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'bg-green-500';
				render(NavRailTest, { childProps: { [prop]: value } });
				const component = screen.getAllByTestId(testIds.root)[0];
				expect(component).toHaveClass(value);
			});
		}

		it('Renders the labelExpanded in expanded mode', () => {
			const testValue = 'LabelExpanded';
			render(NavRailTest, { rootProps: { expanded: true }, childProps: { labelExpanded: testValue } });
			const component = screen.getAllByTestId(testIds.labelExpanded)[0];
			expect(component).toHaveTextContent(testValue);
		});
	});
});

describe('NavBar', () => {
	const testIds = {
		root: 'nav-bar',
		tileset: 'nav-bar-tileset',
	};

	it('Renders the component', () => {
		render(Navigation.Bar, {});
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});

	it('Renders all snippets', () => {
		render(Navigation.Bar, {
			children: mockSnippet('children'),
		});
		const component = screen.getByTestId(testIds.root);
		expect(component).toHaveTextContent('children');
	});

	for (const prop of ['base', 'background', 'width', 'height', 'padding', 'classes']) {
		it(`Correctly applies the root \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(Navigation.Bar, { [prop]: value });
			const component = screen.getByTestId(testIds.root);
			expect(component).toHaveClass(value);
		});
	}

	for (const prop of ['tilesBase', 'tilesFlexDirection', 'tilesJustify', 'tilesItems', 'tilesGap', 'tilesClasses']) {
		it(`Correctly applies the tileset \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(Navigation.Bar, { children: mockSnippet('children'), [prop]: value });
			const component = screen.getByTestId(testIds.tileset);
			expect(component).toHaveClass(value);
		});
	}

	describe('NavTile', () => {
		const testId = 'nav-tile';

		it('Renders the component', () => {
			render(NavBarTest, {});
			const component = screen.getAllByTestId(testId)[0];
			expect(component).toBeInTheDocument();
		});

		it('Renders child snippet', () => {
			render(NavBarTest, {});
			const component = screen.getAllByTestId(testId)[0];
			expect(component).toHaveTextContent('TileOne');
		});

		for (const prop of ['base', 'width', 'active', 'padding', 'gap', 'rounded', 'classes']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'bg-green-500';
				render(NavBarTest, { childProps: { [prop]: value } });
				const component = screen.getAllByTestId(testId)[0];
				expect(component).toHaveClass(value);
			});
		}
	});
});
