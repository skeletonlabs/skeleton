import RatingGroupRoot from '../anatomy/rating-group-root';
import RatingGroupLabel from '../anatomy/rating-group-label';
import RatingGroupControl from '../anatomy/rating-group-control';
import RatingGroupItem from '../anatomy/rating-group-item';
import RatingGroupHiddenInput from '../anatomy/rating-group-hidden-input';
import RatingGroupRootContext from '../anatomy/rating-group-root-context';
import RatingGroupItemContext from '../anatomy/rating-group-item-context';

const RatingGroup = Object.assign(RatingGroupRoot, {
	Label: RatingGroupLabel,
	Control: RatingGroupControl,
	Item: RatingGroupItem,
	HiddenInput: RatingGroupHiddenInput,
	Context: RatingGroupRootContext,
	ItemContext: RatingGroupItemContext
});

export { RatingGroup };
