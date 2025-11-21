import Test from './test.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

describe('Menu', () => {
	describe('Trigger', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('ContextTrigger', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('context-trigger')).toBeInTheDocument();
		});
	});

	describe('Indicator', () => {
		it('renders', () => {
			const { getAllByTestId } = render(<Test />);
			expect(getAllByTestId('indicator')).toHaveLength(2);
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

	describe('OptionItem', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('option-item')).toBeInTheDocument();
		});
	});

	describe('TriggerItem', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('trigger-item')).toBeInTheDocument();
		});
	});

	describe('ItemText', () => {
		it('renders', () => {
			const { getAllByTestId } = render(<Test />);
			expect(getAllByTestId('item-text')).toHaveLength(3);
		});
	});

	describe('ItemIndicator', () => {
		it('renders', () => {
			const { getAllByTestId } = render(<Test />);
			expect(getAllByTestId('item-indicator')).toHaveLength(3);
		});
	});

	describe('Separator', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('separator')).toBeInTheDocument();
		});
	});

	describe('Arrow', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('arrow')).toBeInTheDocument();
		});
	});

	describe('ArrowTip', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('arrow-tip')).toBeInTheDocument();
		});
	});
});
