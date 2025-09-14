import Content from '../anatomy/content.svelte';
import Heading from '../anatomy/heading.svelte';
import Indicator from '../anatomy/indicator.svelte';
import Item from '../anatomy/item.svelte';
import Root from '../anatomy/root.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Trigger from '../anatomy/trigger.svelte';

export const Accordion = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Item: Item,
	Heading: Heading,
	Trigger: Trigger,
	Indicator: Indicator,
	Content: Content,
});
