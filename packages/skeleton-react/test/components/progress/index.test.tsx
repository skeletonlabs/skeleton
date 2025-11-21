import Test from './test.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

describe('Progress', () => {
	describe('Root', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('ValueText', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('value-text')).toBeInTheDocument();
		});
	});

	describe('Track', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('track')).toBeInTheDocument();
		});
	});

	describe('Range', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('range')).toBeInTheDocument();
		});
	});

	describe('Circle', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('circle')).toBeInTheDocument();
		});
	});

	describe('CircleTrack', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('circle-track')).toBeInTheDocument();
		});
	});

	describe('CircleRange', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('circle-range')).toBeInTheDocument();
		});
	});
});
