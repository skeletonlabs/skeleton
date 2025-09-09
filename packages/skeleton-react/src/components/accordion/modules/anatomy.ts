import AccordionRoot from '../anatomy/root';
import AccordionItem from '../anatomy/item';
import AccordionHeading from '../anatomy/heading';
import AccordionTrigger from '../anatomy/trigger';
import AccordionIndicator from '../anatomy/indicator';
import AccordionContent from '../anatomy/content';
import AccordionRootContext from '../anatomy/root-context';
import AccordionItemContext from '../anatomy/item-context';

export const Accordion = Object.assign(AccordionRoot, {
	Context: AccordionRootContext,
	Item: AccordionItem,
	ItemContext: AccordionItemContext,
	Heading: AccordionHeading,
	Trigger: AccordionTrigger,
	Indicator: AccordionIndicator,
	Content: AccordionContent
});
