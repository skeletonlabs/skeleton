export function clipboard(node: HTMLElement, args: any): void {
	node.addEventListener('click', () => {
		if (typeof args === 'object') {
			const elemTest = document.querySelector(`[data-copy-target="${args.target}"]`);
			console.log(elemTest?.innerHTML);
			navigator.clipboard.writeText(String(elemTest?.innerHTML));
		} else {
			navigator.clipboard.writeText(String(args));
			console.log('text:', args);
		}
	});
}