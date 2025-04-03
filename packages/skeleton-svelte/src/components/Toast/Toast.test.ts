import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { createToaster } from './create-toaster.js';
import { Toaster } from '../../index.js';

describe('createToaster', () => {
	it('Creates a toaster', () => {
		const toaster = createToaster();
		expect(toaster).toBeDefined();
	});
	it('Creates a toaster with options', () => {
		const toaster = createToaster({
			placement: 'top-end'
		});
		expect(toaster.attrs.placement).toBe('top-end');
	});
});

describe('Toaster', () => {
	it('Renders the component', () => {
		const toaster = createToaster();
		render(Toaster, { toaster });
		expect(screen.getByTestId('toaster-root')).toBeInTheDocument();
	});
});
