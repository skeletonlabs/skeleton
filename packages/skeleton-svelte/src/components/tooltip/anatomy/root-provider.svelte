<script lang="ts" module>
	import type { PropsWithChildren } from '../../../internal/props-with-children.js';

	export interface TooltipRootProviderProps extends PropsWithChildren {
		value: ReturnType<typeof useTooltip>;
	}
</script>

<script lang="ts">
	import { useTooltip } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';

	const props: TooltipRootProviderProps = $props();

	const { children, value: tooltip } = $derived(props);

	RootContext.provide(() => tooltip());
</script>

{@render children?.()}
