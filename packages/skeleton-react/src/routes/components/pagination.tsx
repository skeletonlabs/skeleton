import { Pagination } from '$lib/components/Pagination/Pagination.js';
import { useState } from 'react';

export function Component() {
	interface SourceData {
		position: string;
		name: string;
		symbol: string;
		atomic_no: string;
	}

	const sourceData: SourceData[] = [
		{ position: '0', name: 'Iron', symbol: 'Fe', atomic_no: '26' },
		{ position: '2', name: 'Cobalt', symbol: 'Co', atomic_no: '27' },
		{ position: '3', name: 'Rhodium', symbol: 'Rh', atomic_no: '45' },
		{ position: '4', name: 'Iodine', symbol: 'I', atomic_no: '53' },
		{ position: '5', name: 'Radon', symbol: 'Rn', atomic_no: '86' },
		{ position: '6', name: 'Technetium', symbol: 'Tc', atomic_no: '43' }
	];

	const [state, setState] = useState({ page: 1, pageSize: 3 });

	function slicedSource(source: SourceData[]): SourceData[] {
		return source.slice((state.page - 1) * state.pageSize, state.page * state.pageSize);
	}

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Pagination</h1>
			</header>
			<section className="space-y-4">
				<div className="table-wrap">
					<table className="table caption-bottom">
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
									<td>{row.symbol}</td>
									<td>{row.name}</td>
									<td className="text-right">{row.atomic_no}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="flex justify-center">
					<Pagination data={sourceData} count={sourceData.length} page={state.page} pageSize={state.pageSize} onPageChange={setState} />
				</div>
			</section>
		</div>
	);
}
