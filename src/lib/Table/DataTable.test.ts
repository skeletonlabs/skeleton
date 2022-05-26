/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte'
import { afterEach, describe, it, expect } from 'vitest';

import DataTable from '$lib/Table/DataTable.svelte';

export let headings: any[] = ['Foo', 'Bar'];
export let source: any[] = [
    {foo: 'x', bar: 'y'},
    {foo: 'x', bar: 'y'},
    {foo: 'x', bar: 'y'},
];

describe('DataTable.svelte', () => {

    afterEach(() => cleanup())

    it('Renders with props', async () => {
        const { getByTestId } = render(DataTable);
        expect( getByTestId('data-table') ).toBeTruthy();
    })

    it('Renders with props', async()=>{
        const { getByTestId } = render(DataTable, {props: {
            headings,
            source,
        }});
        expect( getByTestId('data-table') ).toBeTruthy();
    })

})