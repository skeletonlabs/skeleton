import AccordionRoot from '../anatomy/accordion-root.js';
import AccordionItem from '../anatomy/accordion-item.js';
import AccordionTrigger from '../anatomy/accordion-trigger.js';
import AccordionIndicator from '../anatomy/accordion-indicator.js';
import AccordionContent from '../anatomy/accordion-content.js';

const Accordion = Object.assign(AccordionRoot, {
	Item: AccordionItem,
	Trigger: AccordionTrigger,
	Indicator: AccordionIndicator,
	Content: AccordionContent
});

export { Accordion };
