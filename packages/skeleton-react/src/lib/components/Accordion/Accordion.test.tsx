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
		});
	});
});

// describe('<Accordion>', () => {
// 	it('should render the component', () => {
// 		const { getByTestId } = render(<Accordion />);
// 		expect(getByTestId('accordion')).toBeInTheDocument();
// 	});

// 	it('should render with `multiple` prop enabled', () => {
// 		const { getByTestId } = render(<Accordion multiple />);
// 		expect(getByTestId('accordion')).toBeInTheDocument();
// 	});

// 	// FIXME: broken during Zag migration
// 	// it('should allow for children', () => {
// 	// 	const value = 'foobar';
// 	// 	const { getByTestId } = render(<Accordion>{value}</Accordion>);
// 	// 	expect(getByTestId('accordion').innerHTML).toContain(value);
// 	// });

// 	it('should allow you to set the `base` style prop', () => {
// 		const tailwindClasses = 'bg-red-500';
// 		const { getByTestId } = render(<Accordion base={tailwindClasses} />);
// 		expect(getByTestId('accordion')).toHaveClass(tailwindClasses);
// 	});

// 	it('should allow you to set the `classes` style prop', () => {
// 		const tailwindClasses = 'bg-green-500';
// 		const { getByTestId } = render(<Accordion classes={tailwindClasses} />);
// 		expect(getByTestId('accordion')).toHaveClass(tailwindClasses);
// 	});
// });

// // Accordion.Item ---

// describe('<Accordion.Item>', () => {
// 	it('should render the component', () => {
// 		const { getByTestId } = render(
// 			<Accordion value={['testItem1']}>
// 				<Accordion.Item value="testItem1">TestItem1</Accordion.Item>
// 			</Accordion>
// 		);
// 		expect(getByTestId('accordion-item')).toBeInTheDocument();
// 	});

// 	it('should allow for children', () => {
// 		const value = 'foobar';
// 		const { getByTestId } = render(
// 			<Accordion value={['testItem1']}>
// 				<Accordion.Item value="testItem1">{value}</Accordion.Item>
// 			</Accordion>
// 		);
// 		expect(getByTestId('accordion-item').innerHTML).toContain(value);
// 	});

// 	it('should allow you to set the `base` style prop', () => {
// 		const tailwindClasses = 'bg-red-500';
// 		const { getByTestId } = render(
// 			<Accordion value={['testItem1']}>
// 				<Accordion.Item value="testItem1" base={tailwindClasses}>
// 					TestItem1
// 				</Accordion.Item>
// 			</Accordion>
// 		);
// 		expect(getByTestId('accordion-item')).toHaveClass(tailwindClasses);
// 	});

// 	it('should allow you to set the `classes` style prop', () => {
// 		const tailwindClasses = 'bg-green-500';
// 		const { getByTestId } = render(
// 			<Accordion value={['testItem1']}>
// 				<Accordion.Item value="testItem1" base={tailwindClasses}>
// 					TestItem1
// 				</Accordion.Item>
// 			</Accordion>
// 		);
// 		expect(getByTestId('accordion-item')).toHaveClass(tailwindClasses);
// 	});
// });

// // Accordion.Control ---

// describe('<Accordion.Control>', () => {
// 	it('should render the component', () => {
// 		const { getByTestId } = render(
// 			<Accordion value={['testItem1']}>
// 				<Accordion.Item value="testItem1">
// 					<Accordion.Control>TestPanel1</Accordion.Control>
// 				</Accordion.Item>
// 			</Accordion>
// 		);
// 		expect(getByTestId('accordion-control')).toBeInTheDocument();
// 	});

// 	it('should allow for children', () => {
// 		const value = 'foobar';
// 		const { getByTestId } = render(
// 			<Accordion value={['testItem1']}>
// 				<Accordion.Item value="testItem1">
// 					<Accordion.Control>{value}</Accordion.Control>
// 				</Accordion.Item>
// 			</Accordion>
// 		);
// 		expect(getByTestId('accordion-control').innerHTML).toContain(value);
// 	});

