<script lang="ts">
  import Accordion from '$lib/components/Accordion/Accordion.svelte';
  import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte';

  const lorem =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.';
  const ontoggle = (e: Event) => console.log(e);

  let multiple = $state(false);
  let value = $state(['svelteItem1']);
</script>

<label class="flex items-center gap-2">
  <input type="checkbox" bind:checked={multiple} />
  <span class="label-text">Allow multiple</span>
</label>

<pre class="pre">Open: {value.join(', ')}</pre>

<!-- <div class="card p-4 preset-filled-surface-100-900"> -->
<Accordion {multiple} bind:value>
  <!-- Icons -->
  <!-- {#snippet iconOpen()}&uarr;{/snippet} -->
  <!-- {#snippet iconClosed()}&darr;{/snippet} -->
  <!-- Children -->
  <AccordionItem id="svelteItem1">
    <!-- Control -->
    {#snippet controlLead()}💀{/snippet}
    {#snippet control()}Svelte Control 1{/snippet}
    <!-- Panel -->
    {#snippet panel()}Svelte Panel 1 - {lorem}{/snippet}
  </AccordionItem>
  <hr class="hr" />
  <AccordionItem id="svelteItem2">
    {#snippet control()}Svelte Control 2{/snippet}
    {#snippet panel()}Svelte Panel 2 - {lorem}{/snippet}
  </AccordionItem>
  <hr class="hr" />
  <AccordionItem id="svelteItem3" disabled>
    {#snippet control()}Svelte Control 3 (disabled){/snippet}
    {#snippet panel()}Svelte Panel 3 - {lorem}{/snippet}
  </AccordionItem>
  <hr class="hr" />
  <AccordionItem id="svelteItem4">
    {#snippet control()}Svelte Control 4{/snippet}
    {#snippet panel()}Svelte Panel 4 - {lorem}{/snippet}
  </AccordionItem>
</Accordion>
<!-- </div> -->
