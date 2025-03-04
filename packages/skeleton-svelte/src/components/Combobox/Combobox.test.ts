import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import { Combobox } from '../../index.js';

describe('Combobox', () => {
	const testIds = {
		root: 'combobox',
	};

	// NOTE: bare minimum test as this feature is considered temporary

	it('Renders the component', () => {
		render(Combobox, {});
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});
});
