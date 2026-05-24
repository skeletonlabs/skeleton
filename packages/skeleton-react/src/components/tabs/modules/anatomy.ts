import Content from '../anatomy/content.jsx';
import Indicator from '../anatomy/indicator.jsx';
import List from '../anatomy/list.jsx';
import TabsRootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Root from '../anatomy/root.jsx';
import Trigger from '../anatomy/trigger.jsx';

export const Tabs = Object.assign(Root, {
	Provider: RootProvider,
	Context: TabsRootContext,
	List: List,
	Trigger: Trigger,
	Indicator: Indicator,
	Content: Content,
});
