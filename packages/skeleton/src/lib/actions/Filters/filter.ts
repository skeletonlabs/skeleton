// Action: Filter

type Filters = ['Apollo', 'BlueNight', 'Emerald', 'GreenFall', 'Noir', 'NoirLight', 'Rustic', 'Summer84', 'XPro'];
// This type allows users to get the autocomplete option for our
// filter presets while also permitting them into adding their own filter.
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
