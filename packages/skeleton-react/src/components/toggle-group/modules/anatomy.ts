import Item from '../anatomy/item.jsx';
import Root from '../anatomy/root.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';

export const ToggleGroup = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Item: Item,
});
