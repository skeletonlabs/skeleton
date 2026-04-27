import QrCode from './qr-code.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('QrCode', () => {
	describe('Root', () => {
		it('renders', async () => {
			await render(<QrCode />);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Frame', () => {
		it('renders', async () => {
			await render(<QrCode />);
			await expect.element(page.getByTestId('frame')).toBeInTheDocument();
		});
	});

	describe('Pattern', () => {
		it('renders', async () => {
			await render(<QrCode />);
			await expect.element(page.getByTestId('pattern')).toBeInTheDocument();
		});
	});

	describe('Overlay', () => {
		it('renders', async () => {
			await render(<QrCode />);
			await expect.element(page.getByTestId('overlay')).toBeInTheDocument();
		});
	});

	describe('DownloadTrigger', () => {
		it('renders', async () => {
			await render(<QrCode />);
			await expect.element(page.getByTestId('download-trigger')).toBeInTheDocument();
		});
	});
});