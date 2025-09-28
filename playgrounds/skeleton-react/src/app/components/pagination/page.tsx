'use client';

import { Pagination } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<Pagination count={5000} pageSize={10}>
			<Pagination.PrevTrigger>Prev</Pagination.PrevTrigger>
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
			<Pagination.NextTrigger>Next</Pagination.NextTrigger>
		</Pagination>
	);
}
