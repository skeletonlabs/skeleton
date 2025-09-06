import TabsRoot from '../anatomy/tabs-rootx';
import TabsRootContext from '../anatomy/tabs-root-contextx';
import TabsList from '../anatomy/tabs-listx';
import TabsTrigger from '../anatomy/tabs-triggerx';
import tabsIndicator from '../anatomy/tabs-indicator';
import TabsContent from '../anatomy/tabs-contentx';

export const Tabs = Object.assign(TabsRoot, {
	Context: TabsRootContext,
	List: TabsList,
	Trigger: TabsTrigger,
	Indicator: tabsIndicator,
	Content: TabsContent
});
