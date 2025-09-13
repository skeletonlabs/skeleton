import Root from '../anatomy/root.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import RootContext from '../anatomy/root-context.svelte';
import Trigger from '../anatomy/trigger.svelte';
import Positioner from '../anatomy/positioner.svelte';
import Content from '../anatomy/content.svelte';
import Arrow from '../anatomy/arrow.svelte';
import ArrowTip from '../anatomy/arrow-tip.svelte';

export const Tooltip = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Trigger: Trigger,
	Positioner: Positioner,
	Content: Content,
	Arrow: Arrow,
	ArrowTip: ArrowTip
});
