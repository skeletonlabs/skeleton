import Content from '../anatomy/content.svelte';
import Indicator from '../anatomy/indicator.svelte';
import Item from '../anatomy/item.svelte';
import List from '../anatomy/list.svelte';
import NextTrigger from '../anatomy/next-trigger.svelte';
import PrevTrigger from '../anatomy/prev-trigger.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';
import Separator from '../anatomy/separator.svelte';
import Trigger from '../anatomy/trigger.svelte';

export const Steps = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	List: List,
	Item: Item,
	Trigger: Trigger,
	Indicator: Indicator,
	Separator: Separator,
	Content: Content,
	PrevTrigger: PrevTrigger,
	NextTrigger: NextTrigger,
});
