import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import FileButton from '$lib/components/FileButton/FileButton.svelte';

describe('FileButton.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(FileButton);
		expect(getByTestId('file-button')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(FileButton, {
			props: {
				files: undefined,
				name: 'testFileButtonInput',
				accept: 'image/*',
				multiple: false
			}
		});
		expect(getByTestId('file-button')).toBeTruthy();
	});
});
