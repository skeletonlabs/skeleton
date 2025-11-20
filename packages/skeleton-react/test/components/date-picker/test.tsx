import { DatePicker, parseDate } from '../../../src/index.js';

export default function Test() {
	return (
		<DatePicker data-testid="root">
			<DatePicker.Label data-testid="label" />
			<DatePicker.Control data-testid="control">
				<DatePicker.Input data-testid="input" />
				<DatePicker.Trigger data-testid="trigger" />
			</DatePicker.Control>
			<DatePicker.Positioner data-testid="positioner">
				<DatePicker.Content data-testid="content">
					<DatePicker.YearSelect data-testid="year-select" />
					<DatePicker.MonthSelect data-testid="month-select" />
					<DatePicker.View view="day" data-testid="view">
						<DatePicker.ViewControl data-testid="view-control">
							<DatePicker.PrevTrigger data-testid="prev-trigger" />
							<DatePicker.ViewTrigger data-testid="view-trigger">
								<DatePicker.RangeText data-testid="range-text" />
							</DatePicker.ViewTrigger>
							<DatePicker.NextTrigger data-testid="next-trigger" />
						</DatePicker.ViewControl>
						<DatePicker.Table data-testid="table">
							<DatePicker.TableHead data-testid="table-head">
								<DatePicker.TableRow data-testid="table-row">
									<DatePicker.TableHeader data-testid="table-header" />
								</DatePicker.TableRow>
							</DatePicker.TableHead>
							<DatePicker.TableBody data-testid="table-body">
								<DatePicker.TableRow data-testid="table-row">
									<DatePicker.TableCell value={parseDate('1970-01-01')} data-testid="table-cell">
										<DatePicker.TableCellTrigger data-testid="table-cell-trigger" />
									</DatePicker.TableCell>
								</DatePicker.TableRow>
							</DatePicker.TableBody>
						</DatePicker.Table>
					</DatePicker.View>
				</DatePicker.Content>
			</DatePicker.Positioner>
		</DatePicker>
	);
}
