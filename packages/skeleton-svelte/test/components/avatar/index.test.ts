import Avatar from './avatar.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('avatar', () => {
	describe('root', () => {
		it('renders', () => {
			render(Avatar);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('image', () => {
		it('renders', () => {
			render(Avatar);
			expect(screen.getByTestId('image')).toBeInTheDocument();
		});
	});

	describe('fallback', () => {
		it('renders', () => {
			render(Avatar);
			expect(screen.getByTestId('fallback')).toBeInTheDocument();
		});
	});
});
