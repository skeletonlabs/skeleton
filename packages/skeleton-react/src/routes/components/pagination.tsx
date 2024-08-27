import { Pagination } from '$lib/components/Pagination/Pagination.js';
import { ChangeEvent, useState } from 'react';
import { ArrowLeft as IconArrowLeft, ArrowRight as IconArrowRight, Ellipsis as IconEllipsis } from 'lucide-react';

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

	const [size, setSize] = useState<number>(3);
	const [state, setState] = useState({ page: 1, pageSize: size });

	function slicedSource(source: SourceData[]) {
		return source.slice((state.page - 1) * size, state.page * size);
	}

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
				{/* Pagination */}
				<footer className="flex justify-between">
					<select
						name="size"
						id="size"
						className="select max-w-[150px]"
						value={size}
						onChange={(e: ChangeEvent<HTMLSelectElement>) => setSize(parseInt(e.target.value))}
					>
						<option value={1}>Items 1</option>
						<option value={3}>Items 3</option>
						<option value={5}>Items 5</option>
						<option value={10}>Items 10</option>
						<option value={100}>Items 100</option>
					</select>
					<Pagination
						data={sourceData}
						count={sourceData.length}
						page={state.page}
						pageSize={size}
						onPageChange={setState}
						labelPrevious={<IconArrowLeft />}
						labelEllipsis={<IconEllipsis />}
						labelNext={<IconArrowRight />}
					/>
				</footer>
			</section>
		</div>
	);
}
