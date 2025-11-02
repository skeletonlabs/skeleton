export function getComponentIdFromURL(url: URL) {
	const segments = url.pathname.split('/').filter(Boolean);
	return segments.pop()?.split('.').at(0);
}
