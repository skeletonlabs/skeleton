import { Pagination } from '$lib/components/Pagination/Pagination.js';
import { ChangeEvent, useState } from 'react';
import {
	ArrowLeft as IconArrowLeft,
	ArrowRight as IconArrowRight,
	Ellipsis as IconEllipsis,
	ChevronsLeft as IconFirst,
	ChevronsRight as IconLast
} from 'lucide-react';

export function Component() {
	interface SourceData {
		position: number;
		name: string;
		weight: number;
		symbol: string;
	}

	const sourceData: SourceData[] = [
		{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
		{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
		{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
		{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
		{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
		{ position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
		{ position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
		{ position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
		{ position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
		{ position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
	];

	// State
	const [size, setSize] = useState<number>(5);
	const [settings, setSettings] = useState({ page: 1, pageSize: size });
	const slicedSource = (s: SourceData[]) => s.slice((settings.page - 1) * size, settings.page * size);
	const sizeOptions = [1, 2, 5];

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Pagination</h1>
			</header>
			<section className="space-y-4">
				{/* Table */}
				<div className="table-wrap">
					<table className="table table-fixed caption-bottom">
						<thead>
							<tr>
								<th>Position</th>
								<th>Symbol</th>
								<th>Name</th>
								<th className="!text-right">Weight</th>
							</tr>
						</thead>
						<tbody className="hover:[&>tr]:preset-tonal-primary">
							{slicedSource(sourceData).map((row) => (
								<tr key={row.position}>
									<td>{row.position}</td>
									<td>{row.name}</td>
									<td>{row.weight}</td>
									<td className="text-right">{row.symbol}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				{/* Footer */}
				<footer className="flex justify-between">
					<select
						name="size"
						id="size"
						className="select max-w-[150px]"
						value={size}
						onChange={(e: ChangeEvent<HTMLSelectElement>) => setSize(parseInt(e.target.value))}
					>
						{sizeOptions.map((v: number) => (
							<option key={v} value={v}>
								Items {v}
							</option>
						))}
						<option value={sourceData.length}>Show All</option>
					</select>
					{/* Pagination */}
					<Pagination
						data={sourceData}
						count={sourceData.length}
						page={settings.page}
						pageSize={size}
						onPageChange={setSettings}
						labelEllipsis={<IconEllipsis className="size-4" />}
						labelNext={<IconArrowRight className="size-4" />}
						labelPrevious={<IconArrowLeft className="size-4" />}
						labelFirst={<IconFirst className="size-4" />}
						labelLast={<IconLast className="size-4" />}
					/>
				</footer>
			</section>
		</div>
	);
}
