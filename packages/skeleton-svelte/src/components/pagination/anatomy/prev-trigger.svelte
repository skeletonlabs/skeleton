<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface PaginationPrevTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { PaginationRootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: PaginationPrevTriggerProps = $props();

	const pagination = PaginationRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const triggerProps = $derived(pagination().getPrevTriggerProps());
	const attributes = $derived(mergeProps(triggerProps, rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
