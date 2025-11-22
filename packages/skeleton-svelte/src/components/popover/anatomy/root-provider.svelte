<script lang="ts" module>
	import type { PropsWithChildren } from '../../../internal/props-with-children.js';
	import type { usePopover } from '../modules/provider.svelte';

	export interface PopoverRootProviderProps extends PropsWithChildren {
		value: ReturnType<typeof usePopover>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: PopoverRootProviderProps = $props();

	const { children, value: popover } = $derived(props);

	RootContext.provide(() => popover());
</script>

{@render children?.()}
