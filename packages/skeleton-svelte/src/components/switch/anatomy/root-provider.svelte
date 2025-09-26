<script lang="ts" module>
	import type { useSwitch } from '../modules/provider.svelte';
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface SwitchRootProviderProps extends PropsWithElement<'label'>, HTMLAttributes<'label', 'id' | 'dir' | 'form'> {
		value: ReturnType<typeof useSwitch>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';
	import { classesSwitch } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: SwitchRootProviderProps = $props();

	const { element, children, value: switch_, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			switch_().getRootProps(),
			{
				class: classesSwitch.root,
			},
			rest,
		),
	);

	RootContext.provide(() => switch_());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<label {...attributes}>
		{@render children?.()}
	</label>
{/if}
