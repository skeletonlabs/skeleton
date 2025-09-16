import ItemContent from '../anatomy/item-content.svelte';
import ItemHeading from '../anatomy/item-heading.svelte';
import ItemIndicator from '../anatomy/item-indicator.svelte';
import ItemTrigger from '../anatomy/item-trigger.svelte';
import Item from '../anatomy/item.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';

export const Accordion = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Item: Item,
	ItemHeading: ItemHeading,
	ItemTrigger: ItemTrigger,
	ItemIndicator: ItemIndicator,
	ItemContent: ItemContent,
});
