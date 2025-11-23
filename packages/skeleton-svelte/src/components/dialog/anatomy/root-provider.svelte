<script lang="ts" module>
	import type { PropsWithChildren } from '../../../internal/props-with-children.js';
	import type { useDialog } from '../modules/provider.svelte';

	export interface DialogRootProviderProps extends PropsWithChildren {
		value: ReturnType<typeof useDialog>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: DialogRootProviderProps = $props();

	const { children, value: dialog } = $derived(props);

	RootContext.provide(() => dialog());
</script>

{@render children?.()}
