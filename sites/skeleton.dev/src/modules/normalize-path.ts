export function removeTrailingSlash(path: string) {
	return path.replace(/\/$/, '');
}
