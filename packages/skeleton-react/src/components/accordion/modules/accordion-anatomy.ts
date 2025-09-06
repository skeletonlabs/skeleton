import AccordionRoot from '../anatomy/accordion-root';
import AccordionItem from '../anatomy/accordion-item';
import AccordionHeading from '../anatomy/accordion-heading';
import AccordionTrigger from '../anatomy/accordion-trigger';
import AccordionIndicator from '../anatomy/accordion-indicator';
import AccordionContent from '../anatomy/accordion-content';
import AccordionRootContext from '../anatomy/accordion-root-context';
import AccordionItemContext from '../anatomy/accordion-item-context';

export const Accordion = Object.assign(AccordionRoot, {
	Context: AccordionRootContext,
	Item: AccordionItem,
	ItemContext: AccordionItemContext,
	Heading: AccordionHeading,
	Trigger: AccordionTrigger,
	Indicator: AccordionIndicator,
	Content: AccordionContent
});
