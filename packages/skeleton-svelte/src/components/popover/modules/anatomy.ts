import Root from '../anatomy/root.svelte';
import RootContext from '../anatomy/root-context.svelte';
import Trigger from '../anatomy/trigger.svelte';
import Positioner from '../anatomy/positioner.svelte';
import Content from '../anatomy/content.svelte';
import Arrow from '../anatomy/arrow.svelte';
import ArrowTip from '../anatomy/arrow-tip.svelte';
import Title from '../anatomy/title.svelte';
import Description from '../anatomy/description.svelte';
import CloseTrigger from '../anatomy/close-trigger.svelte';

export const Popover = Object.assign(Root, {
	Context: RootContext,
	Trigger: Trigger,
	Positioner: Positioner,
	Content: Content,
	Arrow: Arrow,
	ArrowTip: ArrowTip,
	Title: Title,
	Description: Description,
	CloseTrigger: CloseTrigger
});
