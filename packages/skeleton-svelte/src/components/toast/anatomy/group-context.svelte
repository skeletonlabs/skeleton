<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { ToastGroupContextType } from '../modules/group-context';

	export interface ToastGroupContextProps {
		children: Snippet<[ToastGroupContextType]>;
	}
</script>

<script lang="ts">
	import { ToastGroupContext } from '../modules/group-context';

	const props: ToastGroupContextProps = $props();

	const groupContext = ToastGroupContext.consume();
</script>

{@render props.children(groupContext)}
