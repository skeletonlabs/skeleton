import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import ProgressLinear from './progress-linear.svelte';

describe('progress-linear', () => {
	describe('root', () => {
		it('renders', () => {
			render(ProgressLinear);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('label', () => {
		it('renders', () => {
			render(ProgressLinear);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('track', () => {
		it('renders', () => {
			render(ProgressLinear);
			expect(screen.getByTestId('track')).toBeInTheDocument();
		});
	});

	describe('range', () => {
		it('renders', () => {
			render(ProgressLinear);
			expect(screen.getByTestId('range')).toBeInTheDocument();
		});
	});
});
