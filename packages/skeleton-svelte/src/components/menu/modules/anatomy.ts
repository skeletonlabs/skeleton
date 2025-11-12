import ArrowTip from '../anatomy/arrow-tip.svelte';
import Arrow from '../anatomy/arrow.svelte';
import Content from '../anatomy/content.svelte';
import ContextTrigger from '../anatomy/context-trigger.svelte';
import ItemGroupLabel from '../anatomy/item-group-label.svelte';
import ItemGroup from '../anatomy/item-group.svelte';
import Item from '../anatomy/item.svelte';
import OptionItem from '../anatomy/option-item.svelte';
import Positioner from '../anatomy/positioner.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';
import Separator from '../anatomy/separator.svelte';
import TriggerItem from '../anatomy/trigger-item.svelte';
import Trigger from '../anatomy/trigger.svelte';

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
