export function crawlPage(container: HTMLElement, includeQuery: string, excludeQuery: string): HTMLElement[] {
	console.log(excludeQuery);
	console.log([...container.querySelectorAll(`h2,h3,h4,h5,h6:not(.toc-demo)`)] as HTMLElement[]);
	console.log(`${includeQuery}:not(${excludeQuery})`);
	return [...container.querySelectorAll(`${includeQuery}:not(${excludeQuery})`)] as HTMLElement[];
}
