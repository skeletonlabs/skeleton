import { faker } from '@faker-js/faker';
import { Pagination } from '@skeletonlabs/skeleton-react';
import { ArrowRightIcon, ArrowLeftIcon, ArrowLeftToLineIcon, ArrowRightToLineIcon } from 'lucide-react';
import { useState } from 'react';

const users = Array.from({ length: 500 }, (_, i) => ({
	id: i + 1,
	name: faker.person.fullName(),
	email: faker.internet.email(),
	country: faker.location.country(),
}));

const PAGE_SIZE = 5;

export default function Default() {
	const [page, setPage] = useState(1);

	const start = (page - 1) * PAGE_SIZE;
	const end = start + PAGE_SIZE;
	const data = users.slice(start, end);

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
					{data.map((user) => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.country}</td>
						</tr>
					))}
				</tbody>
			</table>
			<Pagination count={users.length} pageSize={PAGE_SIZE} page={page} onPageChange={(event) => setPage(event.page)}>
				<Pagination.PrevTrigger>
					<ArrowLeftIcon className="size-4" />
				</Pagination.PrevTrigger>
				<Pagination.FirstTrigger>
					<ArrowLeftToLineIcon className="size-4" />
				</Pagination.FirstTrigger>
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
				<Pagination.LastTrigger>
					<ArrowRightToLineIcon className="size-4" />
				</Pagination.LastTrigger>
				<Pagination.NextTrigger>
					<ArrowRightIcon className="size-4" />
				</Pagination.NextTrigger>
			</Pagination>
		</div>
	);
}
