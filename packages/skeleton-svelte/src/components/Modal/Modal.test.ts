import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import { Modal } from '../../index.js';

describe('Modal', () => {
	const testIds = {
		root: 'modal',
	};

	// NOTE: bare minimum test as this feature is considered temporary

	it('Renders the component', () => {
		render(Modal, {});
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});
});
