import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Crumb from '$lib/components/Breadcrumb/Crumb.svelte';

describe('Crumb.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Crumb);
		expect(getByTestId('crumb')).toBeTruthy();
	});

	it('Renders with all props', () => {
		const { getByTestId } = render(Crumb, {
			props: {
				href: '/foobar',
				current: false,
				separator: '|'
			}
		});
		expect(getByTestId('crumb')).toBeTruthy();
		expect(getByTestId('crumb').querySelector('a')?.href).to.contain('/foobar');
		expect(getByTestId('crumb').querySelector('.separator')).toBeTruthy();
		expect(getByTestId('crumb').querySelector('.separator')?.textContent).eq('|');
	});
});
