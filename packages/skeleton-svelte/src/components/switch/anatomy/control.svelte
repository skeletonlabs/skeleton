<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface SwitchControlProps extends PropsWithElement, HTMLAttributes<'span'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesSwitch } from '@skeletonlabs/skeleton-common';
	import { SwitchRootContext } from '../modules/root-context';

	const props: SwitchControlProps = $props();

	const rootContext = SwitchRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(rootContext.api.getControlProps(), { class: classesSwitch.control }, rest));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<span {...attributes}>
		{@render children?.()}
	</span>
{/if}
