import Test from './test.jsx';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('DatePicker', () => {
	describe('Root', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Input', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('input')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
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

	describe('YearSelect', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('year-select')).toBeInTheDocument();
		});
	});

	describe('MonthSelect', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('month-select')).toBeInTheDocument();
		});
	});

	describe('View', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('view')).toBeInTheDocument();
		});
	});

	describe('ViewControl', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('view-control')).toBeInTheDocument();
		});
	});

	describe('PrevTrigger', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('prev-trigger')).toBeInTheDocument();
		});
	});

	describe('ViewTrigger', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('view-trigger')).toBeInTheDocument();
		});
	});

	describe('RangeText', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('range-text')).toBeInTheDocument();
		});
	});

	describe('NextTrigger', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('next-trigger')).toBeInTheDocument();
		});
	});

	describe('Table', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('table')).toBeInTheDocument();
		});
	});

	describe('TableHead', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('table-head')).toBeInTheDocument();
		});
	});

	describe('TableRow', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getAllByTestId('table-row')[0]).toBeInTheDocument();
		});
	});

	describe('TableHeader', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('table-header')).toBeInTheDocument();
		});
	});

	describe('TableBody', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('table-body')).toBeInTheDocument();
		});
	});
	describe('TableCell', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('table-cell')).toBeInTheDocument();
		});
	});

	describe('TableCellTrigger', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('table-cell-trigger')).toBeInTheDocument();
		});
	});
});
