import CircleRange from '../anatomy/circle-range.svelte';
import CircleTrack from '../anatomy/circle-track.svelte';
import Circle from '../anatomy/circle.svelte';
import Label from '../anatomy/label.svelte';
import Range from '../anatomy/range.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';
import Track from '../anatomy/track.svelte';
import ValueText from '../anatomy/value-text.svelte';

export const Progress = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	ValueText: ValueText,
	Track: Track,
	Range: Range,
	Circle: Circle,
	CircleTrack: CircleTrack,
	CircleRange: CircleRange,
});
