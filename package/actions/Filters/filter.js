// Action: Filter
export function filter(node, filterName) {
    if (filterName === undefined)
        return;
    const applyFilter = () => {
        // Prevent this action on Firebox browsers
        const isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
        if (isFirefox) {
            return;
        }
        // If the filter name availalbe, apply the Filter
        node.setAttribute('style', `filter: url("#${filterName}")`);
    };
    // On Init
    applyFilter();
    // Lifecycle
    return {
        update(newArgs) {
            filterName = newArgs;
            applyFilter();
        }
    };
}
