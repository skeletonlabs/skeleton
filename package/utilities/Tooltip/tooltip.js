// Action: Tooltip
export function tooltip(node, args) {
    const animDuration = 150;
    let elemTooltip;
    // Map the Args and provide default values
    // prettier-ignore
    const { content = '(tooltip)', position = 'top', inline = true, 
    // Regions
    regionContainer = 'regionContainer', regionTooltip = 'regionTooltip', regionArrow = 'regionArrow' } = args;
    // Create a wrapping element, set relative positioning
    const createElemContainer = () => {
        const elemContainer = document.createElement(inline ? 'span' : 'div');
        elemContainer.classList.add('tooltip-container', 'relative', regionContainer);
        node.parentNode?.insertBefore(elemContainer, node);
        elemContainer.appendChild(node);
    };
    createElemContainer();
    // Create the tooltip element
    // prettier-ignore
    const createElemTooltip = () => {
        elemTooltip = document.createElement('div');
        elemTooltip.classList.add('tooltip', `tooltip-${position}`, 'hidden', regionTooltip);
        if (args.background) {
            elemTooltip.classList.add(args.background);
        }
        if (args.color)
            elemTooltip.classList.add(args.color);
        if (args.width)
            elemTooltip.classList.add(args.width);
        if (args.padding)
            elemTooltip.classList.add(args.padding);
        if (args.shadow)
            elemTooltip.classList.add(args.shadow);
        if (args.rounded)
            elemTooltip.classList.add(args.rounded);
        elemTooltip.setAttribute('role', 'tooltip');
        elemTooltip.setAttribute('data-testid', 'tooltip');
        elemTooltip.innerHTML = content;
        node.parentNode?.insertBefore(elemTooltip, node);
    };
    createElemTooltip();
    // Create the tooltip arrow
    // prettier-ignore
    const createElemArrow = () => {
        const elemArrow = document.createElement('div');
        elemArrow.classList.add(`tooltip-arrow-${position}`, regionArrow);
        if (args.background)
            elemArrow.classList.add(args.background);
        elemTooltip.append(elemArrow);
    };
    createElemArrow();
    // -- State
    // On mouse over - show the tooltip
    const onMouseEnter = () => {
        elemTooltip.classList.remove('hidden');
        setTimeout(() => {
            elemTooltip.classList.add('!opacity-100');
        }, animDuration);
        stateEventHandler(true);
    };
    // On mouse out - hide the tooltip
    const onMouseLeave = () => {
        elemTooltip.classList.remove('!opacity-100');
        setTimeout(() => {
            elemTooltip.classList.add('hidden');
        }, animDuration);
        stateEventHandler(false);
    };
    const stateEventHandler = (state) => {
        if (args.state)
            args.state({ trigger: node, state });
    };
    // Ally ---
    // A11y Input Handler
    const onWindowKeyDown = (event) => {
        if (event.code === 'Escape')
            onMouseLeave();
    };
    // Event Listners ---
    node.addEventListener('mouseenter', onMouseEnter);
    node.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('keydown', onWindowKeyDown);
    // Lifecycle
    return {
        update(newArgs) {
            args = newArgs;
        },
        destroy() {
            node.removeEventListener('mouseenter', onMouseEnter);
            node.removeEventListener('mouseleave', onMouseLeave);
            window.removeEventListener('keydown', onWindowKeyDown);
        }
    };
}
