<script lang="ts" module>
	import type { PropsWithChildren } from '@/internal/props-with-children';
	import type { Props } from '@zag-js/tooltip';

	export interface TooltipRootProps extends PropsWithChildren, Omit<Props, 'id'> {}
</script>

<script lang="ts">
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import { TooltipRootContext } from '../modules/root-context';
	import { connect, machine, splitProps } from '@zag-js/tooltip';

	const props: TooltipRootProps = $props();

	const [machineProps, componentProps] = $derived(splitProps(props));
	const { children } = $derived(componentProps);

	const id = $props.id();
	const service = useMachine(machine, () => ({
		id: id,
		...machineProps
	}));

	const api = $derived(connect(service, normalizeProps));

	TooltipRootContext.provide({
		get api() {
			return api;
		}
	});
</script>

{@render children?.()}
