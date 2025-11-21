import Test from './test.jsx';
import { render } from 'vitest-browser-react';
import { describe, expect, it } from 'vitest';

describe('TagsInput', () => {
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

	describe('Control', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('item preview', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('item-preview')).toBeInTheDocument();
		});
	});

	describe('item text', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('item-text')).toBeInTheDocument();
		});
	});

	describe('item delete trigger', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('item-delete-trigger')).toBeInTheDocument();
		});
	});

	describe('item input', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('item-input')).toBeInTheDocument();
		});
	});

	describe('Input', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('input')).toBeInTheDocument();
		});
	});

	describe('clear trigger', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('clear-trigger')).toBeInTheDocument();
		});
	});

	describe('hidden input', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
