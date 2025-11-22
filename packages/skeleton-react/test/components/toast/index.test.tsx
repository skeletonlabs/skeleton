import { createToaster } from '../../../src/index.js';
import Test from './test.jsx';
import { act } from 'react';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('Toast', () => {
	describe('Group', () => {
		it('renders', async () => {
			const toaster = createToaster();
			await render(<Test toaster={toaster} />);
			await expect.element(page.getByTestId('group')).toBeInTheDocument();
		});
	});

	describe('Root', () => {
		it('renders', async () => {
			const toaster = createToaster();
			await render(<Test toaster={toaster} />);
			act(() => {
				toaster.create({});
			});
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Title', () => {
		it('renders', async () => {
			const toaster = createToaster();
			await render(<Test toaster={toaster} />);
			act(() => {
				toaster.create({});
			});
			await expect.element(page.getByTestId('title')).toBeInTheDocument();
		});
	});

	describe('Description', () => {
		it('renders', async () => {
			const toaster = createToaster();
			await render(<Test toaster={toaster} />);
			act(() => {
				toaster.create({});
			});
			await expect.element(page.getByTestId('description')).toBeInTheDocument();
		});
	});

	describe('ActionTrigger', () => {
		it('renders', async () => {
			const toaster = createToaster();
			await render(<Test toaster={toaster} />);
			act(() => {
				toaster.create({});
			});
			await expect.element(page.getByTestId('action-trigger')).toBeInTheDocument();
		});
	});

	describe('CloseTrigger', () => {
		it('renders', async () => {
			const toaster = createToaster();
			await render(<Test toaster={toaster} />);
			act(() => {
				toaster.create({});
			});
			await expect.element(page.getByTestId('close-trigger')).toBeInTheDocument();
		});
	});
});
