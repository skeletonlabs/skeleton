/**
 * Strip Shiki control comments from code before copying
 * Removes comments like [!code ++], [!code --], [!code word:...], etc.
 * Based on: https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/components/shiki.ts
 */
export function stripShikiComments(code: string): string {
	const commentPattern = /\/\*\s*(?=\[!)(.*?)\s*\*\/\s*$|<!--\s*(?=\[!)(.*?)\s*-->\s*$|(?:#|\/\/)\s*(?=\[!)(.*)\s*$/g;
	const controlPattern = /^\[!code\s+([^:]+)(?::(.*))?\]$/;

	if (!code.includes('[!code ')) return code;

	const lines = code.split('\n');
	let result = '';

	for (let i = 0; i < lines.length; i++) {
		let line = lines[i];
		let removed = false;
		let changed = false;

		for (const c of line.matchAll(commentPattern)) {
			const content = c[1] ?? c[2] ?? c[3];
			const match = content.match(controlPattern);
			if (!match) continue;

			const kind = match[1];
			const params = match[2];

			// If we see a `[!code --]` or `[!code --:N]` directive it means we need
			// to remove N lines starting at the current line
			if (kind === '--') {
				removed = true;
				const count = parseInt(params ?? '1', 10) - 1;
				if (!isNaN(count)) {
					i += count;
				}
				break;
			}

			// Remove the comment from the current line
			line = line.slice(0, c.index) + line.slice(c.index! + c[0].length);
			changed = true;
		}

		// The current line was removed so we can skip it
		if (removed) continue;

		// This line only contained control comments which have been removed
		if (changed && line.trim() === '') continue;

		result += line;
		result += '\n';
	}

	return result.trim();
}
