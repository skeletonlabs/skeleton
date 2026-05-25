<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface DatePickerLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label'> {}
</script>

<script lang="ts">
	import { DatePickerRootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: DatePickerLabelProps = $props();

	const datePicker = DatePickerRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(datePicker().getLabelProps(), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<label {...attributes}>
		{@render children?.()}
	</label>
{/if}
