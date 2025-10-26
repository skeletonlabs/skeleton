import Content from '../anatomy/content.jsx';
import Indicator from '../anatomy/indicator.jsx';
import List from '../anatomy/list.jsx';
import Root from '../anatomy/root.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Trigger from '../anatomy/trigger.jsx';

export const Tabs = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	List: List,
	Trigger: Trigger,
	Indicator: Indicator,
	Content: Content,
});
