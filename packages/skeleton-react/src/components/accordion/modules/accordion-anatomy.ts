import AccordionRoot from '../anatomy/accordion-root.js';
import AccordionItem from '../anatomy/accordion-item.js';
import AccordionHeading from '../anatomy/accordion-heading.js';
import AccordionTrigger from '../anatomy/accordion-trigger.js';
import AccordionIndicator from '../anatomy/accordion-indicator.js';
import AccordionContent from '../anatomy/accordion-content.js';
import AccordionRootContext from '../anatomy/accordion-root-context.js';
import AccordionItemContext from '../anatomy/accordion-item-context.js';

export const Accordion = Object.assign(AccordionRoot, {
	Context: AccordionRootContext,
	Item: AccordionItem,
	ItemContext: AccordionItemContext,
	Heading: AccordionHeading,
	Trigger: AccordionTrigger,
	Indicator: AccordionIndicator,
	Content: AccordionContent
});
