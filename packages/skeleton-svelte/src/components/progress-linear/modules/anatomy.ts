import Label from '../anatomy/label.svelte';
import Range from '../anatomy/range.svelte';
import Root from '../anatomy/root.svelte';
import RootContext from '../anatomy/root-context.svelte';
import Track from '../anatomy/track.svelte';

export const ProgressLinear = Object.assign(Root, {
	Context: RootContext,
	Label: Label,
	Track: Track,
	Range: Range,
});
