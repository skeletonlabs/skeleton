import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';
import Tabs from './tabs.svelte';

describe('tabs', () => {
	describe('root', () => {
		it('renders', () => {
			const screen = render(Tabs);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('list', () => {
		it('renders', () => {
			const screen = render(Tabs);
			expect(screen.getByTestId('list')).toBeInTheDocument();
		});
	});

	describe('trigger', () => {
		it('renders', () => {
			const screen = render(Tabs);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('indicator', () => {
		it('renders', () => {
			const screen = render(Tabs);
			expect(screen.getByTestId('indicator')).toBeInTheDocument();
		});
	});

	describe('content', () => {
		it('renders', () => {
			const screen = render(Tabs);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});
});
