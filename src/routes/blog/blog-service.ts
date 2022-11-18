// Blog Utility Methods

// HTTP ---

export async function getBlogList(page: number = 2): Promise<any> {
	const http = await fetch(`https://skeleton.ghost.io/ghost/api/content/posts/?key=c76a270f160dbf241b27b81dc2&page=${page}&include=tags`, {
		headers: { 'Accept-Version': 'v5.0' }
	});
	const res = await http.json();
	if (http.ok) return res;
	throw new Error(res);
}

export async function getBlogPost(slug: string): Promise<any> {
	const http = await fetch(
		`https://skeleton.ghost.io/ghost/api/content/posts/slug/${slug}/?key=c76a270f160dbf241b27b81dc2&include=tags,authors`,
		{
			headers: { 'Accept-Version': 'v5.0' }
		}
	);
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
