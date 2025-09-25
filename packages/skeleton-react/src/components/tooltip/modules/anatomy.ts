import Arrow from '../anatomy/arrow';
import ArrowTip from '../anatomy/arrow-tip';
import Content from '../anatomy/content';
import Positioner from '../anatomy/positioner';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';
import Trigger from '../anatomy/trigger';

export const Tooltip = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Trigger: Trigger,
	Positioner: Positioner,
	Content: Content,
	Arrow: Arrow,
	ArrowTip: ArrowTip,
});
