import Ellipsis from '../anatomy/ellipsis.jsx';
import FirstTrigger from '../anatomy/first-trigger.jsx';
import Item from '../anatomy/item.jsx';
import LastTrigger from '../anatomy/last-trigger.jsx';
import NextTrigger from '../anatomy/next-trigger.jsx';
import PrevTrigger from '../anatomy/prev-trigger.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Root from '../anatomy/root.jsx';

export const Pagination = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	FirstTrigger: FirstTrigger,
	PrevTrigger: PrevTrigger,
	Item: Item,
	Ellipsis: Ellipsis,
	NextTrigger: NextTrigger,
	LastTrigger: LastTrigger,
});
