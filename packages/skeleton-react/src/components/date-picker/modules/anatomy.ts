import Content from '../anatomy/content';
import Control from '../anatomy/control';
import Input from '../anatomy/input';
import Label from '../anatomy/label';
import MonthSelect from '../anatomy/month-select';
import NextTrigger from '../anatomy/next-trigger';
import Positioner from '../anatomy/positioner';
import PrevTrigger from '../anatomy/prev-trigger';
import RangeText from '../anatomy/range-text';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';
import Table from '../anatomy/table';
import TableBody from '../anatomy/table-body';
import TableCell from '../anatomy/table-cell';
import TableCellTrigger from '../anatomy/table-cell-trigger';
import TableHead from '../anatomy/table-head';
import TableHeader from '../anatomy/table-header';
import TableRow from '../anatomy/table-row';
import Trigger from '../anatomy/trigger';
import View from '../anatomy/view';
import ViewControl from '../anatomy/view-control';
import ViewTrigger from '../anatomy/view-trigger';
import YearSelect from '../anatomy/year-select';

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
});
