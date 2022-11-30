import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import FileButton from '$lib/components/FileButton/FileButton.svelte';

describe('FileButton.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(FileButton);
		expect(getByTestId('file-button')).toBeTruthy();
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
		const { getByTestId } = render(FileButton, {
			props: {
				files: mockFileList,
				name: 'testFileButtonInput',
				accept: 'image/*',
				multiple: false
			}
		});
		expect(getByTestId('file-button')).toBeTruthy();
	});
});
