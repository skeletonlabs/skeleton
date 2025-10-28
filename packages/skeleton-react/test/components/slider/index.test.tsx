import Test from './test.jsx';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Slider', () => {
	describe('Root', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('root')).toBeInTheDocument();
			});
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('label')).toBeInTheDocument();
			});
		});
	});

	describe('ValueText', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('value-text')).toBeInTheDocument();
			});
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('control')).toBeInTheDocument();
			});
		});
	});

	describe('Track', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('track')).toBeInTheDocument();
			});
		});
	});

	describe('Range', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('range')).toBeInTheDocument();
			});
		});
	});

	describe('Thumb', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('thumb')).toBeInTheDocument();
			});
		});
	});

	describe('HiddenInput', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('hidden-input')).toBeInTheDocument();
			});
		});
	});

	describe('MarkerGroup', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('marker-group')).toBeInTheDocument();
			});
		});
	});

	describe('Marker', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('marker')).toBeInTheDocument();
			});
		});
	});
});
