export const getLastElement = (selector: string) => {
	return Array.from(document.querySelectorAll<HTMLElement>(selector)).at(-1);
};

export const getFirstElement = (selector: string) => {
	return Array.from(document.querySelectorAll<HTMLElement>(selector))[0];
};

export const getPreviousElement = (selector: string, element: HTMLElement, loop = true) => {
	const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
	const previous = elements[elements.indexOf(element) - 1];
	if (!loop) {
		return previous;
	}
	return previous ?? elements.at(-1);
};

export const getNextElement = (selector: string, element: HTMLElement, loop = true) => {
	const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
	const next = elements[elements.indexOf(element) + 1];
	if (!loop) {
		return next;
	}
	return next ?? elements[0];
};
