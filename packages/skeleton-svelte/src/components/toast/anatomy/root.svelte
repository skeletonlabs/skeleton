<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Options } from '@zag-js/toast';

	export interface ToastRootProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		toast: Options;
	}
</script>

<script lang="ts">
	import { GroupContext } from '../modules/group-context.js';
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps, normalizeProps, useMachine } from '@zag-js/svelte';
	import { connect, machine } from '@zag-js/toast';

	const props: ToastRootProps = $props();

	const group = GroupContext.consume();

	const { element, children, toast: toastProps, ...rest } = $derived(props);

	const service = useMachine(machine, () => ({
		...toastProps,
		parent: group(),
	}));
	const toast = $derived(connect(service, normalizeProps));

	const attributes = $derived(mergeProps(toast.getRootProps(), rest));

	RootContext.provide(() => toast);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		<div {...toast.getGhostBeforeProps()}></div>
		{@render children?.()}
		<div {...toast.getGhostAfterProps()}></div>
	</div>
{/if}
