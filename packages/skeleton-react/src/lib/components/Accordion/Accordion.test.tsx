import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Accordion } from '$lib/index.js';

describe('Accordion', () => {
	describe('Integration', () => {
		it('Renders the component', () => {
			const values = ['1', '2', '3'];

			const component = render(
				<Accordion>
					{values.map((value) => (
						<Accordion.Item value={value} key={value}>
							<Accordion.Control>control-{value}</Accordion.Control>
							<Accordion.Panel>panel-{value}</Accordion.Panel>
						</Accordion.Item>
					))}
				</Accordion>
			);

			for (const value of values) {
				expect(component.getByText(`control-${value}`)).toBeInTheDocument();
				expect(component.queryByText(`panel-${value}`)).not.toBeInTheDocument();
			}
		});
	});
	describe('Unit', () => {
		describe('<Accordion>', () => {
			const testId = 'accordion';

			it('Renders the component', () => {
				const component = render(<Accordion />);
				expect(component.getByTestId(testId)).toBeInTheDocument();
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
								<Accordion.Control lead="1"></Accordion.Control>
							</Accordion.Item>
						</Accordion>
					);
					expect(component.getByTestId(testId)).toBeInTheDocument();
					expect(component.getByTestId(testId)).toHaveTextContent('1');
				});

				for (const prop of ['leadBase', 'leadClasses']) {
					it(`Correctly applies the \`${prop}\` prop`, () => {
						const value = 'foo';
						const component = render(
							<Accordion>
								<Accordion.Item value="1">
									<Accordion.Control lead="1" {...{ [prop]: value }}></Accordion.Control>
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
						<Accordion iconClosed="closed" iconOpen="open">
							<Accordion.Item value="1">
								<Accordion.Control></Accordion.Control>
							</Accordion.Item>
						</Accordion>
					);
					expect(component.getByTestId(testId)).toHaveTextContent('closed');
				});

				it('Renders `iconOpen` when the panel is open', () => {
					const component = render(
						<Accordion value={['1']} iconClosed="closed" iconOpen="open">
							<Accordion.Item value="1">
								<Accordion.Control></Accordion.Control>
							</Accordion.Item>
						</Accordion>
					);
					expect(component.getByTestId(testId)).toHaveTextContent('open');
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
});
