<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface SwitchLabelProps extends PropsWithElement, HTMLAttributes<'span'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesSwitch } from '@skeletonlabs/skeleton-common';
	import { SwitchRootContext } from '../modules/root-context';

	const props: SwitchLabelProps = $props();

	const rootContext = SwitchRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(rootContext.api.getLabelProps(), { class: classesSwitch.label }, rest));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<span {...attributes}>
		{@render children?.()}
	</span>
{/if}
