import Combobox from './combobox.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('combobox', () => {
	describe('root', () => {
		it('renders', () => {
			render(Combobox);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('label', () => {
		it('renders', () => {
			render(Combobox);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('control', () => {
		it('renders', () => {
			render(Combobox);
			expect(screen.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('input', () => {
		it('renders', () => {
			render(Combobox);
			expect(screen.getByTestId('input')).toBeInTheDocument();
		});
	});

	describe('trigger', () => {
		it('renders', () => {
			render(Combobox);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('positioner', () => {
		it('renders', () => {
			render(Combobox);
			expect(screen.getByTestId('positioner')).toBeInTheDocument();
		});
	});

	describe('content', () => {
		it('renders', () => {
			render(Combobox);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('item group', () => {
		it('renders', () => {
			render(Combobox);
			expect(screen.getByTestId('item-group')).toBeInTheDocument();
		});
	});

	describe('item group label', () => {
		it('renders', () => {
			render(Combobox);
			expect(screen.getByTestId('item-group-label')).toBeInTheDocument();
		});
	});

	describe('item', () => {
		it('renders', () => {
			render(Combobox);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('item text', () => {
		it('renders', () => {
			render(Combobox);
			expect(screen.getByTestId('item-text')).toBeInTheDocument();
		});
	});

	describe('item indicator', () => {
		it('renders', () => {
			render(Combobox);
			expect(screen.getByTestId('item-indicator')).toBeInTheDocument();
		});
	});
});
