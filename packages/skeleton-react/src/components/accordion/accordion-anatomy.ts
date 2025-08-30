import AccordionRoot from './accordion-root.jsx';
import AccordionItem from './accordion-item.jsx';
import AccordionHeading from './accordion-heading.jsx';
import AccordionTrigger from './accordion-trigger.jsx';
import AccordionIndicator from './accordion-indicator.jsx';
import AccordionContent from './accordion-content.jsx';
import AccordionRootContext from './accordion-root-context.jsx';
import AccordionItemContext from './accordion-item-context.jsx';

export const Accordion = Object.assign(AccordionRoot, {
	Context: AccordionRootContext,
	Item: AccordionItem,
	ItemContext: AccordionItemContext,
	Heading: AccordionHeading,
	Trigger: AccordionTrigger,
	Indicator: AccordionIndicator,
	Content: AccordionContent
});
