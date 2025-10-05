import Content from '../anatomy/content';
import Input from '../anatomy/input';
import Item from '../anatomy/item';
import ItemGroup from '../anatomy/item-group';
import ItemGroupLabel from '../anatomy/item-group-label';
import ItemIndicator from '../anatomy/item-indicator';
import ItemText from '../anatomy/item-text';
import Label from '../anatomy/label';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';

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
