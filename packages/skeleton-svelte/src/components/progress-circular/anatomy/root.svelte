<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { Props } from '@zag-js/progress';

	export interface ProgressCircularRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { useProgressCircular } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context';
	import { classesProgressCircular } from '@skeletonlabs/skeleton-common';
	import { splitProps } from '@zag-js/progress';
	import { mergeProps } from '@zag-js/svelte';

	const props: ProgressCircularRootProps = $props();

	const [progressCircularProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const avatar = useProgressCircular(() => ({
		id,
		...progressCircularProps,
	}));

	const attributes = $derived(
		mergeProps(
			avatar().getRootProps(),
			{
				class: classesProgressCircular.root,
			},
			rest,
		),
	);

	RootContext.provide(() => avatar());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
