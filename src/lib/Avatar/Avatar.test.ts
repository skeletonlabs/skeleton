import { render } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';

// @ts-ignore
import Avatar from '$lib/Avatar/Avatar.svelte';
import { fireEvent } from '@testing-library/dom';

let testImgSrc = 'https://i.pravatar.cc/512';

describe('Avatar.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Avatar);
		expect(getByTestId('avatar')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Avatar, {
			props: {
				initials: 'JD',
				src: testImgSrc,
				size: 'xl',
				background: 'bg-primary-500',
				color: 'text-white-500',
				outlined: true,
				hover: true,
				filter: '#Emerald'
			}
		});
		expect(getByTestId('avatar')).toBeTruthy();
	});

	it('Renders with invalid props', async () => {
		const { getByTestId } = render(Avatar, {
			props: {
				size: 'foo',
				outlined: 'none',
				hover: 'none'
			}
		});
		expect(getByTestId('avatar').className.includes('w-full'));
		expect(getByTestId('avatar').getAttribute('hover')).eq(null);
		expect(getByTestId('avatar').getAttribute('outlined')).eq(null);
	});

	it('Image shown when src prop set', async () => {
		const { getByTestId } = render(Avatar, {
			props: { src: testImgSrc }
		});
		const imgSrc: string | undefined = getByTestId('avatar').querySelector('img')?.src;
		expect(imgSrc).to.eq(testImgSrc);
	});

	it('Initials shown when no image source provided', async () => {
		const { getByTestId } = render(Avatar);
		expect(getByTestId('avatar').querySelector('span')?.textContent).eq('A');
	});

	it('Handles click event', async () => {
		const onClick = vi.fn();
		const { getByTestId, component } = render(Avatar);
		component.$on('click', onClick);
		await fireEvent.click(getByTestId('avatar'));
		expect(onClick.mock.calls.length).eq(1);
	});
});
