import TooltipRoot from '../anatomy/root.svelte';
import TooltipRootContext from '../anatomy/root-context.svelte';
import TooltipTrigger from '../anatomy/trigger.svelte';
import TooltipPositioner from '../anatomy/positioner.svelte';
import TooltipContent from '../anatomy/content.svelte';
import TooltipArrow from '../anatomy/arrow.svelte';
import TooltipArrowTip from '../anatomy/arrow-tip.svelte';

export const Tooltip = Object.assign(TooltipRoot, {
	Context: TooltipRootContext,
	Trigger: TooltipTrigger,
	Positioner: TooltipPositioner,
	Content: TooltipContent,
	Arrow: TooltipArrow,
	ArrowTip: TooltipArrowTip
});
