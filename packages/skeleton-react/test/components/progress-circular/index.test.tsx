import ProgressCircular from './progress-circular';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('progress-circular', () => {
	describe('root', () => {
		it('renders', () => {
			render(<ProgressCircular />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('label', () => {
		it('renders', () => {
			render(<ProgressCircular />);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('circle', () => {
		it('renders', () => {
			render(<ProgressCircular />);
			expect(screen.getByTestId('circle')).toBeInTheDocument();
		});
	});

	describe('track', () => {
		it('renders', () => {
			render(<ProgressCircular />);
			expect(screen.getByTestId('track')).toBeInTheDocument();
		});
	});

	describe('range', () => {
		it('renders', () => {
			render(<ProgressCircular />);
			expect(screen.getByTestId('range')).toBeInTheDocument();
		});
	});
});
