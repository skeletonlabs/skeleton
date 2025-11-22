import Content from '../anatomy/content.jsx';
import Indicator from '../anatomy/indicator.jsx';
import Item from '../anatomy/item.jsx';
import List from '../anatomy/list.jsx';
import NextTrigger from '../anatomy/next-trigger.jsx';
import PrevTrigger from '../anatomy/prev-trigger.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Root from '../anatomy/root.jsx';
import Separator from '../anatomy/separator.jsx';
import Trigger from '../anatomy/trigger.jsx';

export const Steps = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	List: List,
	Item: Item,
	Trigger: Trigger,
	Indicator: Indicator,
	Separator: Separator,
	Content: Content,
	PrevTrigger: PrevTrigger,
	NextTrigger: NextTrigger,
});
