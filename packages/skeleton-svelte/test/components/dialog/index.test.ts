import Dialog from './dialog.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('dialog', () => {
	describe('trigger', () => {
		it('renders', () => {
			render(Dialog);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});
	describe('backdrop', () => {
		it('renders', () => {
			render(Dialog);
			expect(screen.getByTestId('backdrop')).toBeInTheDocument();
		});
	});
	describe('positioner', () => {
		it('renders', () => {
			render(Dialog);
			expect(screen.getByTestId('positioner')).toBeInTheDocument();
		});
	});
	describe('content', () => {
		it('renders', () => {
			render(Dialog);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});
	describe('title', () => {
		it('renders', () => {
			render(Dialog);
			expect(screen.getByTestId('title')).toBeInTheDocument();
		});
	});
	describe('description', () => {
		it('renders', () => {
			render(Dialog);
			expect(screen.getByTestId('description')).toBeInTheDocument();
		});
	});
	describe('close-trigger', () => {
		it('renders', () => {
			render(Dialog);
			expect(screen.getByTestId('close-trigger')).toBeInTheDocument();
		});
	});
});
