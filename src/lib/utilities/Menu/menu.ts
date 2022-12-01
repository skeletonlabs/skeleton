// Action: Menu
// https://svelte.dev/repl/0ace7a508bd843b798ae599940a91783?version=3.16.7

interface ArgsMenu {
	/** The value of 'x' from data-menu-[x] */
	menu: string;
	/** Origin - TRUE: fixed | FALSE: auto */
	fixed?: boolean;
	/** Clicks inside body will not close window */
	interactive?: boolean;
	/** Provide an optional callback function to handle open/close state changes. */
	state?: (e: { menu: string; state: boolean }) => void;
}

// prettier-ignore
export function menu(node: HTMLElement, args: ArgsMenu) {
    const elemMenu: HTMLElement | null = document.querySelector(`[data-menu="${args.menu}"]`);
	if (!elemMenu) return;

	const elemWhitelist: string = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
	let activeFocusIdx: number;
	let focusableElems: HTMLElement[];

	const onInit = (): void => {
		autoUpdateOrigin();
		// Apply a11y attributes
		elemMenu.setAttribute('role', 'menu');

		// Create array of all focusable elements, so that we can iterate through them
		focusableElems = Array.from(elemMenu.querySelectorAll(elemWhitelist));
	}

	// Menu States ---
	
	const menuOpen = (openWithFocus: boolean = false): void => {
		elemMenu.style.display = 'block';
		stateEventHandler(true);

		if (openWithFocus) {
			// Automatically focus the element if openWithFocus is true (for example if
			// the menu was opened with Enter instead of with a click
			activeFocusIdx = 0; // reset the focus index
			focusableElems[0].focus();
		}
	}

	const menuClose = (): void => {
		elemMenu.style.display = 'none';
		stateEventHandler(false);
	}

	const stateEventHandler = (state: boolean): void => {
		if (args.state) args.state({menu: args.menu, state});
	}
	
	// Click Handlers ---

	const onTriggerClick = (): void => {
		if (elemMenu.style.display === 'block') {
			menuClose();
		} else {
			autoUpdateOrigin();
			menuOpen();
		}
	}

	const onWindowClick = (event: any): void => {
		args.interactive === true ? interactiveClickHandler(event) : standardClickHandler();
	}
	
	// Interactive FALSE - any click closes the menu
	const standardClickHandler = (): void => {
		menuClose();
	}
	
	// Interactive TRUE - clicks outside close menu
	const interactiveClickHandler = (event: any): void => {
		const outsideNode = node && !node.contains(event.target);
		const outsideMenu = elemMenu && !elemMenu.contains(event.target);
		if (outsideNode && outsideMenu) { menuClose(); }
	}

	// Menu - Set auto origin ---

    const autoUpdateOrigin = (): void => {
        if (!args.fixed && !elemMenu.classList.contains('hidden')) {
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
			// If menu is closed we open it and vice versa
			if (elemMenu.style.display === 'block') {
				menuClose();
			} else {
				autoUpdateOrigin();
				menuOpen(true);
			}
		}
	}

	const onWindowKeyDown = (event: KeyboardEvent): void => {
		const key: string = event.key;

		if (key === 'Escape' || key === 'Tab') {
			if (elemMenu.style.display === 'block') {
				event.preventDefault();
				menuClose();
				node.focus();
			}
		} else if (key === 'ArrowDown') {
			if (activeFocusIdx < focusableElems.length - 1) {
				event.preventDefault();
				activeFocusIdx += 1;
				focusableElems[activeFocusIdx].focus();
			}
		} else if (key === 'ArrowUp') {
			if (activeFocusIdx > 0) {
				event.preventDefault();
				activeFocusIdx -= 1;
				focusableElems[activeFocusIdx].focus();
			}
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
	node.addEventListener('change', (e: any) => {
		console.log(e);
	})
	
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
