import Test from './test.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

describe('Navigation', () => {
	describe('Root', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('root')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('root')).toHaveAttribute('data-layout');
		});
	});

	describe('Header', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('header')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('header')).toHaveAttribute('data-layout');
		});
	});

	describe('Content', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('content')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('content')).toHaveAttribute('data-layout');
		});
	});

	describe('Group', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('group')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('group')).toHaveAttribute('data-layout');
		});
	});

	describe('Label', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('label')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('label')).toHaveAttribute('data-layout');
		});
	});

	describe('Menu', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('menu')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('menu')).toHaveAttribute('data-layout');
		});
	});

	describe('footer', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('footer')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('footer')).toHaveAttribute('data-layout');
		});
	});
});
