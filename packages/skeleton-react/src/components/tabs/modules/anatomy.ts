import Content from '../anatomy/content';
import Indicator from '../anatomy/indicator';
import List from '../anatomy/list';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';
import Trigger from '../anatomy/trigger';

export const Tabs = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	List: List,
	Trigger: Trigger,
	Indicator: Indicator,
	Content: Content,
});
