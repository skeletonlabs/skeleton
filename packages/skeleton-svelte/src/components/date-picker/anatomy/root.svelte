<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Props } from '@zag-js/date-picker';

	export interface DatePickerRootProps
		extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'placeholder'> {}
</script>

<script lang="ts">
	import { useDatePicker } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { splitProps } from '@zag-js/date-picker';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerRootProps = $props();

	const [datePickerProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const datePicker = useDatePicker(() => ({
		...datePickerProps,
		id: id,
	}));

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
