import ItemContent from '../anatomy/item-content.jsx';
import ItemIndicator from '../anatomy/item-indicator.jsx';
import ItemTrigger from '../anatomy/item-trigger.jsx';
import Item from '../anatomy/item.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Root from '../anatomy/root.jsx';

export const Accordion = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Item: Item,
	ItemTrigger: ItemTrigger,
	ItemIndicator: ItemIndicator,
	ItemContent: ItemContent,
});
