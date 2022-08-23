import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import { dialogStore, DialogAlert, DialogConfirm, DialogPrompt} from '$lib/Notifications/Stores';
// @ts-ignore
import Dialog from '$lib/Notifications/Dialog.svelte';

// Dialog Payloads
const dialogAlert: DialogAlert = {
    title: 'Welcome to Skeleton.',
    body: 'This is a standard alert dialog.',
};
const dialogConfirm: DialogConfirm = {
    type: 'confirm',
    title: 'Please Confirm',
    body: 'Are you sure you wish to proceed?',
    result: (r: boolean) => { console.log(r); }
};
const dialogPrompt: DialogPrompt = {
    type: 'prompt',
    title: 'Enter Name',
    body: 'Provide your first name in the field below.',
    value: 'foobar',
    result: (r: string) => { if (r) { console.log(r); }; }
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
