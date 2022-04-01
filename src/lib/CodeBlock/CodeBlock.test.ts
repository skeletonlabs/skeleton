/**
 * @vitest-environment jsdom
 */

 import { cleanup, render } from '@testing-library/svelte';
 import { afterEach, describe, it, expect } from 'vitest';
 
 // @ts-ignore
 import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
 
 describe('CodeBlock.svelte', () => {
     afterEach(() => cleanup());
 
     it('Renders with props', async () => {
         const {getByTestId} = render(CodeBlock, {props: {language: 'html', code: '<div></div>'}});
         expect(getByTestId('codeblock')).toBeTruthy();
     })

     // FIXME: Since both props needs to be set for the element to be created per the Svelte file,
     // I am unsure if this should pass or fail. Should a user be able to create an empty code block as a placeholder,
     // or is the code needed?

     //  it('Renders without props (Default)', async ()=>{
     //     const {getByTestId} = render(CodeBlock);
     //     expect(getByTestId('codeblock')).toBeTruthy();
     //  })
 });
 