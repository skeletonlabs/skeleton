// Action: Table of Contents Crawler

import { tocStore, tocActiveId } from './stores.js';
import type { tocHeadingLink } from './types.js';

interface arguments {
	/** Set generate mode to automatically set heading IDs. */
	mode?: 'generate' | undefined;
	/** Provide query list of elements. Defaults h2-h6. */
	queryElements?: string;
	/* Provide a reference to the scrollable page element. */
	scrollTarget?: string;
	/** Reload the action when this key value changes. */
	key: unknown;
}

export function tocCrawler(node: HTMLElement, args?: arguments) {
	let queryElements = 'h2, h3, h4, h5, h6';
	let scrollTarget = 'body';
	let headings: NodeListOf<HTMLElement> | undefined;
	let permalinks: tocHeadingLink[] = [];

	function init(): void {
		// Reset headings
		headings = node.querySelectorAll(queryElements);
		// Reset the permalinks array:
		permalinks = [];
		// Set accepted list of query elements
		if (args?.queryElements) queryElements = args.queryElements;
		// Set the desired scroll target to monitor
		if (args?.scrollTarget) scrollTarget = args.scrollTarget;
		// Query and process the headings
		queryHeadings();
	}

	function queryHeadings(): void {
		if (!headings?.length) return;
		headings.forEach((elemHeading: HTMLElement) => {
			// If heading has ignore attribute, skip it
			if (elemHeading.hasAttribute('data-toc-ignore')) return;
			// If generate mode and heading ID not present, assign one
			if (args?.mode === 'generate' && !elemHeading.id) {
				let newHeadingId = elemHeading.firstChild?.textContent
					?.trim()
					.replaceAll(/[^a-zA-Z0-9 ]/g, '')
					.replaceAll(' ', '-')
					.toLowerCase();
				elemHeading.id = newHeadingId || '';
			}
			// Push heading data to the permalink array
			permalinks.push({
				element: elemHeading.nodeName.toLowerCase(),
				id: elemHeading.id,
				text: elemHeading.firstChild?.textContent?.trim() || ''
			});
		});
		// Set the store with the permalink array
		tocStore.set(permalinks);
	}

	// Listens to scroll event, determines top-most heading, provides that to the `tocActiveId` store
	function onWindowScroll(e: any): void {
		if (!headings?.length) return;
		const scrollableTop = e.target.getBoundingClientRect().top || 0;
		const topVisibleHeader = [...headings].find((elemHeading: HTMLElement) => {
			const headerBoundTop = elemHeading.getBoundingClientRect().top;
			const offsetTop = headerBoundTop - scrollableTop;
			if (offsetTop >= 0) return elemHeading;
		});
		if (topVisibleHeader) tocActiveId.set(topVisibleHeader.id);
	}

	// Lifecycle
	init();
	if (scrollTarget) document.querySelector(scrollTarget)?.addEventListener('scroll', onWindowScroll);

	return {
		update(newArgs: any) {
			args = newArgs;
			init();
		}
	};
}
