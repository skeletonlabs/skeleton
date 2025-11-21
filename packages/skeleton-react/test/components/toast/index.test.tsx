import Test from './test.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

describe('Toast', () => {
	describe('Group', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('group')).toBeInTheDocument();
		});
	});

	describe.skip('Root', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe.skip('Title', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('title')).toBeInTheDocument();
		});
	});

	describe.skip('Description', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('description')).toBeInTheDocument();
		});
	});

	describe.skip('ActionTrigger', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('action-trigger')).toBeInTheDocument();
		});
	});

	describe.skip('CloseTrigger', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('close-trigger')).toBeInTheDocument();
		});
	});
});
