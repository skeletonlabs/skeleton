import Collapsible from './collapsible.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('Collapsible', () => {
	describe('Root', () => {
		it('renders', async () => {
			await render(<Collapsible />);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', async () => {
			await render(<Collapsible />);
			await expect.element(page.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Indicator', () => {
		it('renders', async () => {
			await render(<Collapsible />);
			await expect.element(page.getByTestId('indicator')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', async () => {
			await render(<Collapsible />);
			await expect.element(page.getByTestId('content')).toBeInTheDocument();
		});
	});
});
