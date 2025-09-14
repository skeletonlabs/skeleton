<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface SwitchHiddenInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesSwitch } from '@skeletonlabs/skeleton-common';
	import { SwitchRootContext } from '../modules/root-context';

	const props: SwitchHiddenInputProps = $props();

	const switch_ = SwitchRootContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(switch_().getHiddenInputProps(), rest, {
			class: classesSwitch.hiddenInput,
		}),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<input {...attributes} />
{/if}
