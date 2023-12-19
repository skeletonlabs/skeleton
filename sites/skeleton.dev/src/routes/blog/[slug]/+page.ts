import { getBlogPost } from '../blog-service';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const blogPost = await getBlogPost(fetch, params.slug);
	return blogPost;
};
