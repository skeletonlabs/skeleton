import ArrowTip from '../anatomy/arrow-tip.svelte';
import Arrow from '../anatomy/arrow.svelte';
import Content from '../anatomy/content.svelte';
import Positioner from '../anatomy/positioner.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';
import Trigger from '../anatomy/trigger.svelte';

export const Tooltip = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Trigger: Trigger,
	Positioner: Positioner,
	Content: Content,
	Arrow: Arrow,
	ArrowTip: ArrowTip,
});
