import Test from './test.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('ProgressCircular', () => {
	describe('Root', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Circle', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('circle')).toBeInTheDocument();
		});
	});

	describe('Track', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('track')).toBeInTheDocument();
		});
	});

	describe('Range', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('range')).toBeInTheDocument();
		});
	});

	describe('ValueText', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('value-text')).toBeInTheDocument();
		});
	});
});
