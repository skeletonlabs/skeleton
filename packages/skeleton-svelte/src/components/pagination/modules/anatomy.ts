import Ellipsis from '../anatomy/ellipsis.svelte';
import Item from '../anatomy/item.svelte';
import NextTrigger from '../anatomy/next-trigger.svelte';
import PrevTrigger from '../anatomy/prev-trigger.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';

export const Pagination = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	PrevTrigger: PrevTrigger,
	Item: Item,
	Ellipsis: Ellipsis,
	NextTrigger: NextTrigger,
});
