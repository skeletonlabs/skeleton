import ToggleGroup from './toggle-group.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('ToggleGroup', () => {
	describe('Root', () => {
		it('renders', async () => {
			await render(<ToggleGroup />);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			await render(<ToggleGroup />);
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});
});
