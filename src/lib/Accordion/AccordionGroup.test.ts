import { writable } from 'svelte/store';
/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';

/* @ts-ignore */
import AccordionGroup from '$lib/Accordion/AccordionGroup.svelte';

describe('Accordion.svelte', () => {

    afterEach(() => cleanup());

    it('Renders without props', async () => {
        const { getByTestId } = render(AccordionGroup);
        expect(getByTestId('accordion-group')).toBeTruthy();
    });

    it('Renders with props', async () => {
        const { getByTestId } = render(AccordionGroup, {spacing: 'space-y-4'});
        expect(getByTestId('accordion-group')).toBeTruthy();
    });

});