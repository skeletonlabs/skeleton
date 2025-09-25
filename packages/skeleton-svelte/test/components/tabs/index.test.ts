import Tabs from './tabs.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('tabs', () => {
	describe('root', () => {
		it('renders', () => {
			render(Tabs);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('list', () => {
		it('renders', () => {
			render(Tabs);
			expect(screen.getByTestId('list')).toBeInTheDocument();
		});
	});

	describe('trigger', () => {
		it('renders', () => {
			render(Tabs);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('indicator', () => {
		it('renders', () => {
			render(Tabs);
			expect(screen.getByTestId('indicator')).toBeInTheDocument();
		});
	});

	describe('content', () => {
		it('renders', () => {
			render(Tabs);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});
});
