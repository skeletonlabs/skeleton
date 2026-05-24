import ClearTrigger from '../anatomy/clear-trigger.svelte';
import Control from '../anatomy/control.svelte';
import HiddenInput from '../anatomy/hidden-input.svelte';
import Input from '../anatomy/input.svelte';
import ItemDeleteTrigger from '../anatomy/item-delete-trigger.svelte';
import ItemInput from '../anatomy/item-input.svelte';
import ItemPreview from '../anatomy/item-preview.svelte';
import ItemText from '../anatomy/item-text.svelte';
import Item from '../anatomy/item.svelte';
import Label from '../anatomy/label.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';

export const TagsInput = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	Control: Control,
	Item: Item,
	ItemPreview: ItemPreview,
	ItemText: ItemText,
	ItemDeleteTrigger: ItemDeleteTrigger,
	ItemInput: ItemInput,
	Input: Input,
	ClearTrigger: ClearTrigger,
	HiddenInput: HiddenInput,
});
