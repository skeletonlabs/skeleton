import RatingGroupRoot from './rating-group-root.svelte';
import RatingGroupLabel from './rating-group-label.svelte';
import RatingGroupControl from './rating-group-control.svelte';
import RatingGroupItem from './rating-group-item.svelte';
import RatingGroupHiddenInput from './rating-group-hidden-input.svelte';
import RatingGroupRootContext from './rating-group-root-context.svelte';
import RatingGroupItemContext from './rating-group-item-context.svelte';

const RatingGroup = Object.assign(RatingGroupRoot, {
	Label: RatingGroupLabel,
	Control: RatingGroupControl,
	Item: RatingGroupItem,
	HiddenInput: RatingGroupHiddenInput,
	Context: RatingGroupRootContext,
	ItemContext: RatingGroupItemContext
});

export { RatingGroup };
