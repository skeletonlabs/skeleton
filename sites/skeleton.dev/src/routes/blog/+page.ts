import { getBlogList } from './blog-service';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const blogList = await getBlogList(fetch, 1);
	return blogList;
};
