<script lang="ts">
	import { Accordion } from '$lib/index.js';

	let valueDefault = $state([]);
	let valueMultiple = $state([]);
	let valueCollapsible = $state([]);

	const data = [
		{ title: 'Watercraft', content: 'Sample accordion content' },
		{ title: 'Automobiles', content: 'Sample accordion content' },
		{ title: 'Aircrafts', content: 'Sample accordion content' }
	];
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Segment Control</h1>
	</header>
	<section class="space-y-4">
		<pre class="pre">{valueDefault}</pre>
		<Accordion bind:value={valueDefault}>
			{#each data as item}
				<Accordion.Item id={item.title}>
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
	<section class="space-y-4">
		<h2 class="h2">Collapsible</h2>
		<pre class="pre">{valueCollapsible}</pre>
		<Accordion bind:value={valueCollapsible} collapsible>
			{#each data as item}
				<Accordion.Item id={item.title}>
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
	<section class="space-y-4">
		<h2 class="h2">Multiple</h2>
		<pre class="pre">{valueMultiple}</pre>
		<Accordion bind:value={valueMultiple} multiple>
			{#each data as item}
				<Accordion.Item id={item.title}>
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
