import Test from './test.jsx';
import { act } from 'react';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

describe('Tabs', () => {
	describe('Root', () => {
		it('renders', async () => {
			const { getByTestId } = await act(() => render(<Test />));
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('List', () => {
		it('renders', async () => {
			const { getByTestId } = await act(() => render(<Test />));
			expect(getByTestId('list')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', async () => {
			const { getByTestId } = await act(() => render(<Test />));
			expect(getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Indicator', () => {
		it('renders', async () => {
			const { getByTestId } = await act(() => render(<Test />));
			expect(getByTestId('indicator')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', async () => {
			const { getByTestId } = await act(() => render(<Test />));
			expect(getByTestId('content')).toBeInTheDocument();
		});
	});
});
