import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import List from '../anatomy/list';
import Trigger from '../anatomy/trigger';
import Indicator from '../anatomy/indicator';
import Content from '../anatomy/content';

export const Tabs = Object.assign(Root, {
	Context: RootContext,
	List: List,
	Trigger: Trigger,
	Indicator: Indicator,
	Content: Content
});
