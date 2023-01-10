import { getBlogPost } from '../blog-service';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	return getBlogPost(params.slug);
};
