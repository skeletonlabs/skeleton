import Progress from './progress.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('Progress', () => {
	describe('Root', () => {
		it('renders', async () => {
			await render(<Progress />);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			await render(<Progress />);
			await expect.element(page.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('ValueText', () => {
		it('renders', async () => {
			await render(<Progress />);
			await expect.element(page.getByTestId('value-text')).toBeInTheDocument();
		});
	});

	describe('Track', () => {
		it('renders', async () => {
			await render(<Progress />);
			await expect.element(page.getByTestId('track')).toBeInTheDocument();
		});
	});

	describe('Range', () => {
		it('renders', async () => {
			await render(<Progress />);
			await expect.element(page.getByTestId('range')).toBeInTheDocument();
		});
	});

	describe('Circle', () => {
		it('renders', async () => {
			await render(<Progress />);
			await expect.element(page.getByTestId('circle')).toBeInTheDocument();
		});
	});

	describe('CircleTrack', () => {
		it('renders', async () => {
			await render(<Progress />);
			await expect.element(page.getByTestId('circle-track')).toBeInTheDocument();
		});
	});

	describe('CircleRange', () => {
		it('renders', async () => {
			await render(<Progress />);
			await expect.element(page.getByTestId('circle-range')).toBeInTheDocument();
		});
	});
});
