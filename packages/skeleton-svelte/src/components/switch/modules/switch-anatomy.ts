import SwitchRoot from '../anatomy/switch-root.svelte';
import SwitchRootContext from '../anatomy/switch-root-context.svelte';
import SwitchHiddenInput from '../anatomy/switch-hidden-input.svelte';
import SwitchControl from '../anatomy/switch-control.svelte';
import SwitchThumb from '../anatomy/switch-thumb.svelte';
import SwitchLabel from '../anatomy/switch-label.svelte';

export const Switch = Object.assign(SwitchRoot, {
	Context: SwitchRootContext,
	HiddenInput: SwitchHiddenInput,
	Control: SwitchControl,
	Thumb: SwitchThumb,
	Label: SwitchLabel
});
