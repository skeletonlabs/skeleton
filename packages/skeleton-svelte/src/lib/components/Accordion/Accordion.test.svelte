<!-- Accordion Test Component -->

<script lang="ts">
	import { Accordion } from '$lib/index.js';
	let { childProps = {} } = $props();
	let chilPropsSpread = childProps ?? {};
</script>

<Accordion value={['foo']}>
	<Accordion.Item value="foo" {...chilPropsSpread}>
		{#snippet lead()}FooLead{/snippet}
		{#snippet control()}FooControl{/snippet}
		{#snippet panel()}FooPanel{/snippet}
	</Accordion.Item>
	<Accordion.Item value="bar" {...chilPropsSpread}>
		{#snippet lead()}BarLead{/snippet}
		{#snippet control()}BarControl{/snippet}
		{#snippet panel()}BarPanel{/snippet}
	</Accordion.Item>
</Accordion>
