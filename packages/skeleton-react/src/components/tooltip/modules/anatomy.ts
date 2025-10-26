import Arrow from '../anatomy/arrow.jsx';
import ArrowTip from '../anatomy/arrow-tip.jsx';
import Content from '../anatomy/content.jsx';
import Positioner from '../anatomy/positioner.jsx';
import Root from '../anatomy/root.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Trigger from '../anatomy/trigger.jsx';

export const Tooltip = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Trigger: Trigger,
	Positioner: Positioner,
	Content: Content,
	Arrow: Arrow,
	ArrowTip: ArrowTip,
});
