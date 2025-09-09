<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { AvatarRootContextType } from '../modules/root-context';

	export interface AvatarRootContextProps {
		children: Snippet<[AvatarRootContextType]>;
	}
</script>

<script lang="ts">
	import { AvatarRootContext } from '../modules/root-context';

	const props: AvatarRootContextProps = $props();
	const rootContext = AvatarRootContext.consume();
</script>

{@render props.children(rootContext)}
