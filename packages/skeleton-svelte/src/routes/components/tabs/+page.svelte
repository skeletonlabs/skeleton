<script lang="ts">
	import Tabs from '$lib/components/Tab/Tabs.svelte';
	import TabsControl from '$lib/components/Tab/TabsControl.svelte';
</script>

<h1 class="h1">Tabs</h1>
<Tabs>
	{#snippet list()}
		<TabsControl></TabsControl>
		<TabsControl></TabsControl>
		<TabsControl></TabsControl>
	{/snippet}
	{#snippet panel()}
	<div>test</div>
	{/snippet}
</Tabs>
