import Test from './portal.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('Portal', () => {
	describe('Root', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('child')).toBeInTheDocument();
		});

		it('renders in the target', async () => {
			await render(<Test target={document.body} />);
			await expect.element(page.getByTestId('child')).toBeInTheDocument();
			expect(page.getByTestId('child').element().parentElement).toBe(document.body);
		});

		it('renders in the parent when disabled', async () => {
			await render(<Test disabled />);
			expect(page.getByTestId('child').element().parentElement).toBe(page.getByTestId('parent').element());
		});
	});
});
