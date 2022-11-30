import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Avatar from '$lib/components/Avatar/Avatar.svelte';

const imgTextSrc = 'https://i.pravatar.cc/512?img=5';

describe('Avatar.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Avatar);
		expect(getByTestId('avatar')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Avatar, {
			props: {
				background: 'bg-surface-500',
				width: 'w-12',
				border: '',
				rounded: 'rounded-full',
				shadow: 'shadow-xl',
				// Props (initials)
				initials: 'AB',
				text: 'text-xl',
				color: 'text-white'
			}
		});
		expect(getByTestId('avatar')).toBeTruthy();
	});

	it('Image shown when src prop set', async () => {
		const { getByTestId } = render(Avatar, { props: { src: imgTextSrc } });
		const elemImage: any = getByTestId('avatar').querySelector('.avatar-image');
		expect(elemImage.src).to.eq(imgTextSrc);
	});

	it('Initials shown when no image source provided', async () => {
		const { getByTestId } = render(Avatar);
		expect(getByTestId('avatar').querySelector('.avatar-initials')?.textContent).eq('AB');
	});
});
