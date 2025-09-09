import RatingGroupRoot from '../anatomy/root.svelte';
import RatingGroupRootContext from '../anatomy/root-context.svelte';
import RatingGroupLabel from '../anatomy/label.svelte';
import RatingGroupControl from '../anatomy/control.svelte';
import RatingGroupItem from '../anatomy/item.svelte';
import RatingGroupItemContext from '../anatomy/item-context.svelte';
import RatingGroupHiddenInput from '../anatomy/hidden-input.svelte';

export const RatingGroup = Object.assign(RatingGroupRoot, {
	Context: RatingGroupRootContext,
	Label: RatingGroupLabel,
	Control: RatingGroupControl,
	Item: RatingGroupItem,
	ItemContext: RatingGroupItemContext,
	HiddenInput: RatingGroupHiddenInput
});
