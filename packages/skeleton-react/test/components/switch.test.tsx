import Switch from './switch.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('Switch', () => {
	describe('Root', () => {
		it('renders', async () => {
			await render(<Switch />);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', async () => {
			await render(<Switch />);
			await expect.element(page.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			await render(<Switch />);
			await expect.element(page.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Thumb', () => {
		it('renders', async () => {
			await render(<Switch />);
			await expect.element(page.getByTestId('thumb')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			await render(<Switch />);
			await expect.element(page.getByTestId('label')).toBeInTheDocument();
		});
	});
});
