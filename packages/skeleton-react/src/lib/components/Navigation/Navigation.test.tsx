import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Nav } from './Navigation.js';

describe('Navigation', () => {
	describe('<Nav.Rail>', () => {
		const testId = 'nav-rail';

		it('Renders the component', () => {
			const { getByTestId } = render(<Nav.Rail></Nav.Rail>);
			expect(getByTestId(testId)).toBeInTheDocument();
		});

		it('Renders the children', () => {
			const { getByTestId } = render(
				<Nav.Rail>
					<div data-testid="child"></div>
				</Nav.Rail>
			);
			expect(getByTestId('child')).toBeInTheDocument();
		});

		for (const prop of ['base', 'background', 'padding', 'height', 'classes']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				const { getByTestId } = render(<Nav.Rail {...{ [prop]: value }} />);
				expect(getByTestId(testId)).toHaveClass(value);
			});
		}

		it('Correctly applies the `width` or `widthExpanded` prop based on the `expanded` prop', () => {
			const width = 'width';
			const widthExpanded = 'widthExpanded';
			const { getByTestId, rerender } = render(<Nav.Rail width={width} widthExpanded={widthExpanded} expanded={false}></Nav.Rail>);
			expect(getByTestId(testId)).toHaveClass(width);
			expect(getByTestId(testId)).not.toHaveClass(widthExpanded);
			rerender(<Nav.Rail width={width} widthExpanded={widthExpanded} expanded={true}></Nav.Rail>);
			expect(getByTestId(testId)).not.toHaveClass(width);
			expect(getByTestId(testId)).toHaveClass(widthExpanded);
		});

		describe('Header', () => {
			const testId = 'nav-rail-header';

			it('Renders the component', () => {
				const { getByTestId } = render(<Nav.Rail header="header"></Nav.Rail>);
				expect(getByTestId(testId)).toBeInTheDocument();
				expect(getByTestId(testId)).toHaveTextContent('header');
			});

			for (const prop of ['headerBase', 'headerFlexDirection', 'headerJustify', 'headerItems', 'headerGap', 'headerClasses']) {
				it(`Correctly applies the \`${prop}\` prop`, () => {
					const value = 'foo';
					const { getByTestId } = render(<Nav.Rail header="header" {...{ [prop]: value }}></Nav.Rail>);
					expect(getByTestId(testId)).toHaveClass(value);
				});
			}
		});

		describe('Tiles', () => {
			const testId = 'nav-rail-tiles';

			it('Renders the component', () => {
				const { getByTestId } = render(<Nav.Rail>tiles</Nav.Rail>);
				expect(getByTestId(testId)).toBeInTheDocument();
				expect(getByTestId(testId)).toHaveTextContent('tiles');
			});

			for (const prop of ['tilesBase', 'tilesFlexDirection', 'tilesJustify', 'tilesItems', 'tilesGap', 'tilesClasses']) {
				it(`Correctly applies the \`${prop}\` prop`, () => {
					const value = 'foo';
					const { getByTestId } = render(<Nav.Rail {...{ [prop]: value }}>tiles</Nav.Rail>);
					expect(getByTestId(testId)).toHaveClass(value);
				});
			}
		});

		describe('Footer', () => {
			const testId = 'nav-rail-footer';

			it('Renders the component', () => {
				const { getByTestId } = render(<Nav.Rail footer="footer"></Nav.Rail>);
				expect(getByTestId(testId)).toBeInTheDocument();
				expect(getByTestId(testId)).toHaveTextContent('footer');
			});

			for (const prop of ['footerBase', 'footerFlexDirection', 'footerJustify', 'footerItems', 'footerGap', 'footerClasses']) {
				it(`Correctly applies the \`${prop}\` prop`, () => {
					const value = 'foo';
					const { getByTestId } = render(<Nav.Rail footer="footer" {...{ [prop]: value }} />);
					expect(getByTestId(testId)).toHaveClass(value);
				});
			}
		});
	});

	describe('<Nav.Bar>', () => {
		const testId = 'nav-bar';

		it('Renders the component', () => {
			const { getByTestId } = render(<Nav.Bar></Nav.Bar>);
			expect(getByTestId(testId)).toBeInTheDocument();
		});

		it('Renders the children', () => {
			const { getByTestId } = render(
				<Nav.Bar>
					<div data-testid="child"></div>
				</Nav.Bar>
			);
			expect(getByTestId('child')).toBeInTheDocument();
		});

		for (const prop of ['base', 'background', 'width', 'height', 'padding', 'classes']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				const { getByTestId } = render(<Nav.Bar {...{ [prop]: value }} />);
				expect(getByTestId(testId)).toHaveClass(value);
			});
		}
	});

	describe('<Nav.Tile>', () => {
		const testId = 'nav-tile';

		it('Renders the component', () => {
			const { getByTestId } = render(
				<Nav.Rail>
					<Nav.Tile></Nav.Tile>
				</Nav.Rail>
			);
			expect(getByTestId(testId)).toBeInTheDocument();
		});

		it('Renders the children', () => {
			const { getByTestId } = render(
				<Nav.Rail>
					<Nav.Tile>
						<div data-testid="child"></div>
					</Nav.Tile>
				</Nav.Rail>
			);
			expect(getByTestId('child')).toBeInTheDocument();
		});

		for (const prop of ['base', 'width', 'aspect', 'background', 'hover', 'gap', 'rounded']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				const { getByTestId } = render(<Nav.Tile {...{ [prop]: value }} />);
				expect(getByTestId(testId)).toHaveClass(value);
			});
		}

		it('Correctly applies the `padding` or `expandedPadding` prop based on the `expanded` prop', () => {
			const padding = 'padding';
			const expandedPadding = 'expandedPadding';
			const { getByTestId, rerender } = render(
				<Nav.Rail expanded={false}>
					<Nav.Tile padding={padding} expandedPadding={expandedPadding}></Nav.Tile>);
				</Nav.Rail>
			);
			expect(getByTestId(testId)).toHaveClass(padding);
			expect(getByTestId(testId)).not.toHaveClass(expandedPadding);
			rerender(
				<Nav.Rail expanded={true}>
					<Nav.Tile padding={padding} expandedPadding={expandedPadding}></Nav.Tile>);
				</Nav.Rail>
			);
			expect(getByTestId(testId)).not.toHaveClass(padding);
			expect(getByTestId(testId)).toHaveClass(expandedPadding);
		});

		it('Correctly applies the `gap` or `expandedGap` prop based on the `expanded` prop', () => {
			const gap = 'gap';
			const expandedGap = 'expandedGap';
			const { getByTestId, rerender } = render(
				<Nav.Rail expanded={false}>
					<Nav.Tile gap={gap} expandedGap={expandedGap}></Nav.Tile>);
				</Nav.Rail>
			);
			expect(getByTestId(testId)).toHaveClass(gap);
			expect(getByTestId(testId)).not.toHaveClass(expandedGap);
			rerender(
				<Nav.Rail expanded={true}>
					<Nav.Tile gap={gap} expandedGap={expandedGap}></Nav.Tile>);
				</Nav.Rail>
			);
			expect(getByTestId(testId)).not.toHaveClass(gap);
			expect(getByTestId(testId)).toHaveClass(expandedGap);
		});

		it('Correctly applies the `classes` or `expandedClasses` prop based on the `expanded` prop', () => {
			const classes = 'classes';
			const expandedClasses = 'expandedClasses';
			const { getByTestId, rerender } = render(
				<Nav.Rail expanded={false}>
					<Nav.Tile classes={classes} expandedClasses={expandedClasses}></Nav.Tile>);
				</Nav.Rail>
			);
			expect(getByTestId(testId)).toHaveClass(classes);
			expect(getByTestId(testId)).not.toHaveClass(expandedClasses);
			rerender(
				<Nav.Rail expanded={true}>
					<Nav.Tile classes={classes} expandedClasses={expandedClasses}></Nav.Tile>);
				</Nav.Rail>
			);
			expect(getByTestId(testId)).not.toHaveClass(classes);
			expect(getByTestId(testId)).toHaveClass(expandedClasses);
		});

		it('Correctly applies the `active` prop based on wether the tile is active', async () => {
			const active = 'active';
			const { getByTestId, rerender } = render(
				<Nav.Rail>
					<Nav.Tile active={active} selected={false}></Nav.Tile>
				</Nav.Rail>
			);
			expect(getByTestId(testId)).not.toHaveClass('active');
			rerender(
				<Nav.Rail>
					<Nav.Tile active={active} selected={true}></Nav.Tile>
				</Nav.Rail>
			);
			expect(getByTestId(testId)).toHaveClass('active');
		});

		describe('Label', () => {
			const testId = 'nav-tile-label';

			it('Renders the component', () => {
				const { getByTestId } = render(
					<Nav.Rail>
						<Nav.Tile label="label"></Nav.Tile>
					</Nav.Rail>
				);
				expect(getByTestId(testId)).toBeInTheDocument();
				expect(getByTestId(testId)).toHaveTextContent('label');
			});

			for (const prop of ['labelBase', 'labelClasses']) {
				it(`Correctly applies the \`${prop}\` prop`, () => {
					const value = 'foo';
					const { getByTestId } = render(
						<Nav.Rail>
							<Nav.Tile label="label" {...{ [prop]: value }}></Nav.Tile>
						</Nav.Rail>
					);
					expect(getByTestId(testId)).toHaveClass(value);
				});
			}
		});

		describe('LabelExpanded', () => {
			const testId = 'nav-tile-label-expanded';

			it('Renders the component', () => {
				const { getByTestId } = render(
					<Nav.Rail expanded={true}>
						<Nav.Tile labelExpanded="labelExpanded"></Nav.Tile>
					</Nav.Rail>
				);
				expect(getByTestId(testId)).toBeInTheDocument();
				expect(getByTestId(testId)).toHaveTextContent('labelExpanded');
			});

			for (const prop of ['labelExpandedBase', 'labelExpandedClasses']) {
				it(`Correctly applies the \`${prop}\` prop`, () => {
					const value = 'foo';
					const { getByTestId } = render(
						<Nav.Rail expanded={true}>
							<Nav.Tile labelExpanded="labelExpanded" {...{ [prop]: value }}></Nav.Tile>
						</Nav.Rail>
					);
					expect(getByTestId(testId)).toHaveClass(value);
				});
			}
		});
	});
});
