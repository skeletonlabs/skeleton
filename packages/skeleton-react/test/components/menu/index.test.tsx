import Test from './test.jsx';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Menu', () => {
	describe('Trigger', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('ContextTrigger', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('context-trigger')).toBeInTheDocument();
		});
	});

	describe('Indicator', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getAllByTestId('indicator')).toHaveLength(2);
		});
	});

	describe('Positioner', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('positioner')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('ItemGroup', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('item-group')).toBeInTheDocument();
		});
	});

	describe('ItemGroupLabel', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('item-group-label')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('TriggerItem', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('trigger-item')).toBeInTheDocument();
		});
	});

	describe('ItemText', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getAllByTestId('item-text')).toHaveLength(2);
		});
	});

	describe('ItemIndicator', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getAllByTestId('item-indicator')).toHaveLength(2);
		});
	});

	describe('Separator', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('separator')).toBeInTheDocument();
		});
	});

	describe('Arrow', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('arrow')).toBeInTheDocument();
		});
	});

	describe('ArrowTip', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('arrow-tip')).toBeInTheDocument();
		});
	});
});
