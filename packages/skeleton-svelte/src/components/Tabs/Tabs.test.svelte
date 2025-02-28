<script lang="ts">
	import { Tabs } from '../../index.js';
	interface Props {
		controlProps?: Record<string, unknown>;
		panelProps?: Record<string, unknown>;
	}
	let { controlProps, panelProps }: Props = $props();
</script>

<Tabs value="foo">
	{#snippet list()}
		<Tabs.Control value="foo" {...controlProps}>fooControl</Tabs.Control>
		<Tabs.Control value="bar" {...controlProps}>barControl</Tabs.Control>
		<Tabs.Control value="fizz" {...controlProps}>fizzControl</Tabs.Control>
	{/snippet}
	{#snippet content()}
		<Tabs.Panel value="foo" {...panelProps}>fooPanel</Tabs.Panel>
		<Tabs.Panel value="bar" {...panelProps}>barPanel</Tabs.Panel>
		<Tabs.Panel value="fizz" {...panelProps}>fizzPanel</Tabs.Panel>
	{/snippet}
</Tabs>
