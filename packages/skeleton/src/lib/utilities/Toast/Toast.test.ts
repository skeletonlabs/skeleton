import { render, screen } from '@testing-library/svelte';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import type { ToastSettings } from './types.js';
import ToastTest from './ToastTest.svelte';

// Toast Payload
const toastMessage: ToastSettings = {
	message: 'Your Message Here',
	autohide: true,
	timeout: 5000,
	action: {
		label: 'Greeting',
		response: () => alert('Hello, Skeleton')
	}
};

describe('Toast.svelte', () => {
	const snackbarWrapperTestId = 'snackbar-wrapper';

	// see: https://testing-library.com/docs/svelte-testing-library/faq/#why-arent-transition-events-running
	beforeEach(() => {
		const rafMock = (fn: (_: Date) => void) => setTimeout(() => fn(new Date()), 16);
		vi.stubGlobal('requestAnimationFrame', rafMock);
	});

	afterEach(() => {
		vi.unstubAllGlobals();
	});

	it('does not show the toast wrapper if the toast queue is empty', () => {
		expect(() => screen.getByTestId(snackbarWrapperTestId)).toThrow();
	});

	it('keeps the toast wrapper visible if a second toast is scheduled on the same tick as the closing of the first one, until the outro animation of the first toast is finished', async () => {
		const { getByTestId } = render(ToastTest, {
			props: {
				max: 2,
				toastSettings: [
					// note how toast B is scheduled to trigger at the same tick as toast A
					{ message: 'A', timeout: 10 },
					{ message: 'B', triggerDelay: 10, timeout: 10 }
				]
			}
		});

		const getWrapperElementAfterTimeout = (timeout: number) =>
			new Promise((resolve) =>
				setTimeout(() => {
					try {
						const el = getByTestId(snackbarWrapperTestId);
						resolve(el);
					} catch {
						resolve(false);
					}
				}, timeout)
			);

		const [wrapperVisibilityOnAToBChange, wrapperVisibilityAfterAOutroFinishes, wrapperVisibilityAfterBOutroFinishes] = await Promise.all([
			getWrapperElementAfterTimeout(10),
			getWrapperElementAfterTimeout(16),
			getWrapperElementAfterTimeout(80)
		]);

		expect(wrapperVisibilityOnAToBChange).toBeTruthy();
		expect(wrapperVisibilityAfterAOutroFinishes).toBeTruthy();
		expect(wrapperVisibilityAfterBOutroFinishes).toBeFalsy();
	});

	it('Renders modal alert', async () => {
		const { getByTestId } = render(ToastTest, { props: { toastSettings: [toastMessage] } });
		expect(getByTestId('toast')).toBeTruthy();
	});

	it('Renders only the configured max toasts at a time', async () => {
		const { getAllByTestId } = render(ToastTest, { props: { max: 1, toastSettings: [{ message: '1' }, { message: '2' }] } });
		expect(getAllByTestId('toast').length).toBe(1);
	});
});
