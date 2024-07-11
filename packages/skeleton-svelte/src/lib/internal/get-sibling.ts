type Type = 'previous' | 'next';

export const getSibling = (element: HTMLElement, selector: string, type: Type = 'next') => {
	const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
	return elements[elements.indexOf(element) + (type === 'next' ? 1 : -1)];
};
