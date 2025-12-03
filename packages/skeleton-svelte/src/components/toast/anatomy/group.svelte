<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Props, Store } from '@zag-js/toast';
	import type { Snippet } from 'svelte';

	export interface ToastGroupProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'children'> {
		toaster: Store;
		children?: Snippet<[Props]>;
	}
</script>

<script lang="ts">
	import { GroupContext } from '../modules/group-context.js';
	import { mergeProps, normalizeProps, useMachine } from '@zag-js/svelte';
	import { group } from '@zag-js/toast';

	const props: ToastGroupProps = $props();

	const { element, children, toaster, ...rest } = $derived(props);

	const id = $props.id();
	const service = useMachine(group.machine, () => ({
		id: id,
		store: toaster,
	}));
	const api = $derived(group.connect(service, normalizeProps));

	const attributes = $derived(mergeProps(api.getGroupProps(), rest));

	GroupContext.provide(() => service);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{#each api.getToasts() as toast (toast.id)}
			{@render children?.(toast)}
		{/each}
	</div>
{/if}
