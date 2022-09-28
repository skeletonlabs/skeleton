// Action: Tooltip

interface ArgsTooltip {
	content: string;
	position: string;
	background?: string;
	text?: string;
	width?: string;
	regionTooltip?: string;
	regionArrow?: string;
}

export function tooltip(node: HTMLElement, args: ArgsTooltip) {
	let elemTooltip: HTMLElement;

	// Map the Args and set default values
	// prettier-ignore
	const {
        content = 'Tooltip',
        position = 'top',
        background = 'bg-primary-500',
        text = 'text-white',
        width = 'w-48',
        regionTooltip = 'regionTooltip',
        regionArrow = 'regionArrow'
    }: ArgsTooltip = args;

	// Create a wrapping DIV element, set relative positioning
	const createElemWrapper = (): void => {
		const elemWrapper = document.createElement('span');
		elemWrapper.classList.add('relative');
		node.parentNode?.insertBefore(elemWrapper, node);
		elemWrapper.appendChild(node);
	};
	createElemWrapper();

	// Create the tooltip element
	const createElemTooltip = (): void => {
		elemTooltip = document.createElement('div');
		elemTooltip.classList.add('tooltip', `tooltip-${position}`, background, text, width, 'hidden', regionTooltip);
		elemTooltip.innerHTML = content;
		node.parentNode?.insertBefore(elemTooltip, node);
	};
	createElemTooltip();

	// Create the tooltip arrow
	const createElemArrow = (): void => {
		const elemArrow = document.createElement('div');
		elemArrow.classList.add(`tooltip-arrow-${position}`, background, regionArrow);
		elemTooltip.append(elemArrow);
	};
	createElemArrow();

	// On mouse over - show the tooltip
	const onMouseOver = (): void => {
		elemTooltip.classList.toggle('hidden');
		setTimeout(() => {
			elemTooltip.classList.toggle('!opacity-100');
		}, 150);
	};

	// On mouse out - hide the tooltip
	const onMouseOut = (): void => {
		elemTooltip.classList.toggle('!opacity-100');
		setTimeout(() => {
			elemTooltip.classList.toggle('hidden');
		}, 150);
	};

	// Event Listner
	node.addEventListener('mouseover', onMouseOver);
	node.addEventListener('mouseout', onMouseOut);

	// Lifecycle
	return {
		update(newArgs: ArgsTooltip) {
			args = newArgs;
		},
		destroy() {
			node.removeEventListener('mouseover', onMouseOver);
			node.removeEventListener('mouseout', onMouseOut);
		}
	};
}
