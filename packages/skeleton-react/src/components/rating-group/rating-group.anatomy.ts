import RatingGroupRoot from './rating-group-root';
import RatingGroupLabel from './rating-group-label';
import RatingGroupControl from './rating-group-control';
import RatingGroupItem from './rating-group-item';
import RatingGroupHiddenInput from './rating-group-hidden-input';
import RatingGroupRootContext from './rating-group-root-context';
import RatingGroupItemContext from './rating-group-item-context';

const RatingGroup = Object.assign(RatingGroupRoot, {
	Label: RatingGroupLabel,
	Control: RatingGroupControl,
	Item: RatingGroupItem,
	HiddenInput: RatingGroupHiddenInput,
	Context: RatingGroupRootContext,
	ItemContext: RatingGroupItemContext
});

export { RatingGroup };
