import type { ActionReturn } from 'svelte/action';

// Action: Clipboard
type ClipboardArgs = string | { element: string } | { input: string };
type ClipboardAttributes = { 'on:copyComplete'?: () => void };
export function clipboard(node: HTMLElement, args: ClipboardArgs): ActionReturn<ClipboardArgs, ClipboardAttributes> {
	if (!window.isSecureContext) {
		throw new Error(
			'Clipboard action failed: app not running in secure context, see: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard'
		);
	}
	const fireCopyCompleteEvent = () => {
		node.dispatchEvent(new CustomEvent('copyComplete'));
	};
	const onClick = () => {
		// Handle `data-clipboard` target based on object key
		if (typeof args === 'object') {
			// Element Inner HTML
			if ('element' in args) {
				const element = document.querySelector<HTMLElement>(`[data-clipboard="${args.element}"]`);
				if (!element) throw new Error(`Missing HTMLElement with an attribute of [data-clipboard="${args.element}"]`);
				copyToClipboard(element.innerHTML, 'text/html').then(fireCopyCompleteEvent);
				return;
			}
			// Form Input Value
			if ('input' in args) {
				const input = document.querySelector<HTMLInputElement>(`[data-clipboard="${args.input}"]`);
				if (!input) throw new Error(`Missing HTMLInputElement with an attribute of [data-clipboard="${args.input}"]`);
				copyToClipboard(input.value).then(fireCopyCompleteEvent);
				return;
			}
		}
		// Handle everything else.
		copyToClipboard(args).then(fireCopyCompleteEvent);
	};
	// Event Listener
	node.addEventListener('click', onClick);
	// Lifecycle
	return {
		update(newArgs: ClipboardArgs) {
			args = newArgs;
		},
		destroy() {
			node.removeEventListener('click', onClick);
		}
	};
}

// Shared copy method
async function copyToClipboard(data: BlobPart, mimeType = 'text/plain') {
	if (navigator.clipboard.write) {
		await navigator.clipboard.write([
			new ClipboardItem({
				[mimeType]: new Blob([data], {
					type: mimeType
				}),
				['text/plain']: new Blob([data], {
					type: 'text/plain'
				})
			})
		]);
	} else {
		// fallback since .writeText has wider browser support
		await new Promise((resolve) => {
			resolve(navigator.clipboard.writeText(String(data)));
		});
	}
}
