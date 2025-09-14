<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import { useProgressLinear } from '../modules/use-progress-linear.svelte';

	export interface ProgressLinearRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useProgressLinear>;
	}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
	import { ProgressLinearRootContext } from '../modules/root-context';

	const props: ProgressLinearRootProviderProps = $props();

	const { element, children, value: avatar, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(avatar().getRootProps(), rest, {
			class: classesProgressLinear.root,
		}),
	);

	ProgressLinearRootContext.provide(() => avatar());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
