import Root from '../anatomy/root.svelte';
import RootContext from '../anatomy/root-context.svelte';
import Label from '../anatomy/label.svelte';
import Control from '../anatomy/control.svelte';
import Input from '../anatomy/input.svelte';
import Trigger from '../anatomy/trigger.svelte';
import Positioner from '../anatomy/positioner.svelte';
import Content from '../anatomy/content.svelte';
import ItemGroup from '../anatomy/item-group.svelte';
import ItemGroupLabel from '../anatomy/item-group-label.svelte';
import Item from '../anatomy/item.svelte';
import ItemContext from '../anatomy/item-context.svelte';

export const Combobox = Object.assign(Root, {
	RootContext: RootContext,
	Label: Label,
	Control: Control,
	Input: Input,
	Trigger: Trigger,
	Positioner: Positioner,
	Content: Content,
	ItemGroup: ItemGroup,
	ItemGroupLabel: ItemGroupLabel,
	Item: Item,
	ItemContext: ItemContext
});
