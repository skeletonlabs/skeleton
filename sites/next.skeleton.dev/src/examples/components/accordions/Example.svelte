<script lang="ts">
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton-svelte';

    const lorem =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.';
	const ontoggle = (e: Event) => console.log(e);

    // FIXME: required for Astro bug
    let {} = $props<any>()
</script>

<Accordion>
    <!-- Icons -->
    <!-- {#snippet iconOpen()}&uarr;{/snippet} -->
    <!-- {#snippet iconClosed()}&darr;{/snippet} -->
    <!-- Children -->
    <AccordionItem id="svelteItem1" {ontoggle} open>
        <!-- Control -->
        {#snippet controlLead()}💀{/snippet}
        {#snippet control()}Svelte Control 1{/snippet}
        <!-- Panel -->
        {#snippet panel()}Svelte Panel 1 - {lorem}{/snippet}
    </AccordionItem>
    <hr class="hr" />
    <AccordionItem id="svelteItem2" {ontoggle}>
        {#snippet control()}Svelte Control 2{/snippet}
        {#snippet panel()}Svelte Panel 2 - {lorem}{/snippet}
    </AccordionItem>
    <hr class="hr" />
    <AccordionItem id="svelteItem3" {ontoggle} disabled>
        {#snippet control()}Svelte Control 3 (disabled){/snippet}
        {#snippet panel()}Svelte Panel 3 - {lorem}{/snippet}
    </AccordionItem>
    <hr class="hr" />
    <AccordionItem id="svelteItem4" {ontoggle}>
        {#snippet control()}Svelte Control 4{/snippet}
        {#snippet panel()}Svelte Panel 4 - {lorem}{/snippet}
    </AccordionItem>
</Accordion>