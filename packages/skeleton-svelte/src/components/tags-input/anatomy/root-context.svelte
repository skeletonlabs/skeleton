<script lang="ts" module>
	import type { Snippet } from 'svelte';

	import type { useTagsInput } from '../modules/use-tags-input.svelte';

	export interface TagsInputRootContextProps {
		children: Snippet<[ReturnType<typeof useTagsInput>]>;
	}
</script>

<script lang="ts">
	import { TagsInputRootContext } from '../modules/root-context';

	const props: TagsInputRootContextProps = $props();

	const tagsinput = TagsInputRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(tagsinput)}
