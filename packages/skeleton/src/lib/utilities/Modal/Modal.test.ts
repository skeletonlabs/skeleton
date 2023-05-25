import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { modalStore } from '$lib/utilities/Modal/stores';
import type { ModalSettings } from '$lib/utilities/Modal/types';

import Modal from '$lib/utilities/Modal/Modal.svelte';

// Modal Payloads
const modalAlert: ModalSettings = {
	type: 'alert',
	title: 'Welcome to Skeleton.',
	body: 'This is a standard alert modal.'
};
const modalConfirm: ModalSettings = {
	type: 'confirm',
	title: 'Please Confirm',
	body: 'Are you sure you wish to proceed?',
	response: (r: boolean) => console.log(r)
};
const modalPrompt: ModalSettings = {
	type: 'prompt',
	title: 'Enter Name',
	body: 'Provide your first name in the field below.',
	value: 'foobar',
	response: (r: string) => console.log(r)
};

describe('Modal.svelte', () => {
	it('Renders modal alert', async () => {
		modalStore.trigger(modalAlert);
		const { getByTestId } = render(Modal);
		expect(getByTestId('modal-backdrop')).toBeTruthy();
		expect(getByTestId('modal')).toBeTruthy();
	});

	it('Renders modal confirm', async () => {
		modalStore.trigger(modalConfirm);
		const { getByTestId } = render(Modal);
		expect(getByTestId('modal-backdrop')).toBeTruthy();
		expect(getByTestId('modal')).toBeTruthy();
	});

	it('Renders modal prompt', async () => {
		modalStore.trigger(modalPrompt);
		const { getByTestId } = render(Modal);
		expect(getByTestId('modal-backdrop')).toBeTruthy();
		expect(getByTestId('modal')).toBeTruthy();
	});
});
