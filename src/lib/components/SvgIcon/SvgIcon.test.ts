import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

describe('SggIcon.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(SvgIcon);
		expect(getByTestId('svg-icon')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(SvgIcon, {
			name: 'image',
			x: '0px',
			y: '0px',
			viewBox: '0 0 512 512',
			// ---
			fill: 'fill-black dark:fill-white',
			width: 'w-5',
			height: 'w-5',
			// ---
			title: 'testSvgIcon1',
			tabindex: -1
		});
		expect(getByTestId('svg-icon')).toBeTruthy();
	});
});
