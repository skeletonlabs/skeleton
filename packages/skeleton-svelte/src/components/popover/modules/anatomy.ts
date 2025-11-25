import Anchor from '../anatomy/anchor.svelte';
import ArrowTip from '../anatomy/arrow-tip.svelte';
import Arrow from '../anatomy/arrow.svelte';
import CloseTrigger from '../anatomy/close-trigger.svelte';
import Content from '../anatomy/content.svelte';
import Description from '../anatomy/description.svelte';
import Positioner from '../anatomy/positioner.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';
import Title from '../anatomy/title.svelte';
import Trigger from '../anatomy/trigger.svelte';

export const Popover = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Anchor: Anchor,
	Trigger: Trigger,
	Positioner: Positioner,
	Content: Content,
	Arrow: Arrow,
	ArrowTip: ArrowTip,
	Title: Title,
	Description: Description,
	CloseTrigger: CloseTrigger,
});
