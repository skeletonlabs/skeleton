import TabsRoot from '../anatomy/tabs-root.jsx';
import TabsRootContext from '../anatomy/tabs-root-context.jsx';
import TabsList from '../anatomy/tabs-list.jsx';
import TabsTrigger from '../anatomy/tabs-trigger.jsx';
import TabsLabel from '../anatomy/tabs-label.jsx';
import TabsContent from '../anatomy/tabs-content.jsx';

export const Tabs = Object.assign(TabsRoot, {
	Context: TabsRootContext,
	List: TabsList,
	Trigger: TabsTrigger,
	Label: TabsLabel,
	Content: TabsContent
});
