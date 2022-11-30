import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import FileDropzone from '$lib/components/FileDropzone/FileDropzone.svelte';

describe('FileDropzone.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(FileDropzone);
		expect(getByTestId('file-dropzone')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		// Create Mock FileList
		// Reference: https://dev.to/akirakashihara/how-to-mock-filelist-on-vitest-or-jest-4494
		const file = new File([`foo`], `foo.txt`, { type: `text/plain` });
		const input = document.createElement(`input`);
		input.setAttribute(`type`, `file`);
		input.setAttribute(`name`, `file-upload`);
		const mockFileList = Object.create(input.files);
		mockFileList[0] = file;
		// ---
		const { getByTestId } = render(FileDropzone, {
			props: {
				files: mockFileList,
				name: 'testFileDropzoneInput',
				accept: 'image/*',
				multiple: false
			}
		});
		expect(getByTestId('file-dropzone')).toBeTruthy();
	});
});
