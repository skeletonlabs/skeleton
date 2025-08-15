import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';
import Avatar from './avatar.svelte';

describe('avatar', () => {
	describe('root', () => {
		it('renders', () => {
			const screen = render(Avatar);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('image', () => {
		it('renders', () => {
			const screen = render(Avatar);
			expect(screen.getByTestId('image')).toBeInTheDocument();
		});
	});

	describe('fallback', () => {
		it('renders', () => {
			const screen = render(Avatar);
			expect(screen.getByTestId('fallback')).toBeInTheDocument();
		});
	});
});
