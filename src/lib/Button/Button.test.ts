import { render, screen } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import { fireEvent } from '@testing-library/dom';

// @ts-ignore
import Button from '$lib/Button/Button.svelte';

describe('Button.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Button);
		expect(getByTestId).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Button, {
			props: {
				size: 'lg',
				background: 'bg-primary-500',
				color: 'text-white',
				fill: 'fill-white',
				ring: 'ring-accent-500',
				weight: 'ring-1',
				width: 'w-[200px]',
				rounded: 'rounded',
				label: 'testButton1',
				describedby: 'testLabel1',
			}
		});
		expect(getByTestId).toBeTruthy();
	});
	
	it('Renders with variant prop', async () => {
		const { getByTestId } = render(Button, {
			props: { variant: 'ghost-primary' }
		});
		expect(getByTestId).toBeTruthy();
	});

	it('On Click', async () => {
		const onClick = vi.fn();
		const { component } = render(Button);
		component.$on('click', onClick);
		await fireEvent.click(screen.getByRole('button'));
		expect(onClick).toBeCalled();
	});
});
