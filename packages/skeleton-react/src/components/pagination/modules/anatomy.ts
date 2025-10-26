import Ellipsis from '../anatomy/ellipsis.jsx';
import Item from '../anatomy/item.jsx';
import NextTrigger from '../anatomy/next-trigger.jsx';
import PrevTrigger from '../anatomy/prev-trigger.jsx';
import Root from '../anatomy/root.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';

export const Pagination = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	PrevTrigger: PrevTrigger,
	Item: Item,
	Ellipsis: Ellipsis,
	NextTrigger: NextTrigger,
});
