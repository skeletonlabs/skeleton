// Action: Menu
// https://svelte.dev/repl/0ace7a508bd843b798ae599940a91783?version=3.16.7
// prettier-ignore
export function menu(node, args) {
    const elemMenu = document.querySelector(`[data-menu="${args.menu}"]`);
    if (!elemMenu)
        return;
    const elemWhitelist = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
    let activeFocusIdx;
    let focusableElems;
    const onInit = () => {
        autoUpdateOrigin();
        // Apply a11y attributes
        elemMenu.setAttribute('role', 'menu');
    };
    // Menu States ---
    const menuOpen = (openWithFocus = false) => {
        elemMenu.style.display = 'block';
        stateEventHandler(true);
        // Create array of all focusable elements, so that we can iterate through them
        focusableElems = Array.from(elemMenu.querySelectorAll(elemWhitelist));
        // reset the focus index
        activeFocusIdx = -1;
        if (openWithFocus) {
            // Automatically focus the element if openWithFocus is true (for example if
            // the menu was opened with Enter instead of with a click
            activeFocusIdx = 0;
            focusableElems[0]?.focus();
        }
    };
    const menuClose = () => {
        elemMenu.style.display = 'none';
        stateEventHandler(false);
    };
    const stateEventHandler = (state) => {
        if (args.state)
            args.state({ menu: args.menu, state });
    };
    // Click Handlers ---
    const toggleMenu = () => {
        // When the node is clicked, open the menu if it is closed, otherwise close it
        if (elemMenu.style.display != 'block') {
            autoUpdateOrigin();
            menuOpen();
        }
        else {
            menuClose();
        }
    };
    const onWindowClick = (event) => {
        args.interactive === true ? interactiveClickHandler(event) : standardClickHandler(event);
    };
    // Interactive FALSE - any click closes the menu
    const standardClickHandler = (event) => {
        // Any click outside the node closes the menu, but a click inside the node toggles the menu.
        const outsideNode = node && !node.contains(event.target);
        if (outsideNode) {
            menuClose();
        }
        else {
            toggleMenu();
        }
    };
    // Interactive TRUE - clicks outside close menu
    const interactiveClickHandler = (event) => {
        const outsideNode = node && !node.contains(event.target);
        const outsideMenu = elemMenu && !elemMenu.contains(event.target);
        if (!outsideNode) {
            toggleMenu();
        }
        else if (outsideNode && outsideMenu) {
            menuClose();
        }
    };
    // Menu - Set auto origin ---
    const autoUpdateOrigin = () => {
        if (!args.fixed && !elemMenu.classList.contains('hidden')) {
            // Get the Menu's bounds
            const elemTriggerBounds = node.getBoundingClientRect();
            // Determine vertical and horizontal values
            const vert = elemTriggerBounds.y < window.innerHeight / 2 ? 't' : 'b'; // top/bottom
            const horz = elemTriggerBounds.x < window.innerWidth / 2 ? 'l' : 'r'; // left/right
            // Strip and apply only the relevant class
            elemMenu.classList.remove('menu-tl', 'menu-tr', 'menu-bl', 'menu-br');
            elemMenu.classList.add(`menu-${vert}${horz}`);
        }
    };
    // A11y Input Handlers ---
    const onTriggerKeyDown = (event) => {
        const key = event.key;
        if (key === 'Enter' || key === 'Space') {
            event.preventDefault();
            // Toggle menu
            toggleMenu();
        }
    };
    const onWindowKeyDown = (event) => {
        const key = event.key;
        if (elemMenu.style.display === 'none')
            return;
        if (key === 'Escape' || key === 'Tab') {
            // Close the menu
            event.preventDefault();
            menuClose();
            node.focus();
        }
        else if (key === 'ArrowDown') {
            event.preventDefault();
            if (activeFocusIdx < focusableElems.length - 1) {
                // Move down the menu
                activeFocusIdx += 1;
                focusableElems[activeFocusIdx]?.focus();
            }
        }
        else if (key === 'ArrowUp') {
            event.preventDefault();
            if (activeFocusIdx > 0) {
                // Move up the menu
                activeFocusIdx -= 1;
                focusableElems[activeFocusIdx]?.focus();
            }
            else if (focusableElems.length && activeFocusIdx === -1) {
                // Start at the bottom of the menu if first key is arrow up key
                event.preventDefault();
                activeFocusIdx = focusableElems.length - 1;
                focusableElems[activeFocusIdx]?.focus();
            }
        }
    };
    // On Action Init
    onInit();
    // Window Events
    window.addEventListener('resize', autoUpdateOrigin, true);
    window.addEventListener('click', onWindowClick, true);
    window.addEventListener('keydown', onWindowKeyDown, true);
    // Trigger Node Events
    node.addEventListener('keydown', onTriggerKeyDown);
    node.addEventListener('change', (e) => {
        console.log(e);
    });
    // Lifecycle
    return {
        update: (newArgs) => { args = newArgs; },
        destroy: () => {
            window.removeEventListener('resize', onWindowClick, true);
            window.removeEventListener('click', onWindowClick, true);
            window.removeEventListener('keydown', onWindowKeyDown, true);
            node.removeEventListener('keydown', onTriggerKeyDown);
        }
    };
}
