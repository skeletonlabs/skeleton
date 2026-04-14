<script lang="ts" module>
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export interface Props extends HTMLButtonAttributes {}
</script>

<script lang="ts">
	import { signOut } from '../auth/sign-out.remote';

	const { children, ...attributes }: Props = $props();
</script>

<form {...signOut}>
	<button {...attributes}>{@render children?.()}</button>
</form>
