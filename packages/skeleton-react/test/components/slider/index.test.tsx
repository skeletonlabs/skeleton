import Slider from './slider';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('slider', () => {
	describe('root', () => {
		it('renders', () => {
			render(<Slider />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('label', () => {
		it('renders', () => {
			render(<Slider />);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('value text', () => {
		it('renders', () => {
			render(<Slider />);
			expect(screen.getByTestId('value-text')).toBeInTheDocument();
		});
	});

	describe('control', () => {
		it('renders', () => {
			render(<Slider />);
			expect(screen.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('track', () => {
		it('renders', () => {
			render(<Slider />);
			expect(screen.getByTestId('track')).toBeInTheDocument();
		});
	});

	describe('range', () => {
		it('renders', () => {
			render(<Slider />);
			expect(screen.getByTestId('range')).toBeInTheDocument();
		});
	});

	describe('thumb', () => {
		it('renders', () => {
			render(<Slider />);
			expect(screen.getByTestId('thumb')).toBeInTheDocument();
		});
	});

	describe('hidden input', () => {
		it('renders', () => {
			render(<Slider />);
			expect(screen.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});

	describe('marker group', () => {
		it('renders', () => {
			render(<Slider />);
			expect(screen.getByTestId('marker-group')).toBeInTheDocument();
		});
	});

	describe('marker', () => {
		it('renders', () => {
			render(<Slider />);
			expect(screen.getByTestId('marker')).toBeInTheDocument();
		});
	});
});
