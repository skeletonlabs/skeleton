<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { useTagsInput } from '../modules/provider.svelte';

	export interface TagsInputRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useTagsInput>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: TagsInputRootProviderProps = $props();
	const { element, children, value: tagsInput, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(tagsInput().getRootProps(), rest));

	RootContext.provide(() => tagsInput());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
