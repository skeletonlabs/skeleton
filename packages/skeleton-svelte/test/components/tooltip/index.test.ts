import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';
import Tooltip from './tooltip.svelte';

describe('tooltip', () => {
	describe('root', () => {
		it('renders', () => {
			const screen = render(Tooltip);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('list', () => {
		it('renders', () => {
			const screen = render(Tooltip);
			expect(screen.getByTestId('list')).toBeInTheDocument();
		});
	});

	describe('trigger', () => {
		it('renders', () => {
			const screen = render(Tooltip);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('indicator', () => {
		it('renders', () => {
			const screen = render(Tooltip);
			expect(screen.getByTestId('indicator')).toBeInTheDocument();
		});
	});

	describe('content', () => {
		it('renders', () => {
			const screen = render(Tooltip);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});
});
