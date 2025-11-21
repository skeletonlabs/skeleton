import { createToaster } from '../../../src/index.js';
import Test from './test.svelte';
import { flushSync } from 'svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

describe('Toast', () => {
	describe('Group', () => {
		it('renders', () => {
			const toaster = createToaster();
			const { getByTestId } = render(Test, { toaster });
			expect(getByTestId('group')).toBeInTheDocument();
		});
	});

	describe('Root', () => {
		it('renders', () => {
			const toaster = createToaster();
			const { getByTestId } = render(Test, { toaster });
			flushSync(() => {
				toaster.create({});
			});
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Title', () => {
		it('renders', () => {
			const toaster = createToaster();
			const { getByTestId } = render(Test, { toaster });
			flushSync(() => {
				toaster.create({});
			});
			expect(getByTestId('title')).toBeInTheDocument();
		});
	});

	describe('Description', () => {
		it('renders', () => {
			const toaster = createToaster();
			const { getByTestId } = render(Test, { toaster });
			flushSync(() => {
				toaster.create({});
			});
			expect(getByTestId('description')).toBeInTheDocument();
		});
	});

	describe('ActionTrigger', () => {
		it('renders', () => {
			const toaster = createToaster();
			const { getByTestId } = render(Test, { toaster });
			flushSync(() => {
				toaster.create({});
			});
			expect(getByTestId('action-trigger')).toBeInTheDocument();
		});
	});

	describe('CloseTrigger', () => {
		it('renders', () => {
			const toaster = createToaster();
			const { getByTestId } = render(Test, { toaster });
			flushSync(() => {
				toaster.create({});
			});
			expect(getByTestId('close-trigger')).toBeInTheDocument();
		});
	});
});
