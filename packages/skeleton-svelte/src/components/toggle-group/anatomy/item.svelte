<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { ItemProps } from '@zag-js/toggle-group';

	export interface ToggleGroupItemProps extends ItemProps, PropsWithElement<'button'>, HTMLAttributes<'button', 'value' | 'disabled'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';
	import { splitItemProps } from '@zag-js/toggle-group';

	const props: ToggleGroupItemProps = $props();

	const toggleGroup = RootContext.consume();

	const [itemProps, componentProps] = $derived(splitItemProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(mergeProps(toggleGroup().getItemProps(itemProps), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
