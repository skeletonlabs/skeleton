import PopoverRoot from '../anatomy/popover-root.svelte';
import PopoverRootContext from '../anatomy/popover-root-context.svelte';
import PopoverTrigger from '../anatomy/popover-trigger.svelte';
import PopoverPositioner from '../anatomy/popover-positioner.svelte';
import PopoverContent from '../anatomy/popover-content.svelte';
import PopoverArrow from '../anatomy/popover-arrow.svelte';
import PopoverArrowTip from '../anatomy/popover-arrow-tip.svelte';
import PopoverTitle from '../anatomy/popover-title.svelte';
import PopoverDescription from '../anatomy/popover-description.svelte';
import PopoverCloseTrigger from '../anatomy/popover-close-trigger.svelte';

export const Popover = Object.assign(PopoverRoot, {
	Context: PopoverRootContext,
	Trigger: PopoverTrigger,
	Positioner: PopoverPositioner,
	Content: PopoverContent,
	Arrow: PopoverArrow,
	ArrowTip: PopoverArrowTip,
	Title: PopoverTitle,
	Description: PopoverDescription,
	CloseTrigger: PopoverCloseTrigger
});
