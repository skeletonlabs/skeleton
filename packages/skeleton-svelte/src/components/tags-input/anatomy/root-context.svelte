<script lang="ts" module>
	import type { useTagsInput } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface TagsInputRootContextProps {
		children: Snippet<[ReturnType<typeof useTagsInput>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: TagsInputRootContextProps = $props();

	const tagsInput = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(tagsInput)}
