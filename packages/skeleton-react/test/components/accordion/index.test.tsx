import Test from './test.jsx';
import { render } from 'vitest-browser-react';
import { describe, expect, it } from 'vitest';

describe('Accordion', () => {
	describe('Root', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ItemTrigger', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('item-trigger')).toBeInTheDocument();
		});
	});

	describe('ItemIndicator', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('item-indicator')).toBeInTheDocument();
		});
	});

	describe('ItemContent', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('item-content')).toBeInTheDocument();
		});
	});
});
