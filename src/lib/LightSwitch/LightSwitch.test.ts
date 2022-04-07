/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';

import LightSwitch from '$lib/LightSwitch/LightSwitch.svelte';

describe('Divider.svelte', () => {
    afterEach(() => cleanup());

    it('Renders', async () => {
        const { getByTestId } = render(LightSwitch);
        expect(getByTestId('lightswitch')).toBeTruthy();
    });
});
 