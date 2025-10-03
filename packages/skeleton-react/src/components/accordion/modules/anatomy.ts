import Item from '../anatomy/item';
import ItemContent from '../anatomy/item-content';
import ItemIndicator from '../anatomy/item-indicator';
import ItemTrigger from '../anatomy/item-trigger';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';

export const Accordion = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Item: Item,
	ItemTrigger: ItemTrigger,
	ItemIndicator: ItemIndicator,
	ItemContent: ItemContent,
});
