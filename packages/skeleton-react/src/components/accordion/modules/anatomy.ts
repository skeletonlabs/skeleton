import Item from '../anatomy/item';
import ItemContent from '../anatomy/item-content';
import ItemHeading from '../anatomy/item-heading';
import ItemIndicator from '../anatomy/item-indicator';
import ItemTrigger from '../anatomy/item-trigger';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';

export const Accordion = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Item: Item,
	ItemHeading: ItemHeading,
	ItemTrigger: ItemTrigger,
	ItemIndicator: ItemIndicator,
	ItemContent: ItemContent,
});
