import RatingGroupRoot from '../anatomy/root';
import RatingGroupLabel from '../anatomy/label';
import RatingGroupControl from '../anatomy/control';
import RatingGroupItem from '../anatomy/item';
import RatingGroupHiddenInput from '../anatomy/hidden-input';
import RatingGroupRootContext from '../anatomy/root-context';
import RatingGroupItemContext from '../anatomy/item-context';

const RatingGroup = Object.assign(RatingGroupRoot, {
	Label: RatingGroupLabel,
	Control: RatingGroupControl,
	Item: RatingGroupItem,
	HiddenInput: RatingGroupHiddenInput,
	Context: RatingGroupRootContext,
	ItemContext: RatingGroupItemContext
});

export { RatingGroup };
