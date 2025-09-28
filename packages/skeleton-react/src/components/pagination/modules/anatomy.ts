import Ellipsis from '../anatomy/ellipsis';
import Item from '../anatomy/item';
import NextTrigger from '../anatomy/next-trigger';
import PrevTrigger from '../anatomy/prev-trigger';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';

export const Pagination = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	PrevTrigger: PrevTrigger,
	Item: Item,
	Ellipsis: Ellipsis,
	NextTrigger: NextTrigger,
});
