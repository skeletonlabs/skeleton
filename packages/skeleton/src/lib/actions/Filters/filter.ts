// Action: Filter

type Filters = ['Apollo', 'BlueNight', 'Emerald', 'GreenFall', 'Noir', 'NoirLight', 'Rustic', 'Summer84', 'XPro'];
type FilterName = `#${Filters[number]}` | (string & {});

export function filter(node: HTMLElement, filterName: FilterName) {
	// Return if no filterName provided
	if (filterName === undefined) return;

	const applyFilter = (): void => {
		node.setAttribute('style', `filter: url("${filterName}")`);
	};
	applyFilter();

	return {
		update(newArgs: FilterName) {
			filterName = newArgs;
			applyFilter();
		}
	};
}
