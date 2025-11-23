import DatePicker from './date-picker.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('DatePicker', () => {
	describe('Root', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Input', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('input')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Positioner', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('positioner')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('YearSelect', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('year-select')).toBeInTheDocument();
		});
	});

	describe('MonthSelect', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('month-select')).toBeInTheDocument();
		});
	});

	describe('View', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('view')).toBeInTheDocument();
		});
	});

	describe('ViewControl', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('view-control')).toBeInTheDocument();
		});
	});

	describe('PrevTrigger', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('prev-trigger')).toBeInTheDocument();
		});
	});

	describe('ViewTrigger', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('view-trigger')).toBeInTheDocument();
		});
	});

	describe('RangeText', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('range-text')).toBeInTheDocument();
		});
	});

	describe('NextTrigger', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('next-trigger')).toBeInTheDocument();
		});
	});

	describe('Table', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('table')).toBeInTheDocument();
		});
	});

	describe('TableHead', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('table-head')).toBeInTheDocument();
		});
	});

	describe('TableRow', () => {
		it('renders', async () => {
			render(DatePicker);
			for (const element of page.getByTestId('table-row').all()) {
				await expect.element(element).toBeInTheDocument();
			}
		});
	});

	describe('TableHeader', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('table-header')).toBeInTheDocument();
		});
	});

	describe('TableBody', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('table-body')).toBeInTheDocument();
		});
	});

	describe('TableCell', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('table-cell')).toBeInTheDocument();
		});
	});

	describe('TableCellTrigger', () => {
		it('renders', async () => {
			render(DatePicker);
			await expect.element(page.getByTestId('table-cell-trigger')).toBeInTheDocument();
		});
	});
});
