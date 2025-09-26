<script lang="ts" module>
	import type { usePopover } from '../modules/provider.svelte';
	import type { PropsWithChildren } from '@/internal/props-with-children';

	export interface PopoverRootProviderProps extends PropsWithChildren {
		value: ReturnType<typeof usePopover>;
	}
</script>

<script lang="ts">
	import { PopoverRootContext } from '../modules/root-context';

	const props: PopoverRootProviderProps = $props();

	const { children, value: popover } = $derived(props);

	PopoverRootContext.provide(() => popover());
</script>

{@render children?.()}
