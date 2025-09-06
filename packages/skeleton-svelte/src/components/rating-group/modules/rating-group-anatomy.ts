import RatingGroupRoot from '../anatomy/rating-group-root.svelte';
import RatingGroupRootContext from '../anatomy/rating-group-root-context.svelte';
import RatingGroupLabel from '../anatomy/rating-group-label.svelte';
import RatingGroupControl from '../anatomy/rating-group-control.svelte';
import RatingGroupItem from '../anatomy/rating-group-item.svelte';
import RatingGroupItemContext from '../anatomy/rating-group-item-context.svelte';
import RatingGroupHiddenInput from '../anatomy/rating-group-hidden-input.svelte';

export const RatingGroup = Object.assign(RatingGroupRoot, {
	Context: RatingGroupRootContext,
	Label: RatingGroupLabel,
	Control: RatingGroupControl,
	Item: RatingGroupItem,
	ItemContext: RatingGroupItemContext,
	HiddenInput: RatingGroupHiddenInput
});
