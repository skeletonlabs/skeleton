<script lang="ts" module>
	import type { useProgressLinear } from '../modules/provider.svelte';
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface ProgressLinearRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useProgressLinear>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';
	import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: ProgressLinearRootProviderProps = $props();

	const { element, children, value: progressLinear, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			progressLinear().getRootProps(),
			{
				class: classesProgressLinear.root,
			},
			rest,
		),
	);

	RootContext.provide(() => progressLinear());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
