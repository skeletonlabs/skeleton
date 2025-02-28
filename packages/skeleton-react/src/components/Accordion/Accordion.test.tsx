import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Accordion } from '../../index.js';

describe('Accordion', () => {
	describe('<Accordion>', () => {
		const testId = 'accordion';

		it('Renders the component', () => {
			const component = render(<Accordion></Accordion>);
			expect(component.getByTestId(testId)).toBeInTheDocument();
		});

		it('Renders the children', () => {
			const component = render(
				<Accordion>
					<div data-testid="children"></div>
				</Accordion>
			);
			expect(component.getByTestId('children')).toBeInTheDocument();
		});

		for (const prop of ['base', 'padding', 'spaceY', 'rounded', 'width', 'classes']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				const component = render(<Accordion {...{ [prop]: value }} />);
				expect(component.getByTestId(testId)).toHaveClass(value);
			});
		}
	});

	describe('<Accordion.Item>', () => {
		const testId = 'accordion-item';

		it('Renders the component', () => {
			const component = render(
				<Accordion>
					<Accordion.Item value="1"></Accordion.Item>
				</Accordion>
			);
			expect(component.getByTestId(testId)).toBeInTheDocument();
		});

		it('Renders the children', () => {
			const component = render(
				<Accordion>
					<Accordion.Item value="1">
						<div data-testid="children"></div>
					</Accordion.Item>
				</Accordion>
			);
			expect(component.getByTestId('children')).toBeInTheDocument();
		});

		for (const prop of ['base', 'spaceY', 'classes']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				const component = render(
					<Accordion>
						<Accordion.Item value="1" {...{ [prop]: value }}></Accordion.Item>
					</Accordion>
				);
				expect(component.getByTestId(testId)).toHaveClass(value);
			});
		}
	});

	describe('<Accordion.Control>', () => {
		const testId = 'accordion-control';

		it('Renders the component', () => {
			const component = render(
				<Accordion>
					<Accordion.Item value="1">
						<Accordion.Control></Accordion.Control>
					</Accordion.Item>
				</Accordion>
			);
			expect(component.getByTestId(testId)).toBeInTheDocument();
		});

		it('Renders the children', () => {
			const component = render(
				<Accordion>
					<Accordion.Item value="1">
						<Accordion.Control>
							<div data-testid="children"></div>
						</Accordion.Control>
					</Accordion.Item>
				</Accordion>
			);
			expect(component.getByTestId('children')).toBeInTheDocument();
		});

		for (const prop of ['base', 'padding', 'rounded', 'classes']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				const component = render(
					<Accordion>
						<Accordion.Item value="1">
							<Accordion.Control {...{ [prop]: value }}></Accordion.Control>
						</Accordion.Item>
					</Accordion>
				);
				expect(component.getByTestId(testId)).toHaveClass(value);
			});
		}

		describe('Lead', () => {
			const testId = 'accordion-lead';

			it('Renders the subcomponent', () => {
				const component = render(
					<Accordion>
						<Accordion.Item value="1">
							<Accordion.Control lead="lead"></Accordion.Control>
						</Accordion.Item>
					</Accordion>
				);
				expect(component.getByTestId(testId)).toBeInTheDocument();
				expect(component.getByTestId(testId)).toHaveTextContent('lead');
			});

			for (const prop of ['leadBase', 'leadClasses']) {
				it(`Correctly applies the \`${prop}\` prop`, () => {
					const value = 'foo';
					const component = render(
						<Accordion>
							<Accordion.Item value="1">
								<Accordion.Control lead="lead" {...{ [prop]: value }}></Accordion.Control>
							</Accordion.Item>
						</Accordion>
					);
					expect(component.getByTestId(testId)).toHaveClass(value);
				});
			}
		});

		describe('Content', () => {
			const testId = 'accordion-content';

			it('Renders the subcomponent', () => {
				const component = render(
					<Accordion>
						<Accordion.Item value="1">
							<Accordion.Control></Accordion.Control>
							<Accordion.Panel></Accordion.Panel>
						</Accordion.Item>
					</Accordion>
				);
				expect(component.getByTestId(testId)).toBeInTheDocument();
			});

			for (const prop of ['contentBase', 'contentClasses']) {
				it(`Correctly applies the \`${prop}\` prop`, () => {
					const value = 'foo';
					const component = render(
						<Accordion>
							<Accordion.Item value="1">
								<Accordion.Control {...{ [prop]: value }}></Accordion.Control>
							</Accordion.Item>
						</Accordion>
					);
					expect(component.getByTestId(testId)).toHaveClass(value);
				});
			}
		});

		describe('Indicator', () => {
			const testId = 'accordion-indicator';

			it('Renders the subcomponent', () => {
				const component = render(
					<Accordion>
						<Accordion.Item value="1">
							<Accordion.Control></Accordion.Control>
						</Accordion.Item>
					</Accordion>
				);
				expect(component.getByTestId(testId)).toBeInTheDocument();
			});

			it('Renders `iconClosed` when the panel is closed', () => {
				const component = render(
					<Accordion iconClosed="iconClosed" iconOpen="iconOpen">
						<Accordion.Item value="1">
							<Accordion.Control></Accordion.Control>
						</Accordion.Item>
					</Accordion>
				);
				expect(component.getByTestId(testId)).toHaveTextContent('iconClosed');
			});

			it('Renders `iconOpen` when the panel is open', () => {
				const component = render(
					<Accordion value={['1']} iconClosed="iconClosed" iconOpen="iconOpen">
						<Accordion.Item value="1">
							<Accordion.Control></Accordion.Control>
						</Accordion.Item>
					</Accordion>
				);
				expect(component.getByTestId(testId)).toHaveTextContent('iconOpen');
			});

			for (const prop of ['indicatorBase', 'indicatorClasses']) {
				it(`Correctly applies the \`${prop}\` prop`, () => {
					const value = 'foo';
					const component = render(
						<Accordion>
							<Accordion.Item value="1">
								<Accordion.Control {...{ [prop]: value }}></Accordion.Control>
							</Accordion.Item>
						</Accordion>
					);
					expect(component.getByTestId(testId)).toHaveClass(value);
				});
			}
		});
	});

	describe('<Accordion.Panel>', () => {
		it('Renders the component', () => {
			const component = render(
				<Accordion value={['1']}>
					<Accordion.Item value="1">
						<Accordion.Panel></Accordion.Panel>
					</Accordion.Item>
				</Accordion>
			);
			expect(component.getByTestId('accordion-panel')).toBeInTheDocument();
		});

		for (const prop of ['base', 'padding', 'rounded', 'classes']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				const component = render(
					<Accordion value={['1']}>
						<Accordion.Item value="1">
							<Accordion.Panel {...{ [prop]: value }}></Accordion.Panel>
						</Accordion.Item>
					</Accordion>
				);
				expect(component.getByTestId('accordion-panel')).toHaveClass(value);
			});
		}
	});
});
