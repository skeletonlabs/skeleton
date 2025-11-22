import Test from './test.jsx';
import { act } from 'react';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('Menu', () => {
	describe('Trigger', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('ContextTrigger', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('context-trigger')).toBeInTheDocument();
		});
	});

	describe('Indicator', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('indicator')).toHaveLength(2);
		});
	});

	describe('Positioner', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('positioner')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('ItemGroup', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('item-group')).toBeInTheDocument();
		});
	});

	describe('ItemGroupLabel', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('item-group-label')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('OptionItem', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('option-item')).toBeInTheDocument();
		});
	});

	describe('TriggerItem', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('trigger-item')).toBeInTheDocument();
		});
	});

	describe('ItemText', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('item-text')).toHaveLength(3);
		});
	});

	describe('ItemIndicator', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('item-indicator')).toHaveLength(3);
		});
	});

	describe('Separator', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('separator')).toBeInTheDocument();
		});
	});

	describe('Arrow', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('arrow')).toBeInTheDocument();
		});
	});

	describe('ArrowTip', () => {
		it('renders', async () => {
			await act(() => render(<Test />));
			await expect.element(page.getByTestId('arrow-tip')).toBeInTheDocument();
		});
	});
});
