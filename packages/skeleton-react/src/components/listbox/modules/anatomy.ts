import Content from '../anatomy/content.jsx';
import Input from '../anatomy/input.jsx';
import Item from '../anatomy/item.jsx';
import ItemGroup from '../anatomy/item-group.jsx';
import ItemGroupLabel from '../anatomy/item-group-label.jsx';
import ItemIndicator from '../anatomy/item-indicator.jsx';
import ItemText from '../anatomy/item-text.jsx';
import Label from '../anatomy/label.jsx';
import Root from '../anatomy/root.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';

export const Listbox = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	Input: Input,
	Content: Content,
	ItemGroup: ItemGroup,
	ItemGroupLabel: ItemGroupLabel,
	Item: Item,
	ItemText: ItemText,
	ItemIndicator: ItemIndicator,
});
