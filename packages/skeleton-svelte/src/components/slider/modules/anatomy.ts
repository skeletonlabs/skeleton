import Control from '../anatomy/control.svelte';
import HiddenInput from '../anatomy/hidden-input.svelte';
import Label from '../anatomy/label.svelte';
import MarkerGroup from '../anatomy/marker-group.svelte';
import Marker from '../anatomy/marker.svelte';
import Range from '../anatomy/range.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';
import Thumb from '../anatomy/thumb.svelte';
import Track from '../anatomy/track.svelte';
import ValueText from '../anatomy/value-text.svelte';

export const Slider = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	ValueText: ValueText,
	Control: Control,
	Track: Track,
	Range: Range,
	Thumb: Thumb,
	HiddenInput: HiddenInput,
	MarkerGroup: MarkerGroup,
	Marker: Marker,
});
