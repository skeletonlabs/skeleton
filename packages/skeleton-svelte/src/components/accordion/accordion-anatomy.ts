import AccordionRoot from './accordion-root.svelte';
import AccordionItem from './accordion-item.svelte';
import AccordionHeading from './accordion-heading.svelte';
import AccordionTrigger from './accordion-trigger.svelte';
import AccordionIndicator from './accordion-indicator.svelte';
import AccordionContent from './accordion-content.svelte';
import AccordionRootContext from './accordion-root-context.svelte';
import AccordionItemContext from './accordion-item-context.svelte';

export const Accordion = Object.assign(AccordionRoot, {
	Context: AccordionRootContext,
	Item: AccordionItem,
	ItemContext: AccordionItemContext,
	Heading: AccordionHeading,
	Trigger: AccordionTrigger,
	Indicator: AccordionIndicator,
	Content: AccordionContent
});
