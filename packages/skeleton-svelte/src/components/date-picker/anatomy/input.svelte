<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { InputProps } from '@zag-js/date-picker';

	export interface DatePickerInputProps extends InputProps, PropsWithElement<'input'>, Omit<HTMLAttributes<'input'>, 'children'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';
	import { classesDatePicker } from '@skeletonlabs/skeleton-common';
	import { splitInputProps } from '@zag-js/date-picker';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerInputProps = $props();

	const datePicker = RootContext.consume();

	const [inputProps, componentProps] = $derived(splitInputProps(props));
	const { element, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(
			datePicker().getInputProps(inputProps),
			{
				class: classesDatePicker.input,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<input {...attributes} />
{/if}
