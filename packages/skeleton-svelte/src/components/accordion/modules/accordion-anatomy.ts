import AccordionRoot from '../anatomy/accordion-root.svelte';
import AccordionRootContext from '../anatomy/accordion-root-context.svelte';
import AccordionItem from '../anatomy/accordion-item.svelte';
import AccordionItemContext from '../anatomy/accordion-item-context.svelte';
import AccordionHeading from '../anatomy/accordion-heading.svelte';
import AccordionTrigger from '../anatomy/accordion-trigger.svelte';
import AccordionIndicator from '../anatomy/accordion-indicator.svelte';
import AccordionContent from '../anatomy/accordion-content.svelte';

export const Accordion = Object.assign(AccordionRoot, {
	Context: AccordionRootContext,
	Item: AccordionItem,
	ItemContext: AccordionItemContext,
	Heading: AccordionHeading,
	Trigger: AccordionTrigger,
	Indicator: AccordionIndicator,
	Content: AccordionContent
});
