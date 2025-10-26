import Test from './test.jsx';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('TagsInput', () => {
	describe('Root', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('item preview', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('item-preview')).toBeInTheDocument();
		});
	});

	describe('item text', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('item-text')).toBeInTheDocument();
		});
	});

	describe('item delete trigger', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('item-delete-trigger')).toBeInTheDocument();
		});
	});

	describe('item input', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('item-input')).toBeInTheDocument();
		});
	});

	describe('Input', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('input')).toBeInTheDocument();
		});
	});

	describe('clear trigger', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('clear-trigger')).toBeInTheDocument();
		});
	});

	describe('hidden input', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
