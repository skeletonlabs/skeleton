import Content from '../anatomy/content.svelte';
import Indicator from '../anatomy/indicator.svelte';
import List from '../anatomy/list.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';
import Trigger from '../anatomy/trigger.svelte';

export const Tabs = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	List: List,
	Trigger: Trigger,
	Indicator: Indicator,
	Content: Content,
});
