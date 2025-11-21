import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

describe('Avatar', () => {
	describe('Root', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Image', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('image')).toBeInTheDocument();
		});
	});

	describe('Fallback', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('fallback')).toBeInTheDocument();
		});
	});
});
