<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { useProgress } from '../modules/provider.svelte';

	export interface ProgressRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useProgress>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: ProgressRootProviderProps = $props();

	const { element, children, value: avatar, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(avatar().getRootProps(), rest));

	RootContext.provide(() => avatar());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
