// Action: Table of Contents Crawler

import { tocStore, tocActiveId } from './stores.js';
import type { TOCHeadingLink } from './types.js';

interface TOCCrawlerArgs {
	/** Set generate mode to automatically set heading IDs. */
	mode?: 'generate' | undefined;
	/** Provide query list of elements. Defaults h2-h6. */
	queryElements?: string;
	/* Provide a reference to the scrollable page element. */
	scrollTarget?: string;
	/** Reload the action when this key value changes. */
	key?: unknown;
	/* Provide a prefix for ToC links, to help keep them unique. */
	prefix?: string;
	/* Provide a suffix for ToC links, to help keep them unique. */
	suffix?: string;
}

export function tocCrawler(node: HTMLElement, args?: TOCCrawlerArgs) {
	let queryElements = 'h2, h3, h4, h5, h6';
	let scrollTarget = 'body';
	let headings: NodeListOf<HTMLElement> | undefined;
	let permalinks: TOCHeadingLink[] = [];

	function init(): void {
		// Set accepted list of query elements
		// (IMPORTANT: must proceed resetting `headings` below)
		if (args?.queryElements) queryElements = args.queryElements;
		// Set the desired scroll target to monitor
		if (args?.scrollTarget) scrollTarget = args.scrollTarget;

		// Reset local values
		headings = node.querySelectorAll(queryElements);
		permalinks = [];

		// Query and process the headings
		queryHeadings();
	}

	function queryHeadings(): void {
		headings?.forEach((elemHeading) => {
			// If heading has ignore attribute, skip it
			if (elemHeading.hasAttribute('data-toc-ignore')) return;
			// If generate mode and heading ID not present, assign one
			if (args?.mode === 'generate' && !elemHeading.id) {
				const newHeadingId = elemHeading.firstChild?.textContent
					?.trim()
					.replaceAll(/[^a-zA-Z0-9 ]/g, '')
					.replaceAll(' ', '-')
					.toLowerCase();
				const prefix = args.prefix ? `${args.prefix}-` : '';
				const suffix = args.suffix ? `-${args.suffix}` : '';
				elemHeading.id = prefix + newHeadingId + suffix;
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
	function onWindowScroll(e: WindowEventMap['scroll']): void {
		if (!headings?.length) return;
		const targetElem = e.target;
		if (!(targetElem instanceof HTMLElement)) throw new Error('scrollTarget is not an HTMLElement');

		const scrollableTop = targetElem.getBoundingClientRect().top || 0;
		const headingSizeThreshold = 40; // px

		for (const elemHeading of headings) {
			const headerBoundTop = elemHeading.getBoundingClientRect().top;
			const offsetTop = headerBoundTop - scrollableTop + headingSizeThreshold;
			if (offsetTop >= 0) return tocActiveId.set(elemHeading.id);
		}
	}

	// Lifecycle
	init();
	if (scrollTarget) document.querySelector(scrollTarget)?.addEventListener('scroll', onWindowScroll);

	return {
		update(newArgs: TOCCrawlerArgs) {
			args = newArgs;
			init();
		},
		destroy() {
			if (scrollTarget) document.querySelector(scrollTarget)?.removeEventListener('scroll', onWindowScroll);
		}
	};
}
