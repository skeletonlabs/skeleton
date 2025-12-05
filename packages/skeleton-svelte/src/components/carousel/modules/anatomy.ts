import AutoplayTrigger from '../anatomy/autoplay-trigger.svelte';
import Control from '../anatomy/control.svelte';
import Indicator from '../anatomy/indicator.svelte';
import IndicatorGroup from '../anatomy/indicator-group.svelte';
import Item from '../anatomy/item.svelte';
import ItemGroup from '../anatomy/item-group.svelte';
import NextTrigger from '../anatomy/next-trigger.svelte';
import PrevTrigger from '../anatomy/prev-trigger.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';

export const Carousel = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Control: Control,
	ItemGroup: ItemGroup,
	Item: Item,
	PrevTrigger: PrevTrigger,
	NextTrigger: NextTrigger,
	AutoplayTrigger: AutoplayTrigger,
	IndicatorGroup: IndicatorGroup,
	Indicator: Indicator,
});
