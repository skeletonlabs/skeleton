import Content from '../anatomy/content.jsx';
import Control from '../anatomy/control.jsx';
import Input from '../anatomy/input.jsx';
import Item from '../anatomy/item.jsx';
import ItemGroup from '../anatomy/item-group.jsx';
import ItemGroupLabel from '../anatomy/item-group-label.jsx';
import ItemIndicator from '../anatomy/item-indicator.jsx';
import ItemText from '../anatomy/item-text.jsx';
import Label from '../anatomy/label.jsx';
import Positioner from '../anatomy/positioner.jsx';
import Root from '../anatomy/root.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Trigger from '../anatomy/trigger.jsx';

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
