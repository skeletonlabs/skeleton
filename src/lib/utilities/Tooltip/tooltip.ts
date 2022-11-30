// Action: Tooltip

export interface ArgsTooltip {
	/** The HTML content of the tooltip. */
	content: string;
	/** Provide a value of: top | bottom | left | right */
	position?: string;
	/** Sets the wrapping element to be either inline or block */
	inline?: boolean;
	/** Provide an optional callback function to handle open/close state changes. */
	state?: (e: { trigger: HTMLElement; state: boolean }) => void;

	// Style Overrides
	/** Provide a class to set the background color. */
	background?: string;
	/** Provide a class to set the text color. */
	color?: string;
	/** Provide a class to set the width. */
	width?: string;
	/** Provide a class to set the padding. */
	padding?: string;
	/** Provide a class to set the box shadow. */
	shadow?: string;
	/** Provide a class to set the border radius. */
	rounded?: string;

	// Regions
	/** Provide arbitrary classes to the container element. */
	regionContainer?: string;
	/** Provide arbitrary classes to the tooltip element. */
	regionTooltip?: string;
	/** Provide arbitrary classes to the tooltip arrow element. */
	regionArrow?: string;
}

export function tooltip(node: HTMLElement, args: ArgsTooltip) {
	const animDuration = 150;
	let elemTooltip: HTMLElement;

	// Map the Args and provide default values
	// prettier-ignore
	const {
		content = '(tooltip)',
		position = 'top',
		inline = true,
		// Regions
		regionContainer = 'regionContainer',
		regionTooltip = 'regionTooltip',
		regionArrow = 'regionArrow'
	}: ArgsTooltip = args;

	// Create a wrapping element, set relative positioning
	const createElemContainer = (): void => {
		const elemContainer = document.createElement(inline ? 'span' : 'div');
		elemContainer.classList.add('tooltip-container', 'relative', regionContainer);
		node.parentNode?.insertBefore(elemContainer, node);
		elemContainer.appendChild(node);
	};
	createElemContainer();

	// Create the tooltip element
	// prettier-ignore
	const createElemTooltip = (): void => {
		elemTooltip = document.createElement('div');
		elemTooltip.classList.add('tooltip', `tooltip-${position}`, 'hidden', regionTooltip);
		if (args.background) { elemTooltip.classList.add(args.background); }
		if (args.color) elemTooltip.classList.add(args.color);
		if (args.width) elemTooltip.classList.add(args.width);
		if (args.padding) elemTooltip.classList.add(args.padding);
        if (args.shadow) elemTooltip.classList.add(args.shadow);
        if (args.rounded) elemTooltip.classList.add(args.rounded);
		elemTooltip.setAttribute('role', 'tooltip');
		elemTooltip.setAttribute('data-testid', 'tooltip');
		elemTooltip.innerHTML = content;
		node.parentNode?.insertBefore(elemTooltip, node);
	};
	createElemTooltip();

	// Create the tooltip arrow
	// prettier-ignore
	const createElemArrow = (): void => {
		const elemArrow = document.createElement('div');
		elemArrow.classList.add(`tooltip-arrow-${position}`, regionArrow);
        if (args.background) elemArrow.classList.add(args.background);
		elemTooltip.append(elemArrow);
	};
	createElemArrow();

	// -- State

	// On mouse over - show the tooltip
	const onMouseEnter = (): void => {
		elemTooltip.classList.remove('hidden');
		setTimeout(() => {
			elemTooltip.classList.add('!opacity-100');
		}, animDuration);
		stateEventHandler(true);
	};

	// On mouse out - hide the tooltip
	const onMouseLeave = (): void => {
		elemTooltip.classList.remove('!opacity-100');
		setTimeout(() => {
			elemTooltip.classList.add('hidden');
		}, animDuration);
		stateEventHandler(false);
	};

	const stateEventHandler = (state: boolean): void => {
		if (args.state) args.state({ trigger: node, state });
	};

	// Ally ---

	// A11y Input Handler
	const onWindowKeyDown = (event: KeyboardEvent): void => {
		if (event.code === 'Escape') onMouseLeave();
	};

	// Event Listners ---

	node.addEventListener('mouseenter', onMouseEnter);
	node.addEventListener('mouseleave', onMouseLeave);
	window.addEventListener('keydown', onWindowKeyDown);

	// Lifecycle
	return {
		update(newArgs: ArgsTooltip) {
			args = newArgs;
		},
		destroy() {
			node.removeEventListener('mouseenter', onMouseEnter);
			node.removeEventListener('mouseleave', onMouseLeave);
			window.removeEventListener('keydown', onWindowKeyDown);
		}
	};
}
