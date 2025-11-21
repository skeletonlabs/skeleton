import { createToaster } from '../../../src/index.js';
import Test from './test.jsx';
import { act } from 'react';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

describe('Toast', () => {
	describe('Group', () => {
		it('renders', async () => {
			const toaster = createToaster();
			const { getByTestId } = await render(<Test toaster={toaster} />);
			expect(getByTestId('group')).toBeInTheDocument();
		});
	});

	describe('Root', () => {
		it('renders', async () => {
			const toaster = createToaster();
			const { getByTestId } = await render(<Test toaster={toaster} />);
			act(() => {
				toaster.create({});
			});
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Title', () => {
		it('renders', async () => {
			const toaster = createToaster();
			const { getByTestId } = await render(<Test toaster={toaster} />);
			act(() => {
				toaster.create({});
			});
			expect(getByTestId('title')).toBeInTheDocument();
		});
	});

	describe('Description', () => {
		it('renders', async () => {
			const toaster = createToaster();
			const { getByTestId } = await render(<Test toaster={toaster} />);
			act(() => {
				toaster.create({});
			});
			expect(getByTestId('description')).toBeInTheDocument();
		});
	});

	describe('ActionTrigger', () => {
		it('renders', async () => {
			const toaster = createToaster();
			const { getByTestId } = await render(<Test toaster={toaster} />);
			act(() => {
				toaster.create({});
			});
			expect(getByTestId('action-trigger')).toBeInTheDocument();
		});
	});

	describe('CloseTrigger', () => {
		it('renders', async () => {
			const toaster = createToaster();
			const { getByTestId } = await render(<Test toaster={toaster} />);
			act(() => {
				toaster.create({});
			});
			expect(getByTestId('close-trigger')).toBeInTheDocument();
		});
	});
});
