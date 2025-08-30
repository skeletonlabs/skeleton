import RatingGroupRoot from '../anatomy/rating-group-root.js';
import RatingGroupLabel from '../anatomy/rating-group-label.js';
import RatingGroupControl from '../anatomy/rating-group-control.js';
import RatingGroupItem from '../anatomy/rating-group-item.js';
import RatingGroupHiddenInput from '../anatomy/rating-group-hidden-input.js';
import RatingGroupRootContext from '../anatomy/rating-group-root-context.js';
import RatingGroupItemContext from '../anatomy/rating-group-item-context.js';

const RatingGroup = Object.assign(RatingGroupRoot, {
	Label: RatingGroupLabel,
	Control: RatingGroupControl,
	Item: RatingGroupItem,
	HiddenInput: RatingGroupHiddenInput,
	Context: RatingGroupRootContext,
	ItemContext: RatingGroupItemContext
});

export { RatingGroup };
