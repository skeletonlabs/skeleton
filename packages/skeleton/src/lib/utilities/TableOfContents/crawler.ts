// Action: Table of Conents Crawler

import { tocStore } from './stores.js';
import type { tocHeadingLink } from './types.js';

interface arguments {
	mode?: string;
	queryElements?: string;
}

export function tocCrawler(node: HTMLElement, args?: arguments) {
	let queryElements = 'h2, h3, h4, h5, h6';

	function init(): void {
		// If generate mode, generate heading permalinks, else query only
		args?.mode === 'generate' ? generate() : query();
		// Set accepted list of query elements
		if (args?.queryElements) queryElements = args.queryElements;
	}

	function generate(): void {
		const headings: NodeListOf<HTMLElement> | undefined = node.querySelectorAll(queryElements);
		const permalinks: tocHeadingLink[] = [];
		headings.forEach((elemHeading: HTMLElement) => {
			// If not ID present, generate one
			if (!elemHeading.id) {
				let newId = elemHeading.firstChild?.textContent
					?.trim()
					.replaceAll(/[^a-zA-Z0-9 ]/g, '')
					.replaceAll(' ', '-')
					.toLowerCase();
				elemHeading.id = newId || '';
			}
			// Push to permalinks list
			permalinks.push({
				element: elemHeading.nodeName.toLowerCase(),
				id: elemHeading.id,
				text: elemHeading.firstChild?.textContent?.trim() || ''
			});
		});
		// Populate the store
		tocStore.set(permalinks);
	}

	// Query all available headings in the target region
	function query(): void {
		const headings: NodeListOf<HTMLElement> | undefined = node.querySelectorAll(queryElements);
		const permalinks: tocHeadingLink[] = [];
		// Scan headings for IDs, push to permalinks list
		headings.forEach((elemHeading: HTMLElement) => {
			if (!elemHeading.id) return;
			permalinks.push({
				element: elemHeading.nodeName.toLowerCase(),
				id: elemHeading.id,
				text: elemHeading.firstChild?.textContent?.trim() || ''
			});
		});
		// Populate the store
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
