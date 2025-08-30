<script lang="ts">
	import { AvatarRootContext } from '../modules/context.js';
	import type { AvatarRootContextProps } from '../modules/types.js';

	const props: AvatarRootContextProps = $props();
	const rootContext = AvatarRootContext.consume();
</script>

{@render props.children(rootContext.api)}
