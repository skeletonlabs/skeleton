import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { AppBar } from '../../index.js';

describe('AppBar', () => {
	describe('<AppBar>', () => {
		const testId = 'app-bar';
		it('Renders the component', () => {
			const component = render(<AppBar></AppBar>);
			expect(component.getByTestId(testId)).toBeInTheDocument();
		});

		it('Renders the children', () => {
			const component = render(
				<AppBar>
					<div data-testid="child"></div>
				</AppBar>,
			);
			expect(component.getByTestId('child')).toBeInTheDocument();
		});

		for (const prop of ['base', 'background', 'spaceY', 'border', 'padding', 'shadow', 'classes']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				const component = render(<AppBar {...{ [prop]: value }} />);
				expect(component.getByTestId(testId)).toHaveClass(value);
			});
		}
	});

	describe('<AppBar.Toolbar>', () => {
		const testId = 'app-bar-toolbar';

		it('Renders the component', () => {
			const component = render(<AppBar.Toolbar></AppBar.Toolbar>);
			expect(component.getByTestId(testId)).toBeInTheDocument();
		});

		it('Renders the children', () => {
			const component = render(
				<AppBar.Toolbar>
					<div data-testid="child"></div>
				</AppBar.Toolbar>,
			);
			expect(component.getByTestId('child')).toBeInTheDocument();
		});

		for (const prop of ['base', 'gridCols', 'gap', 'classes']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				const component = render(<AppBar.Toolbar {...{ [prop]: value }} />);
				expect(component.getByTestId(testId)).toHaveClass(value);
			});
		}
	});

	describe('<AppBar.ToolbarLead>', () => {
		const testId = 'app-bar-toolbar-lead';

		it('Renders the component', () => {
			const component = render(
				<AppBar>
					<AppBar.Toolbar>
						<AppBar.ToolbarLead></AppBar.ToolbarLead>
					</AppBar.Toolbar>
				</AppBar>,
			);
			expect(component.getByTestId(testId)).toBeInTheDocument();
		});

		it('Renders the children', () => {
			const component = render(
				<AppBar>
					<AppBar.Toolbar>
						<AppBar.ToolbarLead>
							<div data-testid="child"></div>
						</AppBar.ToolbarLead>
					</AppBar.Toolbar>
				</AppBar>,
			);
			expect(component.getByTestId('child')).toBeInTheDocument();
		});

		for (const prop of ['base', 'spaceX', 'padding', 'classes']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				const component = render(<AppBar.ToolbarLead {...{ [prop]: value }} />);
				expect(component.getByTestId(testId)).toHaveClass(value);
			});
		}
	});

	describe('<AppBar.ToolbarCenter>', () => {
		const testId = 'app-bar-toolbar-center';

		it('Renders the component', () => {
			const component = render(
				<AppBar>
					<AppBar.Toolbar>
						<AppBar.ToolbarCenter></AppBar.ToolbarCenter>
					</AppBar.Toolbar>
				</AppBar>,
			);
			expect(component.getByTestId(testId)).toBeInTheDocument();
		});

		it('Renders the children', () => {
			const component = render(
				<AppBar>
					<AppBar.Toolbar>
						<AppBar.ToolbarCenter>
							<div data-testid="child"></div>
						</AppBar.ToolbarCenter>
					</AppBar.Toolbar>
				</AppBar>,
			);
			expect(component.getByTestId('child')).toBeInTheDocument();
		});

		for (const prop of ['base', 'align', 'padding', 'classes']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				const component = render(<AppBar.ToolbarCenter {...{ [prop]: value }} />);
				expect(component.getByTestId(testId)).toHaveClass(value);
			});
		}
	});

	describe('<AppBar.ToolbarTrail>', () => {
		const testId = 'app-bar-toolbar-trail';

		it('Renders the component', () => {
			const component = render(
				<AppBar>
					<AppBar.Toolbar>
						<AppBar.ToolbarTrail></AppBar.ToolbarTrail>
					</AppBar.Toolbar>
				</AppBar>,
			);
			expect(component.getByTestId(testId)).toBeInTheDocument();
		});

		it('Renders the children', () => {
			const component = render(
				<AppBar>
					<AppBar.Toolbar>
						<AppBar.ToolbarTrail>
							<div data-testid="child"></div>
						</AppBar.ToolbarTrail>
					</AppBar.Toolbar>
				</AppBar>,
			);
			expect(component.getByTestId('child')).toBeInTheDocument();
		});

		for (const prop of ['base', 'spaceX', 'padding', 'classes']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				const component = render(<AppBar.ToolbarTrail {...{ [prop]: value }} />);
				expect(component.getByTestId(testId)).toHaveClass(value);
			});
		}
	});

	describe('<AppBar.Headline>', () => {
		const testId = 'app-bar-headline';

		it('Renders the component', () => {
			const component = render(
				<AppBar>
					<AppBar.Headline></AppBar.Headline>
				</AppBar>,
			);
			expect(component.getByTestId(testId)).toBeInTheDocument();
		});

		it('Renders the children', () => {
			const component = render(
				<AppBar>
					<AppBar.Headline>
						<div data-testid="child"></div>
					</AppBar.Headline>
				</AppBar>,
			);
			expect(component.getByTestId('child')).toBeInTheDocument();
		});

		for (const prop of ['base', 'classes']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				const component = render(<AppBar.Headline {...{ [prop]: value }} />);
				expect(component.getByTestId(testId)).toHaveClass(value);
			});
		}
	});
});
