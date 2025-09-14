import Control from '../anatomy/control';
import HiddenInput from '../anatomy/hidden-input';
import Item from '../anatomy/item';
import Label from '../anatomy/label';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';

const RatingGroup = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	Control: Control,
	Item: Item,
	HiddenInput: HiddenInput,
});

export { RatingGroup };
