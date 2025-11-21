import Test from './test.jsx';
import { render } from 'vitest-browser-react';
import { describe, expect, it } from 'vitest';

describe('Popover', () => {
	describe('Trigger', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Positioner', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('positioner')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('Arrow', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('arrow')).toBeInTheDocument();
		});
	});

	describe('ArrowTip', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('arrow-tip')).toBeInTheDocument();
		});
	});

	describe('Title', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('title')).toBeInTheDocument();
		});
	});

	describe('Description', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('description')).toBeInTheDocument();
		});
	});

	describe('CloseTrigger', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('close-trigger')).toBeInTheDocument();
		});
	});
});
