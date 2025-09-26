import Dialog from './dialog.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('Dialog', () => {
	describe('Trigger', () => {
		it('renders', () => {
			render(Dialog);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});
	describe('Backdrop', () => {
		it('renders', () => {
			render(Dialog);
			expect(screen.getByTestId('backdrop')).toBeInTheDocument();
		});
	});
	describe('Positioner', () => {
		it('renders', () => {
			render(Dialog);
			expect(screen.getByTestId('positioner')).toBeInTheDocument();
		});
	});
	describe('Content', () => {
		it('renders', () => {
			render(Dialog);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});
	describe('Title', () => {
		it('renders', () => {
			render(Dialog);
			expect(screen.getByTestId('title')).toBeInTheDocument();
		});
	});
	describe('Description', () => {
		it('renders', () => {
			render(Dialog);
			expect(screen.getByTestId('description')).toBeInTheDocument();
		});
	});
	describe('CloseTrigger', () => {
		it('renders', () => {
			render(Dialog);
			expect(screen.getByTestId('close-trigger')).toBeInTheDocument();
		});
	});
});
