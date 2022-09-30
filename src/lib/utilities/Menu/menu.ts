// Action: Menu
// https://svelte.dev/repl/0ace7a508bd843b798ae599940a91783?version=3.16.7

interface ArgsMenu {
	/** The value of 'x' from data-menu-[x] */
	menu: string;
	/** Origin - TRUE: fixed | FALSE: auto */
	fixed?: boolean;
	/** Clicks inside body will not close window */
	interactive?: boolean;
}

// prettier-ignore
export function menu(node: HTMLElement, args: ArgsMenu) {
    const elemMenu: HTMLElement | null = document.querySelector(`[data-menu="${args.menu}"]`);
	if (!elemMenu) return;

	const onInit = (): void => {
		autoUpdateOrigin();
		// Apply a11y attributes
		elemMenu.setAttribute('role', 'menu');
	}

	// Menu Open Close States ---
	
	const menuToggle = (): void => {
		elemMenu.style.display = getComputedStyle(elemMenu).display === 'none' ? 'block' : 'none';
	}

	const menuClose = (): void => {
		elemMenu.style.display = 'none';
	}
	
	// Click Handlers ---

	const onTriggerClick = (): void => {
        autoUpdateOrigin();
		menuToggle();
	}

	const onWindowClick = (event: any): void => {
		args.interactive === true ? interactiveClickHandler(event) : standardClickHandler();
	}
	
	// Interactive FALSE - any click closes the menu
	const standardClickHandler = (): void => {
		elemMenu.style.display = 'none';
	}
	
	// Interactive TRUE - clicks outside close menu
	const interactiveClickHandler = (event: any): void => {
		const outsideNode = node && !node.contains(event.target);
		const outsideMenu = elemMenu && !elemMenu.contains(event.target);
		if (outsideNode && outsideMenu) { menuClose(); }
	}

	// Menu - Set auto origin ---

    const autoUpdateOrigin = (): void => {
        if (args.fixed && !elemMenu.classList.contains('hidden')) {
            // Get the Menu's bounds
            const elemTriggerBounds: DOMRect = node.getBoundingClientRect();
            // Determine vertical and horizontal values
            const vert: string = elemTriggerBounds.y < window.innerHeight / 2 ? 't' : 'b'; // top/bottom
            const horz: string = elemTriggerBounds.x < window.innerWidth / 2 ? 'l' : 'r'; // left/right
            // Strip and apply only the relevant class
            elemMenu.classList.remove('menu-tl', 'menu-tr', 'menu-bl', 'menu-br');
            elemMenu.classList.add(`menu-${vert}${horz}`);
        }
    }

	// A11y Input Handlers ---

	const onTriggerKeyDown = (event: KeyboardEvent): void => {
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			// Trigger Menu
			onTriggerClick();
			// If menu open, set focus
			if (elemMenu.style.display === 'block') { elemMenu.focus() }
		}
	}

	const onWindowKeyDown = (event: KeyboardEvent): void => {
		if (['Escape'].includes(event.code)) {
			event.preventDefault();
			menuClose();
		}
	}
	
	// On Action Init
    onInit();
	// Window Events
    window.addEventListener('resize', autoUpdateOrigin, true)
	window.addEventListener('click', onWindowClick, true);
	window.addEventListener('keydown', onWindowKeyDown, true);
	// Trigger Node Events
	node.addEventListener('click', onTriggerClick);
	node.addEventListener('keydown', onTriggerKeyDown);
	
	// Lifecycle
	return {
		update: (newArgs: ArgsMenu) => { args = newArgs },
		destroy: (): void => {
            window.removeEventListener('resize', onWindowClick, true);
			window.removeEventListener('click', onWindowClick, true);
			window.removeEventListener('keydown', onWindowKeyDown, true);
			node.removeEventListener('click', onTriggerClick);
			node.removeEventListener('keydown', onTriggerKeyDown);
		}
	}
}
