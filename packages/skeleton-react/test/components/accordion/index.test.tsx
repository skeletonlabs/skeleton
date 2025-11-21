import Test from './test.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

describe('Accordion', () => {
	describe('Root', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ItemTrigger', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('item-trigger')).toBeInTheDocument();
		});
	});

	describe('ItemIndicator', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('item-indicator')).toBeInTheDocument();
		});
	});

	describe('ItemContent', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('item-content')).toBeInTheDocument();
		});
	});
});
