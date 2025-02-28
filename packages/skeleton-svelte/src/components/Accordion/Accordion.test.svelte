<!-- Accordion Test Component -->

<script lang="ts">
	import { Accordion } from '../../index.js';
	interface Props {
		childProps?: Record<string, unknown>;
	}
	let { childProps }: Props = $props();
</script>

<Accordion value={['foo']}>
	<Accordion.Item value="foo" {...childProps}>
		{#snippet lead()}FooLead{/snippet}
		{#snippet control()}FooControl{/snippet}
		{#snippet panel()}FooPanel{/snippet}
	</Accordion.Item>
	<Accordion.Item value="bar" {...childProps}>
		{#snippet lead()}BarLead{/snippet}
		{#snippet control()}BarControl{/snippet}
		{#snippet panel()}BarPanel{/snippet}
	</Accordion.Item>
</Accordion>