// 	// FIXME: broken during Zag migration
// 	// it('should be set disabled by `disabled` prop', async () => {
// 	// 	const { getByTestId } = render(
// 	// 		<Accordion value={['testItem1']}>
// 	// 			<Accordion.Item value="testItem1">
// 	// 				<Accordion.Control disabled>TestPanel1</Accordion.Control>
// 	// 			</Accordion.Item>
// 	// 		</Accordion>
// 	// 	);
// 	// 	await waitFor(() => {
// 	// 		const element = getByTestId('accordion-control');
// 	// 		expect(element.getAttribute('disabled')).toBe('');
// 	// 	});
// 	// });

// 	it('should allow you to set the `base` style prop', () => {
// 		const tailwindClasses = 'bg-red-500';
// 		const { getByTestId } = render(
// 			<Accordion value={['testItem1']}>
// 				<Accordion.Item value="testItem1">
// 					<Accordion.Control base={tailwindClasses}>TestPanel1</Accordion.Control>
// 				</Accordion.Item>
// 			</Accordion>
// 		);
// 		expect(getByTestId('accordion-control')).toHaveClass(tailwindClasses);
// 	});

// 	it('should allow you to set the `classes` style prop', () => {
// 		const tailwindClasses = 'bg-green-500';
// 		const { getByTestId } = render(
// 			<Accordion value={['testItem1']}>
// 				<Accordion.Item value="testItem1">
// 					<Accordion.Control base={tailwindClasses}>TestPanel1</Accordion.Control>
// 				</Accordion.Item>
// 			</Accordion>
// 		);
// 		expect(getByTestId('accordion-control')).toHaveClass(tailwindClasses);
// 	});
// });

// // Accordion.Panel ---

// describe('<Accordion.Panel>', () => {
// 	it('should render the component', () => {
// 		const { getByTestId } = render(
// 			<Accordion value={['testItem1']}>
// 				<Accordion.Item value="testItem1">
// 					<Accordion.Panel>TestPanel1</Accordion.Panel>
// 				</Accordion.Item>
// 			</Accordion>
// 		);
// 		expect(getByTestId('accordion-panel')).toBeInTheDocument();
// 	});

// 	// FIXME: broken during Zag migration
// 	// it('should allow for children', () => {
// 	// 	const value = 'foobar';
// 	// 	const { getByTestId } = render(
// 	// 		<Accordion value={['testItem1']}>
// 	// 			<Accordion.Item value="testItem1">
// 	// 				<Accordion.Panel>{value}</Accordion.Panel>
// 	// 			</Accordion.Item>
// 	// 		</Accordion>
// 	// 	);
// 	// 	const element = getByTestId('accordion-panel').children[0].innerHTML;
// 	// 	expect(element).toContain(value);
// 	// });

// 	it('should allow you to set the `base` style prop', () => {
// 		const tailwindClasses = 'bg-red-500';
// 		const { getByTestId } = render(
// 			<Accordion value={['testItem1']}>
// 				<Accordion.Item value="testItem1">
// 					<Accordion.Panel base={tailwindClasses}>Test</Accordion.Panel>
// 				</Accordion.Item>
// 			</Accordion>
// 		);
// 		const element = getByTestId('accordion-panel');
// 		expect(element).toHaveClass(tailwindClasses);
// 	});

// 	it('should allow you to set the `classes` style prop', () => {
// 		const tailwindClasses = 'bg-green-500';
// 		const { getByTestId } = render(
// 			<Accordion value={['testItem1']}>
// 				<Accordion.Item value="testItem1">
// 					<Accordion.Panel classes={tailwindClasses}>Test</Accordion.Panel>
// 				</Accordion.Item>
// 			</Accordion>
// 		);
// 		const element = getByTestId('accordion-panel');
// 		expect(element).toHaveClass(tailwindClasses);
// 	});
// });
