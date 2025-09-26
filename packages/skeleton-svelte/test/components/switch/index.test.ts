import Switch from './switch.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('Switch', () => {
	describe('Root', () => {
		it('renders', () => {
			render(Switch);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('hidden input', () => {
		it('renders', () => {
			render(Switch);
			expect(screen.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', () => {
			render(Switch);
			expect(screen.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Thumb', () => {
		it('renders', () => {
			render(Switch);
			expect(screen.getByTestId('thumb')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			render(Switch);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});
});
