<script lang="ts" module>
	import type { Snippet } from 'svelte';

	import type { useAvatar } from '../modules/use-avatar.svelte';

	export interface AvatarRootContextProps {
		children: Snippet<[ReturnType<typeof useAvatar>]>;
	}
</script>

<script lang="ts">
	import { AvatarRootContext } from '../modules/root-context';

	const props: AvatarRootContextProps = $props();

	const avatar = AvatarRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(avatar)}
