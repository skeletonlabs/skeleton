import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import Trigger from '../anatomy/trigger';
import Positioner from '../anatomy/positioner';
import Content from '../anatomy/content';
import Arrow from '../anatomy/arrow';
import ArrowTip from '../anatomy/arrow-tip';

export const Tooltip = Object.assign(Root, {
	Context: RootContext,
	Trigger: Trigger,
	Positioner: Positioner,
	Content: Content,
	Arrow: Arrow,
	ArrowTip: ArrowTip
});
