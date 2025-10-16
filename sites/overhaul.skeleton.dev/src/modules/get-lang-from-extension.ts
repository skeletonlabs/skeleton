export function getLangFromExtension(extension?: string) {
	switch (extension) {
		case 'ts':
			return 'typescript';
		case 'tsx':
			return 'tsx';
		case 'svelte':
			return 'svelte';
		default:
			return 'plaintext';
	}
}
