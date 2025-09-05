<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLInputAttributes } from 'svelte/elements';

	export interface SwitchHiddenInputProps extends PropsWithElement, Omit<HTMLInputAttributes, 'children'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesSwitch } from '@skeletonlabs/skeleton-common';
	import { SwitchRootContext } from '../modules/switch-root-context';

	const props: SwitchHiddenInputProps = $props();
	const rootContext = SwitchRootContext.consume();
	const { element, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getHiddenInputProps(),
			{
				class: classesSwitch.hiddenInput
			},
			restAttributes
		)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<input {...attributes} />
{/if}
