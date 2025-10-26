import Test from './test.jsx';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Dialog', () => {
	describe('Trigger', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Backdrop', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('backdrop')).toBeInTheDocument();
		});
	});

	describe('Positioner', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('positioner')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('Title', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('title')).toBeInTheDocument();
		});
	});

	describe('Description', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('description')).toBeInTheDocument();
		});
	});

	describe('CloseTrigger', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('close-trigger')).toBeInTheDocument();
		});
	});
});
