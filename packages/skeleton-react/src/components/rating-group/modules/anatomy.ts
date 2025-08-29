import RatingGroupRoot from '../anatomy/rating-group-root.js';
import RatingGroupLabel from '../anatomy/rating-group-label.js';
import RatingGroupControl from '../anatomy/rating-group-control.js';
import RatingGroupItem from '../anatomy/rating-group-item.js';
import RatingGroupHiddenInput from '../anatomy/rating-group-hidden-input.js';

const RatingGroup = Object.assign(RatingGroupRoot, {
	Label: RatingGroupLabel,
	Control: RatingGroupControl,
	Item: RatingGroupItem,
	HiddenInput: RatingGroupHiddenInput
});

export { RatingGroup };
