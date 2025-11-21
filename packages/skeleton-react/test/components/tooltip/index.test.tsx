import Test from './test.jsx';
import { render } from 'vitest-browser-react';
import { describe, expect, it } from 'vitest';

describe('Tooltip', () => {
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
});
