import AccordionRoot from '../anatomy/accordion-root.svelte';
import AccordionItem from '../anatomy/accordion-item.svelte';
import AccordionHeading from '../anatomy/accordion-heading.svelte';
import AccordionTrigger from '../anatomy/accordion-trigger.svelte';
import AccordionIndicator from '../anatomy/accordion-indicator.svelte';
import AccordionContent from '../anatomy/accordion-content.svelte';

const Accordion = Object.assign(AccordionRoot, {
	Item: AccordionItem,
	Heading: AccordionHeading,
	Trigger: AccordionTrigger,
	Indicator: AccordionIndicator,
	Content: AccordionContent
});

export { Accordion };
