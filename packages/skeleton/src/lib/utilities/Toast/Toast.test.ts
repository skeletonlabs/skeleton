import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import type { ToastSettings } from './types.js';
import Toast from '$lib/utilities/Toast/Toast.svelte';
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

	it('Renders modal alert', async () => {
		const { getByTestId } = render(ToastTest, { props: { toastSettings: [toastMessage] } });
		expect(getByTestId('toast')).toBeTruthy();
	});

	it('Renders only the configured max toasts at a time', async () => {
		const { getAllByTestId } = render(ToastTest, { props: { max: 1, toastSettings: [{ message: '1' }, { message: '2' }] } });
		expect(getAllByTestId('toast').length).toBe(1);
	});
});
