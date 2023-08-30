import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { getModalStore } from '$lib/utilities/Modal/stores.js';
import type { ModalSettings } from '$lib/utilities/Modal/types.js';

import ModalTest from './ModalTest.svelte';

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
		const { getByTestId } = render(ModalTest, {props: {modalSetting: modalAlert}});
		expect(getByTestId('modal-backdrop')).toBeTruthy();
		expect(getByTestId('modal')).toBeTruthy();
	});

	it('Renders modal confirm', async () => {
		const { getByTestId } = render(ModalTest, {props: {modalSetting: modalConfirm}});
		expect(getByTestId('modal-backdrop')).toBeTruthy();
		expect(getByTestId('modal')).toBeTruthy();
	});

	it('Renders modal prompt', async () => {
		const { getByTestId } = render(ModalTest, {props: {modalSetting: modalPrompt}});
		expect(getByTestId('modal-backdrop')).toBeTruthy();
		expect(getByTestId('modal')).toBeTruthy();
	});
});
