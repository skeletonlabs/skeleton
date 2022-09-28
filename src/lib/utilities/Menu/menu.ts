// Action: Menu
// https://svelte.dev/repl/0ace7a508bd843b798ae599940a91783?version=3.16.7

interface ArgsMenu {
	// The value of 'x' from data-menu-[x]
	menu: string;
	// Origin - TRUE: fixed | FALSE: auto
	fixed?: boolean;
	// Clicks inside body don't close menu
	interactive?: boolean;
}

// prettier-ignore
export function menu(node: HTMLElement, args: ArgsMenu) {
    const elemMenu: HTMLElement | null = document.querySelector(`[data-menu="${args.menu}"]`);
	
	const onTriggerClick = (): void => {
        autoUpdateOrigin();
		toggleMenu();
	}
	
	const toggleMenu = (): void => {
        if (elemMenu === null) return;
		elemMenu.style.display = getComputedStyle(elemMenu).display === 'none' ? 'block' : 'none';
	}
	
	const onWindowClick = (event: any): void => {
		args.interactive === true ? interactiveClickHandler(event) : standardClickHandler();
	}
	
	const standardClickHandler = (): void => {
        if (elemMenu === null) return;
		elemMenu.style.display = 'none';
	}
	
	const interactiveClickHandler = (event: any): void => {
		const outsideNode = node && !node.contains(event.target);
		const outsideMenu = elemMenu && !elemMenu.contains(event.target);
		if (outsideNode && outsideMenu) {
			elemMenu.style.display = 'none';
		}
	}

    const autoUpdateOrigin = (): void => {
        if (args.fixed !== true && !elemMenu?.classList.contains('hidden')) {
            // Get the Menu's bounds
            const elemTriggerBounds: DOMRect = node.getBoundingClientRect();
            // Determine vertical and horizontal values
            const vert: string = elemTriggerBounds.y < window.innerHeight / 2 ? 't' : 'b'; // top/bottom
            const horz: string = elemTriggerBounds.x < window.innerWidth / 2 ? 'l' : 'r'; // left/right
            // Strip and apply only the relevant class
            elemMenu?.classList.remove('menu-tl', 'menu-tr', 'menu-bl', 'menu-br');
            elemMenu?.classList.add(`menu-${vert}${horz}`);
        }
    }
	
	// Events
    autoUpdateOrigin(); // on init
    window.addEventListener('resize', autoUpdateOrigin, true)
	window.addEventListener('click', onWindowClick, true);
	node.addEventListener('click', onTriggerClick);
	
	return {
		update: (newArgs: ArgsMenu) => { args = newArgs },
		destroy: (): void => {
            window.removeEventListener('resize', onWindowClick, true);
			window.removeEventListener('click', onWindowClick, true);
			node.removeEventListener('click', onTriggerClick);
		}
	}
}
