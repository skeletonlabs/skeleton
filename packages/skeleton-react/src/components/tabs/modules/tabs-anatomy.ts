import TabsRoot from '../anatomy/tabs-root';
import TabsRootContext from '../anatomy/tabs-root-context';
import TabsList from '../anatomy/tabs-list';
import TabsTrigger from '../anatomy/tabs-trigger';
import tabsIndicator from '../anatomy/tabs-indicator';
import TabsContent from '../anatomy/tabs-content';

export const Tabs = Object.assign(TabsRoot, {
	Context: TabsRootContext,
	List: TabsList,
	Trigger: TabsTrigger,
	Indicator: tabsIndicator,
	Content: TabsContent
});
