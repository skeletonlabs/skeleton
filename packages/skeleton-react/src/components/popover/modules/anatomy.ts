import Arrow from '../anatomy/arrow';
import ArrowTip from '../anatomy/arrow-tip';
import CloseTrigger from '../anatomy/close-trigger';
import Content from '../anatomy/content';
import Description from '../anatomy/description';
import Positioner from '../anatomy/positioner';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import Title from '../anatomy/title';
import Trigger from '../anatomy/trigger';

export const Popover = Object.assign(Root, {
	Context: RootContext,
	Trigger: Trigger,
	Positioner: Positioner,
	Content: Content,
	Arrow: Arrow,
	ArrowTip: ArrowTip,
	Title: Title,
	Description: Description,
	CloseTrigger: CloseTrigger,
});
