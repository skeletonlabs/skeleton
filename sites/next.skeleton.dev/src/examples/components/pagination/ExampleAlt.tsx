import { Pagination } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const sourceData = [{ id: 0 }, { id: 1 }, { id: 3 }, { id: 4 }];

	return <Pagination data={sourceData} count={sourceData.length} page={1} pageSize={3} alternative />;
};
