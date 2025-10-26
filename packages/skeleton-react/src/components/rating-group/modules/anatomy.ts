import Control from '../anatomy/control.jsx';
import HiddenInput from '../anatomy/hidden-input.jsx';
import Item from '../anatomy/item.jsx';
import Label from '../anatomy/label.jsx';
import Root from '../anatomy/root.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';

const RatingGroup = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	Control: Control,
	Item: Item,
	HiddenInput: HiddenInput,
});

export { RatingGroup };
