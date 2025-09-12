<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { Props } from '@zag-js/switch';

	export interface SwitchRootProps extends PropsWithElement, Omit<Props, 'id'>, Omit<HTMLAttributes<'label'>, 'id' | 'dir' | 'form'> {}
</script>

<script lang="ts">
	import { useMachine, normalizeProps, mergeProps } from '@zag-js/svelte';
	import { classesSwitch } from '@skeletonlabs/skeleton-common';
	import { SwitchRootContext } from '../modules/root-context';
	import { connect, machine, splitProps } from '@zag-js/switch';

	const props: SwitchRootProps = $props();

	const [machineProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...restAttributes } = $derived(componentProps);

	const id = $props.id();
	const service = useMachine(machine, () => ({
		id: id,
		...machineProps
	}));

	const api = $derived(connect(service, normalizeProps));

	const attributes = $derived(mergeProps(api.getRootProps(), { class: classesSwitch.root }, restAttributes));

	SwitchRootContext.provide({
		get api() {
			return api;
		}
	});
</script>

{#if element}
	{@render element({ attributes: restAttributes })}
{:else}
	<label {...attributes}>
		{@render children?.()}
	</label>
{/if}
