import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';
import Switch from './switch.svelte';

describe('switch', () => {
	describe('root', () => {
		it('renders', () => {
			const screen = render(Switch);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('hidden input', () => {
		it('renders', () => {
			const screen = render(Switch);
			expect(screen.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});

	describe('control', () => {
		it('renders', () => {
			const screen = render(Switch);
			expect(screen.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('thumb', () => {
		it('renders', () => {
			const screen = render(Switch);
			expect(screen.getByTestId('thumb')).toBeInTheDocument();
		});
	});

	describe('label', () => {
		it('renders', () => {
			const screen = render(Switch);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});
});
