import { describe, expect, it, vi } from 'vitest';
import { act, render } from '@testing-library/react';
import { Tabs } from './Tabs.js';
import userEvent from '@testing-library/user-event';

// *************************
// Integration Tests
// *************************

describe('Tabs usage', () => {
	it('should show the panel when the control is clicked', async () => {
		const setGroup = vi.fn();

		const tabsComponent = (group: string) => (
			<Tabs>
				<Tabs.List>
					<Tabs.Control name="test1" group={group} onChange={setGroup}>
						<Tabs.Item>test control 1</Tabs.Item>
					</Tabs.Control>
					<Tabs.Control name="test2" group={group} onChange={setGroup}>
						<Tabs.Item>test control 2</Tabs.Item>
					</Tabs.Control>
				</Tabs.List>
				<Tabs.Panel group={group} value="test1">
					test Panel 1
				</Tabs.Panel>
				<Tabs.Panel group={group} value="test2">
					test Panel 2
				</Tabs.Panel>
			</Tabs>
		);

		const { getByText, queryByText, rerender } = render(tabsComponent('test1'));

		const control1 = getByText('test control 1');
		const control2 = getByText('test control 2');

		// expect controls to be visible
		expect(control1).toBeInTheDocument();
		expect(control2).toBeInTheDocument();

		// expect first panel to be visible
		expect(queryByText('test Panel 1')).toBeInTheDocument();

		// expect second panel to be hidden
		expect(queryByText('test control 2')).toBeInTheDocument();

		// click second control
		await act(async () => {
			await userEvent.click(control2);
		});

		// make sure setGroup is called after click
		expect(setGroup).toHaveBeenCalledWith('test2');
		// rerender the component with the new group value
		rerender(tabsComponent('test2'));

		// expect first panel to be hidden
		expect(queryByText('test Panel 1')).not.toBeInTheDocument();
		expect(queryByText('test Panel 2')).toBeInTheDocument();
	});
});

// *************************
// Unit Tests
// *************************

// Tabs ---

describe('<Tabs>', () => {
	it('should render the component', () => {
		const { getByTestId } = render(<Tabs />);
		expect(getByTestId('tabs')).toBeInTheDocument();
	});

	it('should allow for children', () => {
		const value = 'children value';
		const { getByTestId } = render(<Tabs>{value}</Tabs>);
		expect(getByTestId('tabs').innerHTML).toContain(value);
	});

	it('should allow you to set the `base` style prop', () => {
		const tailwindClasses = 'bg-red-600';
		const { getByTestId } = render(<Tabs base={tailwindClasses} />);
		expect(getByTestId('tabs')).toHaveClass(tailwindClasses);
	});

	it('should allow you to set the `classes` style prop', () => {
		const tailwindClasses = 'bg-green-600';
		const { getByTestId } = render(<Tabs classes={tailwindClasses} />);
		expect(getByTestId('tabs')).toHaveClass(tailwindClasses);
	});
});

// List ---

describe('<Tabs.List>', () => {
	it('should render the component', () => {
		const { getByRole } = render(<Tabs.List />);
		expect(getByRole('tablist')).toBeInTheDocument();
	});

	it('should allow for children', () => {
		const value = 'children value';
		const { getByRole } = render(<Tabs.List>{value}</Tabs.List>);
		expect(getByRole('tablist').innerHTML).toContain(value);
	});

	it('should allow you to set the `base` style prop', () => {
		const tailwindClasses = 'flex-col';
		const { getByRole } = render(<Tabs.List base={tailwindClasses} />);
		expect(getByRole('tablist')).toHaveClass(tailwindClasses);
	});

	it('should allow you to set the `classes` style prop', () => {
		const tailwindClasses = 'bg-green-600';
		const { getByRole } = render(<Tabs.List classes={tailwindClasses} />);
		expect(getByRole('tablist')).toHaveClass(tailwindClasses);
	});
});

// Control ---

