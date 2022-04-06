/**
 * @vitest-environment jsdom
 */

 import { cleanup, render, screen } from '@testing-library/svelte';
 import { afterEach, describe, expect, it, vi } from 'vitest';
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
 
 });