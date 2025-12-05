import AutoplayTrigger from '../anatomy/autoplay-trigger.jsx';
import Control from '../anatomy/control.jsx';
import Indicator from '../anatomy/indicator.jsx';
import IndicatorGroup from '../anatomy/indicator-group.jsx';
import Item from '../anatomy/item.jsx';
import ItemGroup from '../anatomy/item-group.jsx';
import NextTrigger from '../anatomy/next-trigger.jsx';
import PrevTrigger from '../anatomy/prev-trigger.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Root from '../anatomy/root.jsx';

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
