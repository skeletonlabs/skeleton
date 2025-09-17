import Indicator from '../anatomy/indicator.svelte';
import ItemHiddenInput from '../anatomy/item-hidden-input.svelte';
import ItemText from '../anatomy/item-text.svelte';
import Item from '../anatomy/item.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';

export const SegmentedControl = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Indicator: Indicator,
	Item: Item,
	ItemText: ItemText,
	ItemHiddenInput: ItemHiddenInput,
});
