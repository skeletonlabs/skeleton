import { getBlogList } from './blog-service';

/** @type {import('./$types').PageLoad} */
export function load() {
	return getBlogList(1);
}
