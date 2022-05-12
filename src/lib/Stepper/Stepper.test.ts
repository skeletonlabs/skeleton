/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/svelte'
import { afterEach, describe, it, vi, expect } from 'vitest';
import { writable, type Writable } from 'svelte/store';

import Stepper from '$lib/Stepper/Stepper.svelte';

export let active: Writable<number> = writable(0);

describe('Stepper.svelte', () => {

    afterEach(() => cleanup())

    it('Renders without props', async () => {
        const { getByTestId } = render(Stepper);
        expect(getByTestId('stepper')).toBeTruthy();
    });
     
    it('Renders with props', () => {
        const { getByTestId } = render(Stepper, {
            props: {
                active,
                max: 5,
                skippable: false,
                progressable: false,
                accent: 'bg-green-500',
                variant: 'text',
                disabled: false
            },
        });
        expect(getByTestId('stepper')).toBeTruthy();
    })

})