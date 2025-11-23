import Avatar from './avatar.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('Avatar', () => {
	describe('Root', () => {
		it('renders', async () => {
			await render(<Avatar />);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Image', () => {
		it('renders', async () => {
			await render(<Avatar />);
			await expect.element(page.getByTestId('image')).toBeInTheDocument();
		});
	});

	describe('Fallback', () => {
		it('renders', async () => {
			await render(<Avatar />);
			await expect.element(page.getByTestId('fallback')).toBeInTheDocument();
		});
	});
});
