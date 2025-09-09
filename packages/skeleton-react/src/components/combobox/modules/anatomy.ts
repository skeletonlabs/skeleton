import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import Label from '../anatomy/label';
import Control from '../anatomy/control';
import Input from '../anatomy/input';
import Trigger from '../anatomy/trigger';
import Positioner from '../anatomy/positioner';
import Content from '../anatomy/content';
import ItemGroup from '../anatomy/item-group';
import ItemGroupContext from '../anatomy/item-group-context';
import ItemGroupLabel from '../anatomy/item-group-label';
import Item from '../anatomy/item';
import ItemContext from '../anatomy/item-context';

export const Combobox = Object.assign(Root, {
	RootContext: RootContext,
	Label: Label,
	Control: Control,
	Input: Input,
	Trigger: Trigger,
	Positioner: Positioner,
	Content: Content,
	ItemGroup: ItemGroup,
	ItemGroupContext: ItemGroupContext,
	ItemGroupLabel: ItemGroupLabel,
	Item: Item,
	ItemContext: ItemContext
});
