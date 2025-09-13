<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export interface FileUploadRootContextProps {
		children: Snippet<[ReturnType<typeof useFileUpload>]>;
	}
</script>

<script lang="ts">
	import { FileUploadRootContext } from '../modules/root-context';
	import type { useFileUpload } from '../modules/use-file-upload.svelte';

	const props: FileUploadRootContextProps = $props();

	const fileUpload = FileUploadRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(fileUpload)}
