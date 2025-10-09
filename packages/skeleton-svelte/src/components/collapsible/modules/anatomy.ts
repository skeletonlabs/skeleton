import Content from '../anatomy/content.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';
import Trigger from '../anatomy/trigger.svelte';

export const Collapsible = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Trigger: Trigger,
	Content: Content,
});
