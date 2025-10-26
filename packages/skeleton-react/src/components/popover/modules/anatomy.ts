import ArrowTip from '../anatomy/arrow-tip.jsx';
import Arrow from '../anatomy/arrow.jsx';
import CloseTrigger from '../anatomy/close-trigger.jsx';
import Content from '../anatomy/content.jsx';
import Description from '../anatomy/description.jsx';
import Positioner from '../anatomy/positioner.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Root from '../anatomy/root.jsx';
import Title from '../anatomy/title.jsx';
import Trigger from '../anatomy/trigger.jsx';

export const Popover = Object.assign(Root, {
	Provider: RootProvider,
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
