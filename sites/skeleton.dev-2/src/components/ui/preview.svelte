<script lang="ts">
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		preview: Snippet;
		code: Snippet;
	}

	const props: Props = $props();
	const { preview, code } = $derived(props);
</script>

<Tabs defaultValue="preview">
	<Tabs.List>
		<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
		<Tabs.Trigger value="code">Code</Tabs.Trigger>
		<Tabs.Indicator />
	</Tabs.List>
	<Tabs.Content value="preview">{@render preview()}</Tabs.Content>
	<Tabs.Content value="code">{@render code()}</Tabs.Content>
</Tabs>
