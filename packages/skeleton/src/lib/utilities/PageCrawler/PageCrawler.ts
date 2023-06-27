export function crawlPage(container: HTMLElement, includeQuery: string, excludeQuery: string): HTMLElement[] {
	return [...container.querySelectorAll(`${includeQuery}:not(${excludeQuery})`)] as HTMLElement[];
}
