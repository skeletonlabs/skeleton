import Item from '../anatomy/item.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';

export const ToggleGroup = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Item: Item,
});
