import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

describe('Slider', () => {
	describe('Root', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('ValueText', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('value-text')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Track', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('track')).toBeInTheDocument();
		});
	});

	describe('Range', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('range')).toBeInTheDocument();
		});
	});

	describe('Thumb', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('thumb')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('hidden-input')).toBeInTheDocument();
		});
	});

	describe('MarkerGroup', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('marker-group')).toBeInTheDocument();
		});
	});

	describe('Marker', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('marker')).toBeInTheDocument();
		});
	});
});
