<script lang="ts">
	import { Accordion } from '$lib/index.js';
	// Icons
	import Club from 'lucide-svelte/icons/club';
	import Diamond from 'lucide-svelte/icons/diamond';
	import Heart from 'lucide-svelte/icons/heart';
	import Spade from 'lucide-svelte/icons/spade';

	let valueDefault = $state(['club']);
	let valueMultiple = $state(['club']);
	let valueCollapsible = $state(['club']);
	let valueOrientation = $state(['club']);

	const lorem =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.';
	const exampleItems = [
		{ icon: Club, value: 'club', title: 'Club', content: lorem },
		{ icon: Diamond, value: 'diamond', title: 'Diamond', content: lorem },
		{ icon: Heart, value: 'heart', title: 'Heart', content: lorem },
		{ icon: Spade, value: 'space', title: 'Spade', content: lorem }
	];
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Segment Control</h1>
	</header>
	<section class="space-y-4">
		<pre class="pre">{JSON.stringify(valueDefault)}</pre>
		<Accordion bind:value={valueDefault}>
			{#each exampleItems as item, i}
				<Accordion.Item value={item.value}>
					{#snippet controlLead()}
						<svelte:component this={item.icon} />
					{/snippet}
					{#snippet control()}
						{item.title}
					{/snippet}
					{#snippet panel()}
						{item.content}
					{/snippet}
				</Accordion.Item>
				{#if i < exampleItems.length - 1}<hr class="hr" />{/if}
			{/each}
		</Accordion>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Collapsible</h2>
		<pre class="pre">{JSON.stringify(valueCollapsible)}</pre>
		<Accordion bind:value={valueCollapsible} collapsible>
			{#each exampleItems as item, i}
				<Accordion.Item value={item.value}>
					{#snippet controlLead()}
						<svelte:component this={item.icon} />
					{/snippet}
					{#snippet control()}
						{item.title}
					{/snippet}
					{#snippet panel()}
						{item.content}
					{/snippet}
				</Accordion.Item>
				{#if i < exampleItems.length - 1}<hr class="hr" />{/if}
			{/each}
		</Accordion>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Multiple</h2>
		<pre class="pre">{JSON.stringify(valueMultiple)}</pre>
		<Accordion bind:value={valueMultiple} multiple>
			{#each exampleItems as item, i}
				<Accordion.Item value={item.value}>
					{#snippet controlLead()}
						<svelte:component this={item.icon} />
					{/snippet}
					{#snippet control()}
						{item.title}
					{/snippet}
					{#snippet panel()}
						{item.content}
					{/snippet}
				</Accordion.Item>
				{#if i < exampleItems.length - 1}<hr class="hr" />{/if}
			{/each}
		</Accordion>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Orientation</h2>
		<pre class="pre">{JSON.stringify(valueOrientation)}</pre>
		<Accordion bind:value={valueOrientation} orientation="horizontal">
			{#each exampleItems as item}
				<Accordion.Item value={item.value}>
					{#snippet controlLead()}
						<item.Icon></item.Icon>
					{/snippet}
					{#snippet control()}
						{item.title}
					{/snippet}
					{#snippet panel()}
						{item.content}
					{/snippet}
				</Accordion.Item>
			{/each}
		</Accordion>
	</section>
</div>
