import ProgressLinearRoot from '../anatomy/progress-linear-root.svelte';
import ProgressLinearRootContext from '../anatomy/progress-linear-root-context.svelte';
import ProgressLinearLabel from '../anatomy/progress-linear-label.svelte';
import ProgressLinearTrack from '../anatomy/progress-linear-track.svelte';
import ProgressLinearRange from '../anatomy/progress-linear-range.svelte';

export const ProgressLinear = Object.assign(ProgressLinearRoot, {
	Context: ProgressLinearRootContext,
	Label: ProgressLinearLabel,
	Track: ProgressLinearTrack,
	Range: ProgressLinearRange
});
