/**
 * @vitest-environment jsdom
 */

 import { cleanup, render, screen } from '@testing-library/svelte';
 import { afterEach, describe, expect, it, vi } from 'vitest';
 import Alert from '$lib/Alert/Alert.svelte';
 import { fireEvent } from '@testing-library/dom';
 
 describe('Alert.svelte', () => {
     afterEach(() => cleanup());
 
     it('Renders with props', async () => {
        render(Alert);
        
     });
 
 });