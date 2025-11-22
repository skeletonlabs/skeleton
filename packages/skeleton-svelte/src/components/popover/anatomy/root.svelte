<script lang="ts" module>
	import type { PropsWithChildren } from '../../../internal/props-with-children.js';
	import type { Props } from '@zag-js/popover';

	export interface PopoverRootProps extends Omit<Props, 'id'>, PropsWithChildren {}
</script>

<script lang="ts">
	import { usePopover } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { splitProps } from '@zag-js/popover';

	const props: PopoverRootProps = $props();

	const [popoverProps, componentProps] = $derived(splitProps(props));
	const { children } = $derived(componentProps);

	const id = $props.id();
	const popover = usePopover(() => ({
		...popoverProps,
		id: id,
	}));

	RootContext.provide(() => popover());
</script>

{@render children?.()}
