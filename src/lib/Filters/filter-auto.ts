// Action: Filter (auto)

let appliedFilters: string[] = [];
let initFilterParent: boolean = false;

export function filter(node, filter_name): void {
    const isFirefox: boolean = navigator.userAgent.indexOf('Firefox') > -1;

    // If NOT firefox
    if (!isFirefox) {

        // Apply style attribute
        node.setAttribute('style', `filter: url("#${filter_name}")`);
    
        // Initialize the filter parent on first run for any instance
        if (!initFilterParent) {
            let elem = document.createElement('div');
            elem.setAttribute('id', 'filter-parent');
            document.body.append(elem);
            initFilterParent = true;
        }

        // If filter not yet in DOM, add it
        if (!appliedFilters.includes(filter_name)) {
            // Set target
            const target = document.createElement('div');
            target.setAttribute('class', 'filter-container');
            // Import filter component
            importComponent(filter_name, target);
            // Append filter to target
            document.getElementById('filter-parent').append(target);
            // Append filter to appliedFilters list
            appliedFilters.push(filter_name);
        }
    }
}

async function importComponent(filter_name, target): Promise<void> {
	const Filter = (await import(`../Filters/svg/${filter_name}.svelte`)).default;
	new Filter({ target });
}
