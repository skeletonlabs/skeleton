<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { Props } from '@zag-js/combobox';

	export interface ComboboxRootProps
		extends PropsWithElement,
			Omit<Props, 'id'>,
			Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'dir' | 'placeholder'> {}
</script>

<script lang="ts">
	import { useMachine, normalizeProps, mergeProps } from '@zag-js/svelte';
	import { classesCombobox } from '@skeletonlabs/skeleton-common';
	import { ComboboxRootContext } from '../modules/root-context';
	import { connect, machine, splitProps } from '@zag-js/combobox';

	const props: ComboboxRootProps = $props();
	const [machineProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...restAttributes } = $derived(componentProps);
	const id = $props.id();
	const service = useMachine(machine, () => ({
		id: id,
		...machineProps
	}));
	const api = $derived(connect(service, normalizeProps));
	const attributes = $derived(mergeProps(api.getRootProps(), { class: classesCombobox.root }, restAttributes));
	ComboboxRootContext.provide({
		get api() {
			return api;
		}
	});
</script>

{#if element}
	{@render element({ attributes: restAttributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
