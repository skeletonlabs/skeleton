import Root from '../anatomy/root';
import RootProvider from '../anatomy/root-provider';
import RootContext from '../anatomy/root-context';
import Label from '../anatomy/label';
import Control from '../anatomy/control';
import Item from '../anatomy/item';
import HiddenInput from '../anatomy/hidden-input';

const RatingGroup = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	Control: Control,
	Item: Item,
	HiddenInput: HiddenInput,
});

export { RatingGroup };
