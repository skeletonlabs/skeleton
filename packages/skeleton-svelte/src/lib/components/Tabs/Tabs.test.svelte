<script lang="ts">
	import { Tabs } from '$lib/index.js';
	let { controlProps = {}, panelProps = {} } = $props();
	let controlPropsSpread = controlProps ?? {};
	let panelPropsSpread = panelProps ?? {};
</script>

<Tabs value="foo">
	{#snippet list()}
		<Tabs.Control value="foo" {...controlPropsSpread}>fooControl</Tabs.Control>
		<Tabs.Control value="bar" {...controlPropsSpread}>barControl</Tabs.Control>
		<Tabs.Control value="fizz" {...controlPropsSpread}>fizzControl</Tabs.Control>
	{/snippet}
	{#snippet content()}
		<Tabs.Panel value="foo" {...panelPropsSpread}>fooPanel</Tabs.Panel>
		<Tabs.Panel value="bar" {...panelPropsSpread}>barPanel</Tabs.Panel>
		<Tabs.Panel value="fizz" {...panelPropsSpread}>fizzPanel</Tabs.Panel>
	{/snippet}
</Tabs>
