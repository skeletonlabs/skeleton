import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { toastStore, type ToastMessage } from '$lib/utilities/Toast/stores';
import Toast from '$lib/utilities/Toast/Toast.svelte';

// Toast Payload
const toastMessage: ToastMessage = {
	message: 'Your Message Here',
	// Optional:
	autohide: true,
	timeout: 5000,
	button: {
		label: 'Greeting',
		action: () => {
			alert('Hello, Skeleton');
		}
	}
};

describe('Toast.svelte', () => {
	it('Renders dialog alert', async () => {
		toastStore.trigger(toastMessage);
		const { getByTestId } = render(Toast);
		expect(getByTestId('toast')).toBeTruthy();
	});
});
