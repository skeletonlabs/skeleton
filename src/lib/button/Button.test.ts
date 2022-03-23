/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/svelte'
import { afterEach, describe, it, vi, expect } from 'vitest';
import { fireEvent } from '@testing-library/dom';

import Button from '$lib/Button/Button.svelte';

describe('Button.svelte', () => {

    afterEach(() => cleanup())
    
    it('Renders with props', async () => {
        render(Button); // , { label: 'Button' }
    })

    it('Renders without props', async()=>{
        const { getByTestId } = render(Button, {props: { display: 'text', color: 'primary' }}); // , { label: 'Button' }
    })

    it('On Click', async()=>{
        const onClick = vi.fn();
        const instance = render(Button);
        instance.component.$on('click', onClick);
    	await fireEvent.click(screen.getByRole('button'));
		expect(onClick).toBeCalled();
    })

})