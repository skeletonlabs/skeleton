import TabsRoot from '../anatomy/root.svelte';
import TabsRootContext from '../anatomy/root-context.svelte';
import TabsList from '../anatomy/list.svelte';
import TabsTrigger from '../anatomy/trigger.svelte';
import TabsIndicator from '../anatomy/indicator.svelte';
import TabsContent from '../anatomy/content.svelte';

export const Tabs = Object.assign(TabsRoot, {
	Context: TabsRootContext,
	List: TabsList,
	Trigger: TabsTrigger,
	Indicator: TabsIndicator,
	Content: TabsContent
});
