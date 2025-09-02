import TabsRoot from '../anatomy/tabs-root.svelte';
import TabsRootContext from '../anatomy/tabs-root-context.svelte';
import TabsList from '../anatomy/tabs-list.svelte';
import TabsTrigger from '../anatomy/tabs-trigger.svelte';
import TabsLabel from '../anatomy/tabs-label.svelte';
import TabsContent from '../anatomy/tabs-content.svelte';

export const Tabs = Object.assign(TabsRoot, {
	Context: TabsRootContext,
	List: TabsList,
	Trigger: TabsTrigger,
	Label: TabsLabel,
	Content: TabsContent
});
