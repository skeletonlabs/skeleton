import Content from '../anatomy/content';
import Control from '../anatomy/control';
import Input from '../anatomy/input';
import Item from '../anatomy/item';
import ItemGroup from '../anatomy/item-group';
import ItemGroupLabel from '../anatomy/item-group-label';
import ItemIndicator from '../anatomy/item-indicator';
import ItemText from '../anatomy/item-text';
import Label from '../anatomy/label';
import Positioner from '../anatomy/positioner';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';
import Trigger from '../anatomy/trigger';

export const Combobox = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	Control: Control,
	Input: Input,
	Trigger: Trigger,
	Positioner: Positioner,
	Content: Content,
	ItemGroup: ItemGroup,
	ItemGroupLabel: ItemGroupLabel,
	Item: Item,
	ItemText: ItemText,
	ItemIndicator: ItemIndicator,
});
