import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import FileDropzone from '$lib/components/FileDropzone/FileDropzone.svelte';

describe('FileDropzone.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(FileDropzone);
		expect(getByTestId('file-dropzone')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(FileDropzone, {
			props: {
				files: undefined,
				name: 'testFileDropzoneInput',
				accept: 'image/*',
				multiple: false
			}
		});
		expect(getByTestId('file-dropzone')).toBeTruthy();
	});
});
