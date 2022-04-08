/**
 * @vitest-environment jsdom
 */

 import { cleanup, render, screen } from '@testing-library/svelte';
 import { afterEach, describe, expect, it, test, vi } from 'vitest';
 import Alert from '$lib/Alert/Alert.svelte';
 import { fireEvent } from '@testing-library/dom';
 
 describe('Alert.svelte', () => {
     afterEach(() => cleanup());
 
     it('Renders without props', async () => {
        const { getByTestId } = render(Alert);
		expect(getByTestId('alert')).toBeTruthy();
     });

     it('Renders with props', async () => {
        const { getByTestId } = render(Alert, 
            {props: {dismissable: false, color: 'primary', actionMessage: 'Test', actionFunction: ()=>{}, outlined: true}});
		expect(getByTestId('alert')).toBeTruthy();
     });

     it('Custom function on action message click', async ()=>{
        let customFunc = vi.fn();

        const { getByTestId } = render(Alert, {props: {actionMessage: 'click', actionFunction: customFunc}});
        const actionbtn = getByTestId('customActionBtn');
        await fireEvent.click(actionbtn);
        expect(customFunc).toBeCalledTimes(1);
     })

     it('Dismiss on click', async ()=>{
        const { getByTestId, container } = render(Alert, {props: {dismissable: true}});
        expect(getByTestId('dismissBtn')).toBeTruthy();
        const dismissBtn = getByTestId('dismissBtn');
        await fireEvent.click(dismissBtn);

        // TODO: Await anim to end. If deleted, this can be left as is..
        // Check to see if the alert class exists within the container
        // await expect(container.getElementsByClassName('alert').length).eq(0);
     })
 
 });