<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface DatePickerTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import CalendarIcon from '../../../internal/components/calendar.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerTriggerProps = $props();

	const datePicker = RootContext.consume();

	const { element, children = calendarIcon, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(datePicker().getTriggerProps(), rest));
</script>

{#snippet calendarIcon()}
	<CalendarIcon />
{/snippet}

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
