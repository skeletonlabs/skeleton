import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import Label from '../anatomy/label';
import Control from '../anatomy/control';
import Item from '../anatomy/item';
import ItemContext from '../anatomy/item-context';
import HiddenInput from '../anatomy/hidden-input';

const RatingGroup = Object.assign(Root, {
	Context: RootContext,
	Label: Label,
	Control: Control,
	Item: Item,
	ItemContext: ItemContext,
	HiddenInput: HiddenInput
});

export { RatingGroup };
