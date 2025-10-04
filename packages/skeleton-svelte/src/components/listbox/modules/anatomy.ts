import Content from '../anatomy/content.svelte';
import Input from '../anatomy/input.svelte';
import ItemGroupLabel from '../anatomy/item-group-label.svelte';
import ItemGroup from '../anatomy/item-group.svelte';
import ItemIndicator from '../anatomy/item-indicator.svelte';
import ItemText from '../anatomy/item-text.svelte';
import Item from '../anatomy/item.svelte';
import Label from '../anatomy/label.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';

export const Listbox = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	Input: Input,
	Content: Content,
	ItemGroup: ItemGroup,
	ItemGroupLabel: ItemGroupLabel,
	Item: Item,
	ItemText: ItemText,
	ItemIndicator: ItemIndicator,
});
