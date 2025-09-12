<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { Api } from '@zag-js/avatar';

	export interface AvatarRootContextProps {
		children: Snippet<[() => Api]>;
	}
</script>

<script lang="ts">
	import { AvatarRootContext } from '../modules/root-context';

	const props: AvatarRootContextProps = $props();

	const avatar = AvatarRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(avatar)}
