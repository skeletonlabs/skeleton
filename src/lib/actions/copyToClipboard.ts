export function copyToClipboard(node: HTMLElement, data: any): void {
	const click = async () => {
		if (data)
			try {
				await navigator.clipboard.writeText(data);
				node.dispatchEvent(new CustomEvent('useclipboard', { detail: data }));
			} catch (e) {
				node.dispatchEvent(new CustomEvent('useclipboard-error', { detail: e }));
			}
	};

	node.addEventListener('click', click, true);
}