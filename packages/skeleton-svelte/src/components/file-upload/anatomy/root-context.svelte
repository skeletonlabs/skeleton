<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export interface FileUploadRootContextProps {
		children: Snippet<[ReturnType<typeof useFileUpload>]>;
	}
</script>

<script lang="ts">
	import type { useFileUpload } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';

	const props: FileUploadRootContextProps = $props();

	const fileUpload = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(fileUpload)}
