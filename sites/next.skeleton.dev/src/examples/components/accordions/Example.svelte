<script lang="ts">
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton-svelte';
    import Club from 'lucide-svelte/icons/club';
    import Diamond from 'lucide-svelte/icons/diamond';
    import Heart from 'lucide-svelte/icons/heart';
    import Spade from 'lucide-svelte/icons/spade';

    const lorem =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.';
	const ontoggle = (e: Event) => console.log(e);
</script>

<Accordion>
    <AccordionItem id="svelteItem1" {ontoggle}>
        <!-- Control -->
        {#snippet controlLead()}<Club size={24} />{/snippet}
        {#snippet control()}Club{/snippet}
        <!-- Panel -->
        {#snippet panel()}Svelte Panel 1 - {lorem}{/snippet}
    </AccordionItem>
    <hr class="hr" />
    <AccordionItem id="svelteItem2" {ontoggle}>
        {#snippet controlLead()}<Diamond size={24} />{/snippet}
        {#snippet control()}Diamond{/snippet}
        {#snippet panel()}Svelte Panel 2 - {lorem}{/snippet}
    </AccordionItem>
    <hr class="hr" />
    <AccordionItem id="svelteItem3" {ontoggle} disabled>
        {#snippet controlLead()}<Heart size={24} />{/snippet}
        {#snippet control()}Heart (disabled){/snippet}
        {#snippet panel()}Svelte Panel 3 - {lorem}{/snippet}
    </AccordionItem>
    <hr class="hr" />
    <AccordionItem id="svelteItem4" {ontoggle}>
        {#snippet controlLead()}<Spade size={24} />{/snippet}
        {#snippet control()}Spade{/snippet}
        {#snippet panel()}Svelte Panel 4 - {lorem}{/snippet}
    </AccordionItem>
</Accordion>