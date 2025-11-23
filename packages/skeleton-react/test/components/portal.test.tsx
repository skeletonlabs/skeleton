import Portal from './portal.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('Portal', () => {
	describe('Root', () => {
		it('renders', async () => {
			await render(<Portal />);
			await expect.element(page.getByTestId('child')).toBeInTheDocument();
		});

		it('renders in the target', async () => {
			await render(<Portal target={document.body} />);
			await expect.element(page.getByTestId('child')).toBeInTheDocument();
			expect(page.getByTestId('child').element().parentElement).toBe(document.body);
		});

		it('renders in the parent when disabled', async () => {
			await render(<Portal disabled />);
			expect(page.getByTestId('child').element().parentElement).toBe(page.getByTestId('parent').element());
		});
	});
});
