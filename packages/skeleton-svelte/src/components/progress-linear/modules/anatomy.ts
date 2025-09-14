import Root from '../anatomy/root.svelte';
import RootContext from '../anatomy/root-context.svelte';
import Label from '../anatomy/label.svelte';
import Track from '../anatomy/track.svelte';
import Range from '../anatomy/range.svelte';

export const ProgressLinear = Object.assign(Root, {
	Context: RootContext,
	Label: Label,
	Track: Track,
	Range: Range,
});
