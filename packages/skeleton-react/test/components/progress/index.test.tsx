import Test from './test';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Progress', () => {
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

	describe('ValueText', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('value-text')).toBeInTheDocument();
		});
	});

	describe('Track', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('track')).toBeInTheDocument();
		});
	});

	describe('Range', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('range')).toBeInTheDocument();
		});
	});

	describe('Circle', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('circle')).toBeInTheDocument();
		});
	});

	describe('CircleTrack', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('circle-track')).toBeInTheDocument();
		});
	});

	describe('CircleRange', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('circle-range')).toBeInTheDocument();
		});
	});
});
