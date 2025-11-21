import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

describe('DatePicker', () => {
	describe('Root', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Input', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('input')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Positioner', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('positioner')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('YearSelect', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('year-select')).toBeInTheDocument();
		});
	});

	describe('MonthSelect', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('month-select')).toBeInTheDocument();
		});
	});

	describe('View', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('view')).toBeInTheDocument();
		});
	});

	describe('ViewControl', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('view-control')).toBeInTheDocument();
		});
	});

	describe('PrevTrigger', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('prev-trigger')).toBeInTheDocument();
		});
	});

	describe('ViewTrigger', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('view-trigger')).toBeInTheDocument();
		});
	});

	describe('RangeText', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('range-text')).toBeInTheDocument();
		});
	});

	describe('NextTrigger', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('next-trigger')).toBeInTheDocument();
		});
	});

	describe('Table', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('table')).toBeInTheDocument();
		});
	});

	describe('TableHead', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('table-head')).toBeInTheDocument();
		});
	});

	describe('TableRow', () => {
		it('renders', async () => {
			const { getAllByTestId } = await render(Test);
			expect(getAllByTestId('table-row')[0]).toBeInTheDocument();
		});
	});

	describe('TableHeader', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('table-header')).toBeInTheDocument();
		});
	});

	describe('TableBody', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('table-body')).toBeInTheDocument();
		});
	});

	describe('TableCell', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('table-cell')).toBeInTheDocument();
		});
	});

	describe('TableCellTrigger', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('table-cell-trigger')).toBeInTheDocument();
		});
	});
});
