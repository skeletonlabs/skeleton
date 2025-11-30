<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import { splitItemProps, type ItemProps } from '@zag-js/pagination';

	export interface PaginationItemProps extends ItemProps, PropsWithElement<'a'>, HTMLAttributes<'a', 'type'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: PaginationItemProps = $props();

	const pagination = RootContext.consume();

	const [itemProps, componentProps] = $derived(splitItemProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(mergeProps(pagination().getItemProps(itemProps), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<a {...attributes}>
		{@render children?.()}
	</a>
{/if}
