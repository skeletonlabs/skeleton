import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Divider from '$lib/components/Divider/Divider.svelte';

describe('Divider.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Divider);
		expect(getByTestId('divider')).toBeTruthy();
		expect(getByTestId('divider').className).toContain('border-t');
		expect(getByTestId('divider').className).toContain('border-solid');
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Divider, {
			props: {
				vertical: false,
				borderWidth: 'border-t-2',
				borderStyle: 'border-dotted',
				borderColor: 'border-red',
				margin: 'my-10',
				opacity: 'opacity-50'
			}
		});
		expect(getByTestId('divider')).toBeTruthy();
		expect(getByTestId('divider').className).toContain('border-t-2');
		expect(getByTestId('divider').className).toContain('border-dotted');
		expect(getByTestId('divider').className).toContain('border-red');
		expect(getByTestId('divider').className).toContain('my-10');
		expect(getByTestId('divider').className).toContain('opacity-50');
	});
});
