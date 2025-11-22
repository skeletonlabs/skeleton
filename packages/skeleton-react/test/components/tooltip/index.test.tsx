import Test from './test.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('Tooltip', () => {
	describe('Trigger', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Positioner', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('positioner')).toBeInTheDocument();
		});
	});

	describe('Arrow', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('arrow')).toBeInTheDocument();
		});
	});

	describe('ArrowTip', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('arrow-tip')).toBeInTheDocument();
		});
	});
});
