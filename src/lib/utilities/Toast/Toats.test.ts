import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { toastStore } from '$lib/utilities/Toast/stores';
import type { ToastSettings } from './types';
import Toast from '$lib/utilities/Toast/Toast.svelte';

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
		toastStore.trigger(toastMessage);
		const { getByTestId } = render(Toast);
		expect(getByTestId('toast')).toBeTruthy();
	});
});
