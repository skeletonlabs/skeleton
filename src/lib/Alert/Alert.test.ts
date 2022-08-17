/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, it, test, vi } from 'vitest';
import Alert from '$lib/Alert/Alert.svelte';
import { fireEvent } from '@testing-library/dom';

describe('Alert.svelte', () => {
	afterEach(() => cleanup());

	it('Renders without props', async () => {
		const { getByTestId } = render(Alert);
		expect(getByTestId('alert')).toBeTruthy();
	});

	it('Renders with props', async () => {
		const { getByTestId } = render(Alert, {
			props: {
				visible: true,
				color: 'bg-primary-500',
				radius: 'rounding-lg',
				textColor: 'text-accent-500'
			}
		});
		expect(getByTestId('alert')).toBeTruthy();
	});
});
