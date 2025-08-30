<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { Api } from '@zag-js/avatar';

	export interface AvatarRootContextProps {
		children: Snippet<[Api]>;
	}
</script>

<script lang="ts">
	import { AvatarRootContext } from '../modules/avatar-root-context.js';

	const props: AvatarRootContextProps = $props();
	const rootContext = AvatarRootContext.consume();
</script>

{@render props.children(rootContext.api)}
