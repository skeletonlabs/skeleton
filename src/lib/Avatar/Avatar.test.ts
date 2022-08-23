import { render, screen, } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';

// @ts-ignore
import Avatar from '$lib/Avatar/Avatar.svelte';
import { fireEvent } from '@testing-library/dom';

describe('Button.svelte', () => {
	let img = 'https://i.pravatar.cc/512';

	it('Renders with props', async () => {
		const { getByTestId } = render(Avatar);
		expect(getByTestId('wrapper')).toBeTruthy();
	});

	it('Renders without props', async () => {
		const { getByTestId } = render(Avatar, {
			props: { src: 'img', size: 'lg', outlined: true, hover: true, filter: '#Emerald' }
		});
		expect(getByTestId('wrapper')).toBeTruthy();
	});

	it('Invalid props (Defaults', async () => {
		const { getByTestId } = render(Avatar, {
			props: { size: 'large', outlined: 'none', hover: 'none' }
		});
		expect(getByTestId('wrapper').className.includes('text-4xl'));
		expect(getByTestId('wrapper').getAttribute('hover')).eq(null);
		expect(getByTestId('wrapper').getAttribute('outlined')).eq(null);
	});

	it('Image shown', async () => {
		const { getByTestId } = render(Avatar, { src: img });
		const image = screen.getByRole('img');
		const src = image.getAttribute('src');
		expect(src).to.eq(img);
	});

	it('Placeholder shown', async () => {
		const { getByTestId } = render(Avatar);
		expect(getByTestId('placeholder').textContent).eq('A');
	});

	it('On click', async () => {
		const onClick = vi.fn();
		const { getByTestId, component } = render(Avatar);
		component.$on('click', onClick);
		await fireEvent.click(getByTestId('wrapper'));
		await fireEvent.click(getByTestId('wrapper'));
		expect(onClick.mock.calls.length).eq(2);
	});
});