describe('<Tabs.Control>', () => {
	it('should render the component', () => {
		const { getByTestId } = render(<Tabs.Control name="test" group="test" />);
		expect(getByTestId('tabs-control')).toBeInTheDocument();
	});

	it('should render with `name` prop', () => {
		const name = 'testName';
		const { getByRole } = render(<Tabs.Control name={name} group="test" />);
		const radioInput = getByRole('radio');
		expect(radioInput).toBeInTheDocument();
		expect(radioInput).toHaveAttribute('name', name);
		expect(radioInput).toHaveAttribute('value', name);
	});

	it('should set `aria-controls` to `controls` value', () => {
		const controls = 'test controls';
		const { getByTestId } = render(<Tabs.Control name="test" group="test" controls={controls} />);
		expect(getByTestId('tabs-control')).toHaveAttribute('aria-controls', controls);
	});

	it('should set `aria-label` to `label` value', () => {
		const label = 'test label';
		const { getByTestId } = render(<Tabs.Control name="test" group="test" label={label} />);
		expect(getByTestId('tabs-control').parentElement).toHaveAttribute('aria-label', label);
	});

	it('should allow for children', () => {
		const value = 'children value';
		const { getByTestId } = render(
			<Tabs.Control name="test" group="test">
				{value}
			</Tabs.Control>
		);
		expect(getByTestId('tabs-control').innerHTML).toContain(value);
	});

	it('should allow you to set the `base` style prop', () => {
		const tailwindClasses = 'bg-blue-600';
		const { getByTestId } = render(<Tabs.Control name="test" group="test" base={tailwindClasses} />);
		expect(getByTestId('tabs-control').parentElement).toHaveClass(tailwindClasses);
	});

	it('should allow you to set the `classes` style prop', () => {
		const tailwindClasses = 'bg-blue-600';
		const { getByTestId } = render(<Tabs.Control name="test" group="test" classes={tailwindClasses} />);
		expect(getByTestId('tabs-control').parentElement).toHaveClass(tailwindClasses);
	});
});

// Item ---

describe('<Tabs.Item>', () => {
	it('should render the component', () => {
		const { container } = render(<Tabs.Item />);
		expect(container.querySelector('div')).toBeInTheDocument();
	});

	it('should allow for children', () => {
		const value = 'children value';
		const { container } = render(<Tabs.Item>{value}</Tabs.Item>);
		expect(container.querySelector('div')?.innerHTML).toContain(value);
	});

	it('should allow you to set the `base` style prop', () => {
		const tailwindClasses = 'bg-purple-600';
		const { container } = render(<Tabs.Item base={tailwindClasses} />);
		expect(container.querySelector('div')).toHaveClass(tailwindClasses);
	});

	it('should allow you to set the `classes` style prop', () => {
		const tailwindClasses = 'bg-purple-600';
		const { container } = render(<Tabs.Item classes={tailwindClasses} />);
		expect(container.querySelector('div')).toHaveClass(tailwindClasses);
	});
});

// Panel ---

describe('<Tabs.Panel>', () => {
	it('should render the component', () => {
		const { getByRole } = render(
			<Tabs.Panel value="test" group="test">
				content
			</Tabs.Panel>
		);
		expect(getByRole('tabpanel')).toBeInTheDocument();
	});

	it('should not render the component with no content', () => {
		const { queryByRole } = render(<Tabs.Panel value="test" group="test" />);
		expect(queryByRole('tabpanel')).not.toBeInTheDocument();
	});

	it('should set `id` to `id` value', () => {
		const id = 'test id';
		const { getByRole } = render(
			<Tabs.Panel value="test" group="test" id={id}>
				content
			</Tabs.Panel>
		);
		expect(getByRole('tabpanel')).toHaveAttribute('id', id);
	});

	it('should set `aria-labelledby` to `labelledby` value', () => {
		const labelledBy = 'test labelledby';
		const { getByRole } = render(
			<Tabs.Panel value="test" group="test" labelledBy={labelledBy}>
				content
			</Tabs.Panel>
		);
		expect(getByRole('tabpanel')).toHaveAttribute('aria-labelledby', labelledBy);
	});

	it('should allow for children', () => {
		const value = 'children value';
		const { getByRole } = render(
			<Tabs.Panel value="test" group="test">
				{value}
			</Tabs.Panel>
		);
		expect(getByRole('tabpanel').innerHTML).toContain(value);
	});

	it('should allow you to set the `classes` style prop', () => {
		const tailwindClasses = 'bg-blue-600';
		const { getByRole } = render(
			<Tabs.Panel value="test" group="test" classes={tailwindClasses}>
				content
			</Tabs.Panel>
		);
		expect(getByRole('tabpanel')).toHaveClass(tailwindClasses);
	});
});
