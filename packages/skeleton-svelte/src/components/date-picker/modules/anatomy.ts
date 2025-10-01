import Content from '../anatomy/content.svelte';
import Control from '../anatomy/control.svelte';
import Input from '../anatomy/input.svelte';
import Label from '../anatomy/label.svelte';
import MonthSelect from '../anatomy/month-select.svelte';
import NextTrigger from '../anatomy/next-trigger.svelte';
import Positioner from '../anatomy/positioner.svelte';
import PresetTrigger from '../anatomy/preset-trigger.svelte';
import PrevTrigger from '../anatomy/prev-trigger.svelte';
import RangeText from '../anatomy/range-text.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';
import TableBody from '../anatomy/table-body.svelte';
import TableCellTrigger from '../anatomy/table-cell-trigger.svelte';
import TableCell from '../anatomy/table-cell.svelte';
import TableHead from '../anatomy/table-head.svelte';
import TableHeader from '../anatomy/table-header.svelte';
import TableRow from '../anatomy/table-row.svelte';
import Table from '../anatomy/table.svelte';
import Trigger from '../anatomy/trigger.svelte';
import ViewControl from '../anatomy/view-control.svelte';
import ViewTrigger from '../anatomy/view-trigger.svelte';
import View from '../anatomy/view.svelte';
import YearSelect from '../anatomy/year-select.svelte';

export const DatePicker = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	Control: Control,
	Input: Input,
	Trigger: Trigger,
	Positioner: Positioner,
	Content: Content,
	YearSelect: YearSelect,
	MonthSelect: MonthSelect,
	View: View,
	ViewControl: ViewControl,
	PrevTrigger: PrevTrigger,
	ViewTrigger: ViewTrigger,
	RangeText: RangeText,
	NextTrigger: NextTrigger,
	Table: Table,
	TableHead: TableHead,
	TableRow: TableRow,
	TableHeader: TableHeader,
	TableBody: TableBody,
	TableCell: TableCell,
	TableCellTrigger: TableCellTrigger,
	PresetTrigger: PresetTrigger,
});
