import Test from './test.jsx';
import { act } from 'react';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('SegmentedControl', () => {
	describe('Root', () => {
		it('renders', async () => {
			await act(() => render(<Test />));

			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Indicator', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('indicator')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ItemText', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('item-text')).toBeInTheDocument();
		});
	});

	describe('ItemHiddenInput', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('item-hidden-input')).toBeInTheDocument();
		});
	});
});
