import Test from './test.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

describe('Slider', () => {
	describe('Root', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('ValueText', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('value-text')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Track', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('track')).toBeInTheDocument();
		});
	});

	describe('Range', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('range')).toBeInTheDocument();
		});
	});

	describe('Thumb', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('thumb')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('hidden-input')).toBeInTheDocument();
		});
	});

	describe('MarkerGroup', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('marker-group')).toBeInTheDocument();
		});
	});

	describe('Marker', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('marker')).toBeInTheDocument();
		});
	});
});
