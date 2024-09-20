import { getHighlighter } from 'shiki';
import MoonlightDark from '$lib/components/common/CodeBlock/moonlight-dark.json';

export async function load() {
	const highlighter = await getHighlighter({
		langs: ['css', 'javascript', 'typescript'],
		// @ts-expect-error - Shiki theme type is annoyingly strict
		themes: [MoonlightDark]
	});
	return { highlighter };
}

export const prerender = true;
