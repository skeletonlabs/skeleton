import Tabs from './tabs.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('Tabs', () => {
	describe('Root', () => {
		it('renders', () => {
			render(Tabs);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('List', () => {
		it('renders', () => {
			render(Tabs);
			expect(screen.getByTestId('list')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', () => {
			render(Tabs);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Indicator', () => {
		it('renders', () => {
			render(Tabs);
			expect(screen.getByTestId('indicator')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', () => {
			render(Tabs);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});
});
