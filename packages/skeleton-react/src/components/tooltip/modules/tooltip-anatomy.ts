import TooltipRoot from '../anatomy/tooltip-root';
import TooltipRootContext from '../anatomy/tooltip-root-context';
import TooltipTrigger from '../anatomy/tooltip-trigger';
import TooltipPositioner from '../anatomy/tooltip-positioner';
import TooltipContent from '../anatomy/tooltip-content';
import TooltipArrow from '../anatomy/tooltip-arrow';
import TooltipArrowTip from '../anatomy/tooltip-arrow-tip';

export const Tooltip = Object.assign(TooltipRoot, {
	Context: TooltipRootContext,
	Trigger: TooltipTrigger,
	Positioner: TooltipPositioner,
	Content: TooltipContent,
	Arrow: TooltipArrow,
	ArrowTip: TooltipArrowTip
});
