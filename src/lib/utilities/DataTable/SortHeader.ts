// Action: Data Table - Sort Header

export function sortHeader(node: HTMLElement, args: any) {
	const onClick = () => {};
	// Event Listner
	node.addEventListener('click', onClick);
	// Lifecycle
	return {
		update(newArgs: any) {
			args = newArgs;
		},
		destroy() {
			node.removeEventListener('click', onClick);
		}
	};
}
