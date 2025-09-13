<script lang="ts" module>
	import type { Props } from '@zag-js/popover';
	import type { PropsWithChildren } from '@/internal/props-with-children';

	export interface PopoverRootProps extends Omit<Props, 'id'>, PropsWithChildren {}
</script>

<script lang="ts">
	import { PopoverRootContext } from '../modules/root-context';
	import { splitProps } from '@zag-js/popover';
	import { usePopover } from '../modules/use-popover.svelte';

	const props: PopoverRootProps = $props();

	const [machineProps, componentProps] = $derived(splitProps(props));
	const { children } = $derived(componentProps);

	const id = $props.id();
	const popover = usePopover(() => ({
		id: id,
		...machineProps
	}));

	PopoverRootContext.provide(() => popover());
</script>

{@render children?.()}
