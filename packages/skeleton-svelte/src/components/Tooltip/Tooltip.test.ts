import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import { Tooltip } from '../../index.js';

describe('Tooltip', () => {
	const testIds = {
		root: 'tooltip'
	};

	// NOTE: bare minimum test as this feature is considered temporary

	it('Renders the component', () => {
		render(Tooltip, {});
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});
});
