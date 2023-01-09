// Action: Focus Trap
export function focusTrap(node, enabled) {
    const elemWhitelist = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
    let elemFirst;
    let elemLast;
    // When the first element is selected, shift+tab pressed, jump to the last selectable item.
    function onFirstElemKeydown(e) {
        if (e.shiftKey && e.code === 'Tab') {
            e.preventDefault();
            elemLast.focus();
        }
    }
    // When the last item selected, tab pressed, jump to the first selectable item.
    function onLastElemKeydown(e) {
        if (!e.shiftKey && e.code === 'Tab') {
            e.preventDefault();
            elemFirst.focus();
        }
    }
    const onInit = () => {
        if (enabled === false)
            return;
        // Gather all focusable elements
        const focusableElems = Array.from(node.querySelectorAll(elemWhitelist));
        if (focusableElems.length) {
            // Set first/last focusable elements
            elemFirst = focusableElems[0];
            elemLast = focusableElems[focusableElems.length - 1];
            // Auto-focus first focusable element
            elemFirst.focus();
            // Listen for keydown on first & last element
            elemFirst.addEventListener('keydown', onFirstElemKeydown);
            elemLast.addEventListener('keydown', onLastElemKeydown);
        }
    };
    onInit();
    function onDestory() {
        if (elemFirst)
            elemFirst.removeEventListener('keydown', onFirstElemKeydown);
        if (elemLast)
            elemLast.removeEventListener('keydown', onLastElemKeydown);
    }
    // Lifecycle
    return {
        update(newArgs) {
            enabled = newArgs;
            newArgs ? onInit() : onDestory();
        },
        destroy() {
            onDestory();
        }
    };
}
