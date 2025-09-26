import Avatar from './avatar.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('Avatar', () => {
	describe('Root', () => {
		it('renders', () => {
			render(Avatar);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Image', () => {
		it('renders', () => {
			render(Avatar);
			expect(screen.getByTestId('image')).toBeInTheDocument();
		});
	});

	describe('Fallback', () => {
		it('renders', () => {
			render(Avatar);
			expect(screen.getByTestId('fallback')).toBeInTheDocument();
		});
	});
});
