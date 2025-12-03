<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import { splitEllipsisProps, type EllipsisProps } from '@zag-js/pagination';

	export interface PaginationEllipsisProps extends EllipsisProps, PropsWithElement<'span'>, HTMLAttributes<'span'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: PaginationEllipsisProps = $props();

	const pagination = RootContext.consume();

	const [ellipsisProps, componentProps] = $derived(splitEllipsisProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(mergeProps(pagination().getEllipsisProps(ellipsisProps), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<span {...attributes}>
		{@render children?.()}
	</span>
{/if}
