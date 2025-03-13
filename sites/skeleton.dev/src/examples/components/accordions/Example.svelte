<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import Club from '@lucide/svelte/icons/club';
	import Diamond from '@lucide/svelte/icons/diamond';
	import Heart from '@lucide/svelte/icons/heart';
	import Spade from '@lucide/svelte/icons/spade';

	const lorem =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.';

	let value = $state(['club']);
</script>

<Accordion {value} onValueChange={(e) => (value = e.value)}>
	<Accordion.Item value="club">
		<!-- Control -->
		{#snippet lead()}<Club size={24} />{/snippet}
		{#snippet control()}Club{/snippet}
		<!-- Panel -->
		{#snippet panel()}{lorem}{/snippet}
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="diamond">
		{#snippet lead()}<Diamond size={24} />{/snippet}
		{#snippet control()}Diamond{/snippet}
		{#snippet panel()}{lorem}{/snippet}
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="heart" disabled>
		{#snippet lead()}<Heart size={24} />{/snippet}
		{#snippet control()}Heart (disabled){/snippet}
		{#snippet panel()}{lorem}{/snippet}
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="spade">
		{#snippet lead()}<Spade size={24} />{/snippet}
		{#snippet control()}Spade{/snippet}
		{#snippet panel()}{lorem}{/snippet}
	</Accordion.Item>
</Accordion>
