/**
 * @vitest-environment jsdom
 */

 import { cleanup, render } from '@testing-library/svelte';
 import { afterEach, describe, it } from 'vitest';
 
 // @ts-ignore
 import CodeBlock from '$lib/_CodeBlock/CodeBlock.svelte';
 
 describe('CodeBlock.svelte', () => {
     afterEach(() => cleanup());
 
     it('Renders', async () => {
         render(CodeBlock);
     });
 });
 