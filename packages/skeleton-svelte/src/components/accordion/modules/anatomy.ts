import Root from '../anatomy/root.svelte';
import RootContext from '../anatomy/root-context.svelte';
import Item from '../anatomy/item.svelte';
import Heading from '../anatomy/heading.svelte';
import Trigger from '../anatomy/trigger.svelte';
import Indicator from '../anatomy/indicator.svelte';
import Content from '../anatomy/content.svelte';

export const Accordion = Object.assign(Root, {
	Context: RootContext,
	Item: Item,
	Heading: Heading,
	Trigger: Trigger,
	Indicator: Indicator,
	Content: Content
});
