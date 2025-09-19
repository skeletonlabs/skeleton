import Content from '../anatomy/content.svelte';
import Control from '../anatomy/control.svelte';
import Input from '../anatomy/input.svelte';
import ItemGroupLabel from '../anatomy/item-group-label.svelte';
import ItemGroup from '../anatomy/item-group.svelte';
import ItemIndicator from '../anatomy/item-indicator.svelte';
import ItemText from '../anatomy/item-text.svelte';
import Item from '../anatomy/item.svelte';
import Label from '../anatomy/label.svelte';
import Positioner from '../anatomy/positioner.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';
import Trigger from '../anatomy/trigger.svelte';

export const Combobox = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	Control: Control,
	Input: Input,
	Trigger: Trigger,
	Positioner: Positioner,
	Content: Content,
	ItemGroup: ItemGroup,
	ItemGroupLabel: ItemGroupLabel,
	Item: Item,
	ItemText: ItemText,
	ItemIndicator: ItemIndicator,
});
