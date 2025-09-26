import Navigation from './navigation.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('navigation', () => {
	describe('root', () => {
		it('renders', () => {
			render(Navigation);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('header', () => {
		it('renders', () => {
			render(Navigation);
			expect(screen.getByTestId('header')).toBeInTheDocument();
		});
	});

	describe('content', () => {
		it('renders', () => {
			render(Navigation);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('group', () => {
		it('renders', () => {
			render(Navigation);
			expect(screen.getByTestId('group')).toBeInTheDocument();
		});
	});

	describe('label', () => {
		it('renders', () => {
			render(Navigation);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('menu', () => {
		it('renders', () => {
			render(Navigation);
			expect(screen.getByTestId('menu')).toBeInTheDocument();
		});
	});

	describe('footer', () => {
		it('renders', () => {
			render(Navigation);
			expect(screen.getByTestId('footer')).toBeInTheDocument();
		});
	});
});
