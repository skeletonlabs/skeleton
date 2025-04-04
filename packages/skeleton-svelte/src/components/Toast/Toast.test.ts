import { describe, it, expect } from 'vitest';
import { act, render, screen } from '@testing-library/svelte';
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
	it('Renders toasts', async () => {
		const toaster = createToaster();
		render(Toaster, { toaster });
		await act(() => {
			toaster.create({
				duration: Infinity
			});
		});
		expect(screen.getByTestId('toast-root')).toBeInTheDocument();
		expect(screen.getByTestId('toast-message')).toBeInTheDocument();
		expect(screen.getByTestId('toast-title')).toBeInTheDocument();
		expect(screen.getByTestId('toast-description')).toBeInTheDocument();
		expect(screen.getByTestId('toast-dismiss')).toBeInTheDocument();
	});
	const rootProps = ['base', 'width', 'padding', 'rounded', 'classes'];
	for (const prop of rootProps) {
		it(`Correctly applies the \`${prop}\` prop`, async () => {
			const value = 'bg-green-500';
			const toaster = createToaster();
			render(Toaster, { toaster, [prop]: value });
			await act(() => {
				toaster.create({
					duration: Infinity
				});
			});
			render(Toaster, { toaster, [prop]: value });
			expect(screen.getByTestId('toast-root')).toHaveClass(value);
		});
	}
	const messageProps = ['messageBase', 'messageClasses'];
	for (const prop of messageProps) {
		it(`Correctly applies the \`${prop}\` prop`, async () => {
			const value = 'bg-green-500';
			const toaster = createToaster();
			render(Toaster, { toaster, [prop]: value });
			await act(() => {
				toaster.create({
					duration: Infinity
				});
			});
			render(Toaster, { toaster, [prop]: value });
			expect(screen.getByTestId('toast-message')).toHaveClass(value);
		});
	}
	const titleProps = ['titleBase', 'titleClasses'];
	for (const prop of titleProps) {
		it(`Correctly applies the \`${prop}\` prop`, async () => {
			const value = 'bg-green-500';
			const toaster = createToaster();
			render(Toaster, { toaster, [prop]: value });
			await act(() => {
				toaster.create({
					duration: Infinity
				});
			});
			render(Toaster, { toaster, [prop]: value });
			expect(screen.getByTestId('toast-title')).toHaveClass(value);
		});
	}
	const descriptionProps = ['descriptionBase', 'descriptionClasses'];
	for (const prop of descriptionProps) {
		it(`Correctly applies the \`${prop}\` prop`, async () => {
			const value = 'bg-green-500';
			const toaster = createToaster();
			render(Toaster, { toaster, [prop]: value });
			await act(() => {
				toaster.create({
					duration: Infinity
				});
			});
			render(Toaster, { toaster, [prop]: value });
			expect(screen.getByTestId('toast-description')).toHaveClass(value);
		});
	}
	const btnDismissProps = ['btnDismissBase', 'btnDismissClasses'];
	for (const prop of btnDismissProps) {
		it(`Correctly applies the \`${prop}\` prop`, async () => {
			const value = 'bg-green-500';
			const toaster = createToaster();
			render(Toaster, { toaster, [prop]: value });
			await act(() => {
				toaster.create({
					duration: Infinity
				});
			});
			render(Toaster, { toaster, [prop]: value });
			expect(screen.getByTestId('toast-dismiss')).toHaveClass(value);
		});
	}
	const types = [
		{
			type: 'info',
			prop: 'stateInfo'
		},
		{
			type: 'success',
			prop: 'stateSuccess'
		},
		{
			type: 'warning',
			prop: 'stateWarning'
		},
		{
			type: 'error',
			prop: 'stateError'
		}
	] as const;
	for (const { type, prop } of types) {
		it(`Correctly applies the \`${prop}\` prop for type \`${type}\``, async () => {
			const value = 'bg-green-500';
			const toaster = createToaster();
			render(Toaster, { toaster, [prop]: value });
			await act(() => {
				toaster.create({
					type,
					duration: Infinity
				});
			});
			expect(screen.getByTestId('toast-root')).toHaveClass(value);
		});
	}
});
