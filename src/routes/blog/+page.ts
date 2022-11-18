/** @type {import('./$types').PageLoad} */
export function load({}) {
	async function getBlogList(): Promise<any> {
		const http = await fetch('https://skeleton.ghost.io/ghost/api/content/posts/?key=c76a270f160dbf241b27b81dc2&include=tags', {
			headers: { 'Accept-Version': 'v5.0' }
		});
		const res = await http.json();
		if (http.ok) return res;
		throw new Error(res);
	}
	return getBlogList();
}
