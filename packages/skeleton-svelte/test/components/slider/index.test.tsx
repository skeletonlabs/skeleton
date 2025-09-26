import Slider from './slider.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('Slider', () => {
	describe('Root', () => {
		it('renders', () => {
			render(Slider);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			render(Slider);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('value text', () => {
		it('renders', () => {
			render(Slider);
			expect(screen.getByTestId('value-text')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', () => {
			render(Slider);
			expect(screen.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Track', () => {
		it('renders', () => {
			render(Slider);
			expect(screen.getByTestId('track')).toBeInTheDocument();
		});
	});

	describe('Range', () => {
		it('renders', () => {
			render(Slider);
			expect(screen.getByTestId('range')).toBeInTheDocument();
		});
	});

	describe('Thumb', () => {
		it('renders', () => {
			render(Slider);
			expect(screen.getByTestId('thumb')).toBeInTheDocument();
		});
	});

	describe('hidden input', () => {
		it('renders', () => {
			render(Slider);
			expect(screen.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});

	describe('marker group', () => {
		it('renders', () => {
			render(Slider);
			expect(screen.getByTestId('marker-group')).toBeInTheDocument();
		});
	});

	describe('Marker', () => {
		it('renders', () => {
			render(Slider);
			expect(screen.getByTestId('marker')).toBeInTheDocument();
		});
	});
});
