<script lang="ts" module>
	import type { PropsWithChildren } from '@/internal/props-with-children';

	export interface TooltipRootProviderProps extends PropsWithChildren {
		value: ReturnType<typeof useTooltip>;
	}
</script>

<script lang="ts">
	import { TooltipRootContext } from '../modules/root-context';
	import { useTooltip } from '../modules/use-tooltip.svelte';

	const props: TooltipRootProviderProps = $props();

	const { children, value: tooltip } = $derived(props);

	TooltipRootContext.provide(() => tooltip());
</script>

{@render children?.()}
