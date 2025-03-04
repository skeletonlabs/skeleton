import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { Pagination } from './Pagination.js';

const sourceData = [
	{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
	{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
	{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
	{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
	{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
	{ position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
	{ position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
	{ position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
	{ position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
	{ position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
const commonProps = {
	data: sourceData,
	count: sourceData.length,
	page: 1,
	pageSize: 3,
};

describe('<Pagination>', () => {
	it('should render the component', () => {
		const { getByTestId } = render(<Pagination {...commonProps} />);
		const component = getByTestId('pagination');
		expect(component).toBeInTheDocument();
	});

	it('should render the component in default numeral UI mode', () => {
		const { getAllByTestId } = render(<Pagination {...commonProps} />);
		const elements = getAllByTestId('pagination-button-numeral');
		expect(elements).toHaveLength(3);
	});

	it('should render the component in the alternative UI mode', () => {
		const { getByTestId } = render(<Pagination {...commonProps} alternative />);
		const element = getByTestId('pagination-alt-ui');
		expect(element).toBeInTheDocument();
	});

	it('should render base classes on root', () => {
		const testClass = 'bg-green-500';
		const { getByTestId } = render(<Pagination {...commonProps} base={testClass} />);
		const component = getByTestId('pagination');
		expect(component).toHaveClass(testClass);
	});

	it('should render arbitrary classes on root', () => {
		const testClass = 'bg-green-500';
		const { getByTestId } = render(<Pagination {...commonProps} classes={testClass} />);
		const component = getByTestId('pagination');
		expect(component).toHaveClass(testClass);
	});

	it('should render first and last buttons if required', () => {
		const { getByTestId } = render(<Pagination {...commonProps} showFirstLastButtons />);
		const firstButton = getByTestId('pagination-button-first');
		const lastButton = getByTestId('pagination-button-last');
		expect(firstButton).toBeInTheDocument();
		expect(lastButton).toBeInTheDocument();
	});
});
