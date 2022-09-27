// Action: Menu
// https://svelte.dev/repl/0ace7a508bd843b798ae599940a91783?version=3.16.7

interface ArgsMenu {
	// The value of 'x' from data-menu-[x]
	target: string;
	// Origin - TRUE: fixed | FALSE: auto
	fixed?: boolean;
}

// prettier-ignore
export function menu(node: HTMLElement, args: ArgsMenu) {
    let elemMenu: HTMLElement | null | undefined = node.parentNode?.querySelector(`[data-menu-${args.target}]`);
    
    // Auto Set Origin
    function setAutoOrigin(): void {
        if (args.fixed !== true && !elemMenu?.classList.contains('hidden')) {
            // Get the Menu's bounds
            const elemTriggerBounds: DOMRect = node.getBoundingClientRect();
            // Determine vertical and horizontal values
            const vert: string = elemTriggerBounds.y < window.innerHeight / 2 ? 't' : 'b'; // top/bottom
            const horz: string = elemTriggerBounds.x < window.innerWidth / 2 ? 'l' : 'r'; // left/right
            // Apply new origin class
            elemMenu?.classList.remove('menu-tl', 'menu-tr', 'menu-bl', 'menu-br');
            elemMenu?.classList.add(`menu-${vert}${horz}`);
        }
    }
    
	// On Trigger Click
	const onTriggerClick = (e: any): void => {
        elemMenu?.classList.toggle('hidden');
        setAutoOrigin();
	};

    // On Window Click
    const onWindowClick = (e: any) => {
        if (e.target !== node) {
            elemMenu?.classList.add('hidden');
        }
    }

	// Event Listners
    setAutoOrigin();
    window.addEventListener('resize', setAutoOrigin, true)
    window.addEventListener('click', onWindowClick, true);
	node.addEventListener('click', onTriggerClick);

	// Lifecycle
	return {
		update(newArgs: ArgsMenu) { args = newArgs; },
		destroy() {
            window.removeEventListener('resize', onWindowClick, true);
            window.removeEventListener('click', onWindowClick, true);
            node.removeEventListener('click', onTriggerClick);
        }
	};
}
