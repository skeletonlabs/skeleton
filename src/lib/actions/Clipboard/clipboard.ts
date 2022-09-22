// Action: Clipboard

// prettier-ignore
export function clipboard(node: HTMLElement, args: any): void {
	node.addEventListener('click', () => {
		// Handle `data-clipboard` target based on object key
		if (typeof args === 'object') {
			// Element Inner HTML
			if (args.hasOwnProperty('element')){
				const element: any = document.querySelector(`[data-clipboard="${args.element}"]`);
				copyToClipboard(element?.innerHTML);
				return;
			}
			// Form Input Value
			if (args.hasOwnProperty('input')){
				const input: any = document.querySelector(`[data-clipboard="${args.input}"]`);
				copyToClipboard(input?.value);
				return;
			}
		}
		// Handle everything else.
		copyToClipboard(args);
	});
}

// Shared copy method
function copyToClipboard(data: any): void {
	navigator.clipboard.writeText(String(data));
}
