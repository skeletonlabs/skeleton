/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';

/* @ts-ignore */
import AccordionItem from '$lib/Accordion/AccordionItem.svelte';

import { writable, type Writable } from 'svelte/store';
export let selected: Writable<number[]> = writable([1]);

describe('AccordionItem.svelte', () => {
	afterEach(() => cleanup());

	it('placeholder', async () => {});

	it('Renders without props', async () => {
		const { getByTestId } = render(AccordionItem);
		expect(getByTestId('accordion-item')).toBeTruthy();
	});

	it('Renders with props', async () => {
		const { getByTestId } = render(AccordionItem, {
			open: true,
			hover: 'bg-green-500/50',
			spacing: 'space-y-2',
			summaryId: 'testSummary1',
			contentId: 'testContent1'
		});
		expect(getByTestId('accordion-item')).toBeTruthy();
	});
});
