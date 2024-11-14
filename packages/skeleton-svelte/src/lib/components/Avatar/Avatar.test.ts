import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import { Avatar } from '$lib/index.js';

describe('Avatar', () => {
	const imgSrc =
		'https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop';

	it('Renders the component', () => {
		render(Avatar, { src: imgSrc, name: 'basic' });
		const component = screen.getByTestId('avatar');
		expect(component).toBeInTheDocument();
	});
});
