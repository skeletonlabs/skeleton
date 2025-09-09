import Root from '../anatomy/root.svelte';
import RootContext from '../anatomy/root-context.svelte';
import Label from '../anatomy/label.svelte';
import Control from '../anatomy/control.svelte';
import Item from '../anatomy/item.svelte';
import ItemContext from '../anatomy/item-context.svelte';
import HiddenInput from '../anatomy/hidden-input.svelte';

export const RatingGroup = Object.assign(Root, {
	Context: RootContext,
	Label: Label,
	Control: Control,
	Item: Item,
	ItemContext: ItemContext,
	HiddenInput: HiddenInput
});
