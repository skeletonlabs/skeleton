<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { FileUploadRootContextType } from '../modules/root-context';

	export interface FileUploadRootContextProps {
		children: Snippet<[FileUploadRootContextType]>;
	}
</script>

<script lang="ts">
	import { FileUploadRootContext } from '../modules/root-context';

	const props: FileUploadRootContextProps = $props();

	const rootContext = FileUploadRootContext.consume();
</script>

{@render props.children(rootContext)}
