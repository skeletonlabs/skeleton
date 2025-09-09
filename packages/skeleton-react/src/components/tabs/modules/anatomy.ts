import TabsRoot from '../anatomy/root';
import TabsRootContext from '../anatomy/root-context';
import TabsList from '../anatomy/list';
import TabsTrigger from '../anatomy/trigger';
import tabsIndicator from '../anatomy/indicator';
import TabsContent from '../anatomy/content';

export const Tabs = Object.assign(TabsRoot, {
	Context: TabsRootContext,
	List: TabsList,
	Trigger: TabsTrigger,
	Indicator: tabsIndicator,
	Content: TabsContent
});
