import AccordionRoot from '../anatomy/root.svelte';
import AccordionRootContext from '../anatomy/root-context.svelte';
import AccordionItem from '../anatomy/item.svelte';
import AccordionItemContext from '../anatomy/item-context.svelte';
import AccordionHeading from '../anatomy/heading.svelte';
import AccordionTrigger from '../anatomy/trigger.svelte';
import AccordionIndicator from '../anatomy/indicator.svelte';
import AccordionContent from '../anatomy/content.svelte';

export const Accordion = Object.assign(AccordionRoot, {
	Context: AccordionRootContext,
	Item: AccordionItem,
	ItemContext: AccordionItemContext,
	Heading: AccordionHeading,
	Trigger: AccordionTrigger,
	Indicator: AccordionIndicator,
	Content: AccordionContent
});
