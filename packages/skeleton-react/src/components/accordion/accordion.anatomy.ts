import AccordionRoot from './accordion-root';
import AccordionItem from './accordion-item';
import AccordionHeading from './accordion-heading';
import AccordionTrigger from './accordion-trigger';
import AccordionIndicator from './accordion-indicator';
import AccordionContent from './accordion-content';
import AccordionRootContext from './accordion-root-context';
import AccordionItemContext from './accordion-item-context';

export const Accordion = Object.assign(AccordionRoot, {
	Context: AccordionRootContext,
	Item: AccordionItem,
	ItemContext: AccordionItemContext,
	Heading: AccordionHeading,
	Trigger: AccordionTrigger,
	Indicator: AccordionIndicator,
	Content: AccordionContent
});
