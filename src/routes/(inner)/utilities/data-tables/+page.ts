/** @type {import('./$types').PageLoad} */
export function load() {
	async function getPlaceholderPosts(): Promise<any> {
		const http = await fetch('https://jsonplaceholder.typicode.com/user/1/posts');
		const res = await http.json();
		if (http.ok) return res;
		throw new Error(res);
	}
	return getPlaceholderPosts();
}
