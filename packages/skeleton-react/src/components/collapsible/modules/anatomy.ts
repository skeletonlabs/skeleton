import Content from '../anatomy/content.jsx';
import Indicator from '../anatomy/indicator.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Root from '../anatomy/root.jsx';
import Trigger from '../anatomy/trigger.jsx';

export const Collapsible = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Trigger: Trigger,
	Indicator: Indicator,
	Content: Content,
});
