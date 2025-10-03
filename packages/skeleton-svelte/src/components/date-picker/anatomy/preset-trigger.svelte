<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { PresetTriggerProps } from '@zag-js/date-picker';

	export interface DatePickerPresetTriggerProps extends PresetTriggerProps, PropsWithElement<'button'>, HTMLAttributes<'button', 'value'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';
	import { classesDatePicker } from '@skeletonlabs/skeleton-common';
	import { splitPresetTriggerProps } from '@zag-js/date-picker';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerPresetTriggerProps = $props();

	const datePicker = RootContext.consume();

	const [presetTriggerProps, componentProps] = $derived(splitPresetTriggerProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(
			datePicker().getPresetTriggerProps(presetTriggerProps),
			{
				class: classesDatePicker.presetTrigger,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
