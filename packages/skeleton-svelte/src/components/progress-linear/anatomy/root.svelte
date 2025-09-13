<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { Props } from '@zag-js/progress';

	export interface ProgressLinearRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { splitProps } from '@zag-js/progress';
	import { mergeProps } from '@zag-js/svelte';
	import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
	import { ProgressLinearRootContext } from '../modules/root-context';
	import { useProgressLinear } from '../modules/use-progress-linear.svelte';

	const props: ProgressLinearRootProps = $props();

	const [progressLinearProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const avatar = useProgressLinear(() => ({
		id,
		...progressLinearProps
	}));

	const attributes = $derived(
		mergeProps(avatar().getRootProps(), rest, {
			class: classesProgressLinear.root
		})
	);

	ProgressLinearRootContext.provide(() => avatar());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
