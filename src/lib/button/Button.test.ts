/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte'
import { afterEach, describe, it } from 'vitest';

import Button from '$lib/button/Button.svelte';

describe('Button.svelte', () => {

    afterEach(() => cleanup())
    
    it('updates on button click', async () => {
        render(Button, { label: 'Button' })
    })

})