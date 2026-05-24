import Item from '../anatomy/item.jsx';
import ToggleGroupRootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Root from '../anatomy/root.jsx';

export const ToggleGroup = Object.assign(Root, {
	Provider: RootProvider,
	Context: ToggleGroupRootContext,
	Item: Item,
});
