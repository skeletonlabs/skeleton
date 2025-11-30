<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface DatePickerYearSelectProps extends PropsWithElement<'select'>, HTMLAttributes<'select', 'children'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerYearSelectProps = $props();

	const datePicker = RootContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(datePicker().getYearSelectProps(), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<select {...attributes}>
		{#each datePicker().getYears() as year (year.value)}
			<option value={year.value}>
				{year.label}
			</option>
		{/each}
	</select>
{/if}
