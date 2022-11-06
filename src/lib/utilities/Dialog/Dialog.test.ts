import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { dialogStore } from '$lib/utilities/Dialog/stores';
import type { DialogSettings } from '$lib/utilities/Dialog/types';

// @ts-ignore
import Dialog from '$lib/utilities/Dialog/Dialog.svelte';

// Dialog Payloads
const dialogAlert: DialogSettings = {
	type: 'alert',
	title: 'Welcome to Skeleton.',
	body: 'This is a standard alert dialog.'
};
const dialogConfirm: DialogSettings = {
	type: 'confirm',
	title: 'Please Confirm',
	body: 'Are you sure you wish to proceed?',
	response: (r: boolean) => console.log(r)
};
const dialogPrompt: DialogSettings = {
	type: 'prompt',
	title: 'Enter Name',
	body: 'Provide your first name in the field below.',
	value: 'foobar',
	response: (r: string) => console.log(r)
};

describe('Dialog.svelte', () => {
	it('Renders dialog alert', async () => {
		dialogStore.trigger(dialogAlert);
		const { getByTestId } = render(Dialog);
		expect(getByTestId('dialog-backdrop')).toBeTruthy();
		expect(getByTestId('dialog')).toBeTruthy();
	});

	it('Renders dialog confirm', async () => {
		dialogStore.trigger(dialogConfirm);
		const { getByTestId } = render(Dialog);
		expect(getByTestId('dialog-backdrop')).toBeTruthy();
		expect(getByTestId('dialog')).toBeTruthy();
	});

	it('Renders dialog prompt', async () => {
		dialogStore.trigger(dialogPrompt);
		const { getByTestId } = render(Dialog);
		expect(getByTestId('dialog-backdrop')).toBeTruthy();
		expect(getByTestId('dialog')).toBeTruthy();
	});
});
