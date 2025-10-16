export function getLangFromExtension(extension?: string) {
	switch (extension) {
		case 'js':
		case 'jsx':
			return 'javascript';
		case 'ts':
		case 'tsx':
			return 'typescript';
		case 'svelte':
			return 'svelte';
		case 'html':
			return 'html';
		case 'css':
			return 'css';
		case 'json':
			return 'json';
		case 'md':
		case 'mdx':
			return 'markdown';
		default:
			return 'plaintext';
	}
}
