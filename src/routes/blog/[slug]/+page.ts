import { getBlogPost } from '../blog-service';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return getBlogPost(params.slug);
}
