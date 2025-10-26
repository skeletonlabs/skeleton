import Control from '../anatomy/control.jsx';
import Indicator from '../anatomy/indicator.jsx';
import Item from '../anatomy/item.jsx';
import ItemHiddenInput from '../anatomy/item-hidden-input.jsx';
import ItemText from '../anatomy/item-text.jsx';
import Label from '../anatomy/label.jsx';
import Root from '../anatomy/root.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';

export const SegmentedControl = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	Control: Control,
	Indicator: Indicator,
	Item: Item,
	ItemText: ItemText,
	ItemHiddenInput: ItemHiddenInput,
});
