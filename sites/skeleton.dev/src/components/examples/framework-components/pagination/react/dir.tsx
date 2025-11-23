import { users } from './data';
import { Pagination } from '@skeletonlabs/skeleton-react';
import { ArrowRightIcon, ArrowLeftIcon } from 'lucide-react';
import { useState } from 'react';

const PAGE_SIZE = 5;

export default function Dir() {
	const [page, setPage] = useState(1);

	const start = (page - 1) * PAGE_SIZE;
	const end = start + PAGE_SIZE;
	const paginatedUsers = users.slice(start, end);

	return (
		<div className="grid gap-4 w-full place-items-center">
			<table className="table table-auto">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Country</th>
					</tr>
				</thead>
				<tbody>
					{paginatedUsers.map((user) => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.country}</td>
						</tr>
					))}
				</tbody>
			</table>
			<Pagination count={users.length} pageSize={PAGE_SIZE} page={page} onPageChange={(event) => setPage(event.page)} dir="rtl">
				<Pagination.PrevTrigger>
					<ArrowRightIcon className="size-4" />
				</Pagination.PrevTrigger>
				<Pagination.Context>
					{(pagination) =>
						pagination.pages.map((page, index) =>
							page.type === 'page' ? (
								<Pagination.Item key={index} {...page}>
									{page.value}
								</Pagination.Item>
							) : (
								<Pagination.Ellipsis key={index} index={index}>
									&#8230;
								</Pagination.Ellipsis>
							),
						)
					}
				</Pagination.Context>
				<Pagination.NextTrigger>
					<ArrowLeftIcon className="size-4" />
				</Pagination.NextTrigger>
			</Pagination>
		</div>
	);
}
