<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { FileUploadItemContextType } from '../modules/item-context';

	export interface FileUploadItemContextProps {
		children: Snippet<[FileUploadItemContextType]>;
	}
</script>

<script lang="ts">
	import { FileUploadItemContext } from '../modules/item-context';

	const props: FileUploadItemContextProps = $props();

	const itemContext = FileUploadItemContext.consume();
</script>

{@render props.children(itemContext)}
