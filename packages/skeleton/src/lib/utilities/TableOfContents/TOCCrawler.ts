import { writable, type Writable } from 'svelte/store';
import type { TOCLink } from './types.js';
import type { CssClasses } from '../../types.js';

// Use a store to save scanned elements
export const tocStore: Writable<TOCLink[]> = writable([]);

export function crawl(node: HTMLElement, generate: boolean) {
	function getIndent(heading: string): CssClasses {
		switch (heading) {
			case 'h3':
				return 'ml-3';
			case 'h4':
				return 'ml-6';
			case 'h5':
				return 'ml-9';
			case 'h6':
				return 'ml-12';
			default:
				return '';
		}
	}
	function generateLinks(): void {
		// get all headings h2-h6
		let headings = [...node.querySelectorAll('h2,h3,h4,h5,h6')] as HTMLHeadingElement[];
		// filter out headings with attribute 'toc-ignore'
		headings = headings.filter((h) => !h.hasAttribute('data-toc-ignore'));

		const links: TOCLink[] = [];

		headings.forEach((h) => {
			// create anchor
			const anchor = document.createElement('a');
			anchor.setAttribute('id', h.id);
			anchor.className = 'permalink';

			// create span
			const span = document.createElement('span');
			span.className = 'hidden';
			span.textContent = 'permalink';

			// append span to anchor
			anchor.appendChild(span);

			// append anchor to heading
			h.appendChild(anchor);

			// add link to list
			links.push({
				href: `#${anchor.id}`,
				text: h.innerText || anchor.id,
				indent: getIndent(h.tagName.toLowerCase())
			});
		});

		tocStore.set(links);
	}

	function scanLinks(): void {
		const permalinks = [...node.querySelectorAll('a.permalink')] as HTMLAnchorElement[];
		const links: TOCLink[] = [];
		permalinks.forEach((permalink) => {
			const parentHeading = permalink.parentElement as HTMLElement;
			// add link to list
			links.push({
				href: `#${permalink.id}`,
				text: parentHeading.innerText || permalink.id,
				indent: getIndent(parentHeading.tagName.toLowerCase())
			});
		});

		tocStore.set(links);
	}

	if (generate) generateLinks();
	else scanLinks();

	return {
		update() {
			scanLinks();
		}
	};
}
