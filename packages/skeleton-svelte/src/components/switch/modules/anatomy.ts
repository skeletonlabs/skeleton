import Root from '../anatomy/root.svelte';
import RootContext from '../anatomy/root-context.svelte';
import HiddenInput from '../anatomy/hidden-input.svelte';
import Control from '../anatomy/control.svelte';
import Thumb from '../anatomy/thumb.svelte';
import Label from '../anatomy/label.svelte';

export const Switch = Object.assign(Root, {
	Context: RootContext,
	HiddenInput: HiddenInput,
	Control: Control,
	Thumb: Thumb,
	Label: Label
});
