import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import Item from '../anatomy/item';
import Heading from '../anatomy/heading';
import Trigger from '../anatomy/trigger';
import Indicator from '../anatomy/indicator';
import Content from '../anatomy/content';

export const Accordion = Object.assign(Root, {
	Context: RootContext,
	Item: Item,
	Heading: Heading,
	Trigger: Trigger,
	Indicator: Indicator,
	Content: Content
});
