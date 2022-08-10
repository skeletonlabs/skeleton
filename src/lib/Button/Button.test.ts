/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/svelte'
import { afterEach, describe, it, vi, expect } from 'vitest';
import { fireEvent } from '@testing-library/dom';

/* @ts-ignore */
import Button from '$lib/Button/Button.svelte';

const dti = 'data-testid';

describe('Button.svelte', () => {

    afterEach(() => cleanup())

    it('Renders with props', async () => {
        const { getByTestId } = render(Button);
        expect( getByTestId ).toBeTruthy();
    })

    it('Renders with props', async()=>{
        const { getByTestId } = render(Button, {props: { variant: 'ghost-primary' }});
        expect( getByTestId ).toBeTruthy();
    })

    it('On Click', async()=>{
        const onClick = vi.fn();
        const { getByTestId, component } = render(Button);
        component.$on('click', onClick);
    	await fireEvent.click(screen.getByRole('button'));
		expect(onClick).toBeCalled();
    })

})