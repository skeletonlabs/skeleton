import ArrowTip from '../anatomy/arrow-tip.jsx';
import Arrow from '../anatomy/arrow.jsx';
import Content from '../anatomy/content.jsx';
import ContextTrigger from '../anatomy/context-trigger.jsx';
import ItemGroupLabel from '../anatomy/item-group-label.jsx';
import ItemGroup from '../anatomy/item-group.jsx';
import Item from '../anatomy/item.jsx';
import OptionItem from '../anatomy/option-item.jsx';
import Positioner from '../anatomy/positioner.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Root from '../anatomy/root.jsx';
import Separator from '../anatomy/separator.jsx';
import TriggerItem from '../anatomy/trigger-item.jsx';
import Trigger from '../anatomy/trigger.jsx';

export const Menu = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Trigger: Trigger,
	ContextTrigger: ContextTrigger,
	Positioner: Positioner,
	Content: Content,
	Arrow: Arrow,
	ArrowTip: ArrowTip,
	Item: Item,
	OptionItem: OptionItem,
	TriggerItem: TriggerItem,
	ItemGroup: ItemGroup,
	ItemGroupLabel: ItemGroupLabel,
	Separator: Separator,
});
