// Blog Utility Methods

import type { BlogList } from './types';

// HTTP ---

const baseUrl = 'https://skeleton.ghost.io/ghost/api/content';
const ghostKey = 'c76a270f160dbf241b27b81dc2';
const headers = { 'Accept-Version': 'v5.0' };

export async function getBlogList(page = 1) {
	const http = await fetch(`${baseUrl}/posts/?key=${ghostKey}&page=${page}&include=tags`, { headers });
	const res = (await http.json()) as BlogList;
	if (http.ok) return res;
	throw new Error(http.statusText);
}

export async function getBlogPost(slug: string) {
	const http = await fetch(`${baseUrl}/posts/slug/${slug}/?key=${ghostKey}&include=tags,authors`, { headers });
	const res = (await http.json()) as BlogList;
	if (http.ok) return res;
	throw new Error(http.statusText);
}

// Formatters ---

export function blogDateFormatter(date: string): string {
	const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const d: Date = new Date(date);
	return d.toLocaleDateString('en-US', options);
}
