import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Crumb from '$lib/components/Breadcrumb/Crumb.svelte';

describe('Crumb.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Crumb);
		expect(getByTestId('crumb')).toBeTruthy();
	});

	it('Renders with style props', () => {
		const { getByTestId } = render(Crumb, {
			props: {
				text: 'text-base',
				color: 'text-white'
			}
		});
		expect(getByTestId('crumb')).toBeTruthy();
		// expect(getByTestId('crumb')?.className).to.contain('text-base');
		expect(getByTestId('crumb')?.className).to.contain('text-white');
	});

	it('Renders an anchor with seperator', () => {
		const { getByTestId } = render(Crumb, {
			props: {
				href: '/foobar',
				separator: '|'
			}
		});
		expect(getByTestId('crumb')).toBeTruthy();
		expect(getByTestId('crumb').querySelector('a')).toBeTruthy();
		expect(getByTestId('crumb').querySelector('a')?.href).to.contain('/foobar');
		expect(getByTestId('crumb').querySelector('.crumb-seperator')).toBeTruthy();
		expect(getByTestId('crumb').querySelector('.crumb-seperator')?.textContent).eq('|');
	});

	it('Renders a current page as span', () => {
		const { getByTestId } = render(Crumb, {
			props: {
				text: 'text-base',
				color: 'text-white'
			}
		});
		expect(getByTestId('crumb')).toBeTruthy();
		expect(getByTestId('crumb').querySelector('span')).toBeTruthy();
	});
});
