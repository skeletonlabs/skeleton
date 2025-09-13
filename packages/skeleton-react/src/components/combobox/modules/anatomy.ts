import Root from '../anatomy/root';
import RootProvider from '../anatomy/root-provider';
import RootContext from '../anatomy/root-context';
import Label from '../anatomy/label';
import Control from '../anatomy/control';
import Input from '../anatomy/input';
import Trigger from '../anatomy/trigger';
import Positioner from '../anatomy/positioner';
import Content from '../anatomy/content';
import ItemGroup from '../anatomy/item-group';
import ItemGroupLabel from '../anatomy/item-group-label';
import Item from '../anatomy/item';

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
	Item: Item
});
