import Item from '../anatomy/item';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';

export const ToggleGroup = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Item: Item,
});
