<script lang="ts" module>
	import type { PropsWithChildren } from '../../../internal/props-with-children.js';
	import type { useFloatingPanel } from '../modules/provider.svelte';

	export interface FloatingPanelRootProviderProps extends PropsWithChildren {
		value: ReturnType<typeof useFloatingPanel>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: FloatingPanelRootProviderProps = $props();

	const { children, value: floatingPanel } = $derived(props);

	RootContext.provide(() => floatingPanel());
</script>

{@render children?.()}
