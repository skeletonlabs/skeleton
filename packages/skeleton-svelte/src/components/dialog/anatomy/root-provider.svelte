<script lang="ts" module>
	import type { useDialog } from '../modules/use-dialog.svelte';
	import type { PropsWithChildren } from '@/internal/props-with-children';

	export interface DialogRootProviderProps extends PropsWithChildren {
		value: ReturnType<typeof useDialog>;
	}
</script>

<script lang="ts">
	import { DialogRootContext } from '../modules/root-context';

	const props: DialogRootProviderProps = $props();

	const { children, value: dialog } = $derived(props);

	DialogRootContext.provide(() => dialog());
</script>

{@render children?.()}
