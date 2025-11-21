import Test from './test.jsx';
import { render,  waitFor } from 'vitest-browser-react';
import { describe, expect, it } from 'vitest';

describe('Slider', () => {
	describe('Root', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('root')).toBeInTheDocument();
			});
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('label')).toBeInTheDocument();
			});
		});
	});

	describe('ValueText', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('value-text')).toBeInTheDocument();
			});
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('control')).toBeInTheDocument();
			});
		});
	});

	describe('Track', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('track')).toBeInTheDocument();
			});
		});
	});

	describe('Range', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('range')).toBeInTheDocument();
			});
		});
	});

	describe('Thumb', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('thumb')).toBeInTheDocument();
			});
		});
	});

	describe('HiddenInput', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('hidden-input')).toBeInTheDocument();
			});
		});
	});

	describe('MarkerGroup', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('marker-group')).toBeInTheDocument();
			});
		});
	});

	describe('Marker', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('marker')).toBeInTheDocument();
			});
		});
	});
});
