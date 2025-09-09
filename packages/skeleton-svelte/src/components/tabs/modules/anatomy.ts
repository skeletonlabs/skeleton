import Root from '../anatomy/root.svelte';
import RootContext from '../anatomy/root-context.svelte';
import List from '../anatomy/list.svelte';
import Trigger from '../anatomy/trigger.svelte';
import Indicator from '../anatomy/indicator.svelte';
import Content from '../anatomy/content.svelte';

export const Tabs = Object.assign(Root, {
	Context: RootContext,
	List: List,
	Trigger: Trigger,
	Indicator: Indicator,
	Content: Content
});
