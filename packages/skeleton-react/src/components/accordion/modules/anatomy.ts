import Content from '../anatomy/content';
import Heading from '../anatomy/heading';
import Indicator from '../anatomy/indicator';
import Item from '../anatomy/item';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import Trigger from '../anatomy/trigger';

export const Accordion = Object.assign(Root, {
	Context: RootContext,
	Item: Item,
	Heading: Heading,
	Trigger: Trigger,
	Indicator: Indicator,
	Content: Content,
});
