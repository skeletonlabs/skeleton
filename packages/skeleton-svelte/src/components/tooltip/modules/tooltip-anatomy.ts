import TooltipRoot from '../anatomy/tooltip-root.svelte';
import TooltipRootContext from '../anatomy/tooltip-root-context.svelte';
import TooltipTrigger from '../anatomy/tooltip-trigger.svelte';
import TooltipPositioner from '../anatomy/tooltip-positioner.svelte';
import TooltipContent from '../anatomy/tooltip-content.svelte';
import TooltipArrow from '../anatomy/tooltip-arrow.svelte';
import TooltipArrowTip from '../anatomy/tooltip-arrow-tip.svelte';

export const Tooltip = Object.assign(TooltipRoot, {
	Context: TooltipRootContext,
	Trigger: TooltipTrigger,
	Positioner: TooltipPositioner,
	Content: TooltipContent,
	Arrow: TooltipArrow,
	ArrowTip: TooltipArrowTip
});
