import RatingGroupRoot from '../anatomy/rating-group-root.svelte';
import RatingGroupLabel from '../anatomy/rating-group-label.svelte';
import RatingGroupControl from '../anatomy/rating-group-control.svelte';
import RatingGroupItem from '../anatomy/rating-group-item.svelte';
import RatingGroupHiddenInput from '../anatomy/rating-group-hidden-input.svelte';
import RatingGroupRootContext from '../anatomy/rating-group-root-context.svelte';
import RatingGroupItemContext from '../anatomy/rating-group-item-context.svelte';

const RatingGroup = Object.assign(RatingGroupRoot, {
	Label: RatingGroupLabel,
	Control: RatingGroupControl,
	Item: RatingGroupItem,
	HiddenInput: RatingGroupHiddenInput,
	Context: RatingGroupRootContext,
	ItemContext: RatingGroupItemContext
});

export { RatingGroup };
