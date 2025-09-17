import Indicator from '../anatomy/indicator';
import Item from '../anatomy/item';
import ItemHiddenInput from '../anatomy/item-hidden-input';
import ItemText from '../anatomy/item-text';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';

export const SegmentedControl = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Indicator: Indicator,
	Item: Item,
	ItemText: ItemText,
	ItemHiddenInput: ItemHiddenInput,
});
