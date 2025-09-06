import PopoverRoot from '../anatomy/popover-root';
import PopoverRootContext from '../anatomy/popover-root-context';
import PopoverTrigger from '../anatomy/popover-trigger';
import PopoverPositioner from '../anatomy/popover-positioner';
import PopoverArrow from '../anatomy/popover-arrow';
import PopoverArrowTip from '../anatomy/popover-arrow-tip';
import PopoverContent from '../anatomy/popover-content';
import PopoverTitle from '../anatomy/popover-title';
import PopoverDescription from '../anatomy/popover-description';
import PopoverCloseTrigger from '../anatomy/popover-close-trigger';

export const Popover = Object.assign(PopoverRoot, {
	Context: PopoverRootContext,
	Trigger: PopoverTrigger,
	Positioner: PopoverPositioner,
	Arrow: PopoverArrow,
	ArrowTip: PopoverArrowTip,
	Content: PopoverContent,
	Title: PopoverTitle,
	Description: PopoverDescription,
	CloseTrigger: PopoverCloseTrigger
});
