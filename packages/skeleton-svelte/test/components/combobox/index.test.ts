import Combobox from './combobox.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('Combobox', () => {
	describe('Root', () => {
		it('renders', () => {
			render(Combobox);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			render(Combobox);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', () => {
			render(Combobox);
			expect(screen.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Input', () => {
		it('renders', () => {
			render(Combobox);
			expect(screen.getByTestId('input')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', () => {
			render(Combobox);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Positioner', () => {
		it('renders', () => {
			render(Combobox);
			expect(screen.getByTestId('positioner')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
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

	describe('Item', () => {
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
