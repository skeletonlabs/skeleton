<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { Api } from '@zag-js/avatar';

	interface AvatarRootContextProps {
		children: Snippet<[Api]>;
	}

	export type { AvatarRootContextProps };
</script>

<script lang="ts">
	import { AvatarRootContext } from './avatar-root-context.js';

	const props: AvatarRootContextProps = $props();
	const rootContext = AvatarRootContext.consume();
</script>

{@render props.children(rootContext.api)}
