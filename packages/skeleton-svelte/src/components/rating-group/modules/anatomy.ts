import Root from '../anatomy/root.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import RootContext from '../anatomy/root-context.svelte';
import Label from '../anatomy/label.svelte';
import Control from '../anatomy/control.svelte';
import Item from '../anatomy/item.svelte';
import HiddenInput from '../anatomy/hidden-input.svelte';

export const RatingGroup = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	Control: Control,
	Item: Item,
	HiddenInput: HiddenInput
});
