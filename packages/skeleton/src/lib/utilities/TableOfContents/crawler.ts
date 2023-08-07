// Action: Table of Contents Crawler

import { tocStore } from './stores.js';
import type { tocHeadingLink } from './types.js';

interface arguments {
	mode?: string;
	queryElements?: string;
}

export function tocCrawler(node: HTMLElement, args?: arguments) {
	let queryElements = 'h2, h3, h4, h5, h6';
	let permalinks: tocHeadingLink[] = [];

	function init(): void {
		// Reset the permalinks array:
		permalinks = [];
		// Set accepted list of query elements
		if (args?.queryElements) queryElements = args.queryElements;
		// Query and process the headings
		queryHeadings();
	}

	function queryHeadings(): void {
		const headings: NodeListOf<HTMLElement> | undefined = node.querySelectorAll(queryElements);
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

	// Lifecycle
	init();

	return {
		update(newArgs: any) {
			args = newArgs;
			init();
		}
	};
}
