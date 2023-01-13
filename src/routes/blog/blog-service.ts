// Blog Utility Methods

// HTTP ---

const baseUrl = 'https://skeleton.ghost.io/ghost/api/content';
const ghostKey = 'c76a270f160dbf241b27b81dc2';
const headers = { 'Accept-Version': 'v5.0' };

export async function getBlogList(page = 1): Promise<any> {
	const http = await fetch(`${baseUrl}/posts/?key=${ghostKey}&page=${page}&include=tags`, { headers });
	const res = await http.json();

	if (http.ok) return res;
	throw new Error(res);
}

export async function getBlogPost(slug: string): Promise<any> {
	const http = await fetch(`${baseUrl}/posts/slug/${slug}/?key=${ghostKey}&include=tags,authors`, { headers });
	const res = await http.json();
	if (http.ok) return res;
	throw new Error(res);
}

// Formatters ---

export function blogDateFormatter(date: string): string {
	const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const d: Date = new Date(date);
	return d.toLocaleDateString('en-US', options);
}
