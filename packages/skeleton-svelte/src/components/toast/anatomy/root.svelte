<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { Options } from '@zag-js/toast';

	export interface ToastRootProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		toast: Options;
	}
</script>

<script lang="ts">
	import { GroupContext } from '../modules/group-context';
	import { RootContext } from '../modules/root-context';
	import { classesToast } from '@skeletonlabs/skeleton-common';
	import { mergeProps, normalizeProps, useMachine } from '@zag-js/svelte';
	import { connect, machine } from '@zag-js/toast';

	const props: ToastRootProps = $props();

	const group = GroupContext.consume();

	const { element, children, toast: toastProps, ...rest } = $derived(props);

	const id = $props.id();
	const service = useMachine(machine, () => ({
		...toastProps,
		id: id,
		parent: group(),
	}));
	const toast = $derived(connect(service, normalizeProps));

	const attributes = $derived(
		mergeProps(
			toast.getRootProps(),
			{
				class: classesToast.root,
			},
			rest,
		),
	);

	RootContext.provide(() => toast);
</script>

<div {...toast.getGhostBeforeProps()}></div>
{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
<div {...toast.getGhostAfterProps()}></div>

<style>
	[data-part='root'] {
		translate: var(--x) var(--y);
		scale: var(--scale);
		z-index: var(--z-index);
		height: var(--height);
		opacity: var(--opacity);
		will-change: translate, opacity, scale;
	}
	[data-part='root'] {
		transition:
			translate 400ms,
			scale 400ms,
			opacity 400ms;
		transition-timing-function: cubic-bezier(0.21, 1.02, 0.73, 1);
	}
	[data-part='root'][data-state='closed'] {
		transition:
			translate 400ms,
			scale 400ms,
			opacity 200ms;
		transition-timing-function: cubic-bezier(0.06, 0.71, 0.55, 1);
	}
</style>
