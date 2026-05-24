import Control from '../anatomy/control.svelte';
import HiddenInput from '../anatomy/hidden-input.svelte';
import Label from '../anatomy/label.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';
import Thumb from '../anatomy/thumb.svelte';

export const Switch = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Control: Control,
	Thumb: Thumb,
	Label: Label,
	HiddenInput: HiddenInput,
});
