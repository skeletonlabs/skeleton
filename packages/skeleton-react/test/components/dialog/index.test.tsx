import Test from './test.jsx';
import { render } from 'vitest-browser-react';
import { describe, expect, it } from 'vitest';

describe('Dialog', () => {
	describe('Trigger', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Backdrop', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('backdrop')).toBeInTheDocument();
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
