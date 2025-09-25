import Control from '../anatomy/control.svelte';
import HiddenInput from '../anatomy/hidden-input.svelte';
import Item from '../anatomy/item.svelte';
import Label from '../anatomy/label.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';

export const RatingGroup = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	Control: Control,
	Item: Item,
	HiddenInput: HiddenInput,
});
