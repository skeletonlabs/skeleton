<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { useDatePicker } from '../modules/provider.svelte';

	export interface DatePickerRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useDatePicker>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerRootProviderProps = $props();

	const { element, children, value: datePicker, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(datePicker().getRootProps(), rest));

	RootContext.provide(() => datePicker());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
