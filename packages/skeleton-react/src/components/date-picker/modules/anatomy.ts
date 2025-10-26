import Content from '../anatomy/content.jsx';
import Control from '../anatomy/control.jsx';
import Input from '../anatomy/input.jsx';
import Label from '../anatomy/label.jsx';
import MonthSelect from '../anatomy/month-select.jsx';
import NextTrigger from '../anatomy/next-trigger.jsx';
import Positioner from '../anatomy/positioner.jsx';
import PresetTrigger from '../anatomy/preset-trigger.jsx';
import PrevTrigger from '../anatomy/prev-trigger.jsx';
import RangeText from '../anatomy/range-text.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Root from '../anatomy/root.jsx';
import TableBody from '../anatomy/table-body.jsx';
import TableCellTrigger from '../anatomy/table-cell-trigger.jsx';
import TableCell from '../anatomy/table-cell.jsx';
import TableHead from '../anatomy/table-head.jsx';
import TableHeader from '../anatomy/table-header.jsx';
import TableRow from '../anatomy/table-row.jsx';
import Table from '../anatomy/table.jsx';
import Trigger from '../anatomy/trigger.jsx';
import ViewControl from '../anatomy/view-control.jsx';
import ViewTrigger from '../anatomy/view-trigger.jsx';
import View from '../anatomy/view.jsx';
import YearSelect from '../anatomy/year-select.jsx';

export const DatePicker = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	Control: Control,
	PresetTrigger: PresetTrigger,
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
});
