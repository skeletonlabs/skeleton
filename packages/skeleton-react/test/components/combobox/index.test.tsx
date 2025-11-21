import Test from './test.jsx';
import { render } from 'vitest-browser-react';
import { describe, expect, it } from 'vitest';

describe('Combobox', () => {
	describe('Root', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Input', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('input')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Positioner', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('positioner')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('ItemGroup', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('item-group')).toBeInTheDocument();
		});
	});

	describe('ItemGroupLabel', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('item-group-label')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ItemText', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('item-text')).toBeInTheDocument();
		});
	});

	describe('ItemIndicator', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('item-indicator')).toBeInTheDocument();
		});
	});
});
