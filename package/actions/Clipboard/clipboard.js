// Action: Clipboard
export function clipboard(node, args) {
    const onClick = () => {
        // Handle `data-clipboard` target based on object key
        if (typeof args === 'object') {
            // Element Inner HTML
            if (Object.prototype.hasOwnProperty.call(args, 'element')) {
                const element = document.querySelector(`[data-clipboard="${args.element}"]`);
                copyToClipboard(element?.innerHTML);
                return;
            }
            // Form Input Value
            if (Object.prototype.hasOwnProperty.call(args, 'input')) {
                const input = document.querySelector(`[data-clipboard="${args.input}"]`);
                copyToClipboard(input?.value);
                return;
            }
        }
        // Handle everything else.
        copyToClipboard(args);
    };
    // Event Listner
    node.addEventListener('click', onClick);
    // Lifecycle
    return {
        update(newArgs) {
            args = newArgs;
        },
        destroy() {
            node.removeEventListener('click', onClick);
        }
    };
}
// Shared copy method
function copyToClipboard(data) {
    navigator.clipboard.writeText(String(data));
}
