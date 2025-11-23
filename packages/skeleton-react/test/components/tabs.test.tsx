import Test from './tabs.jsx';
import { act } from 'react';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('Tabs', () => {
	describe('Root', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('List', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('list')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Indicator', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('indicator')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('content')).toBeInTheDocument();
		});
	});
});
