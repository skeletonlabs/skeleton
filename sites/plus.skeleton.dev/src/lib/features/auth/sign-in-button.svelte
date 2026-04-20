<script lang="ts" module>
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export interface Props extends HTMLButtonAttributes {
		oAuthProvider: SupportedOAuthProvider;
	}
</script>

<script lang="ts">
	import { signIn } from '$lib/features/auth/sign-in.remote';
	import type { SupportedOAuthProvider } from '$lib/features/auth/supported-oauth-providers';

	const { children, oAuthProvider, ...attributes }: Props = $props();
</script>

<form {...signIn.for(oAuthProvider.id)}>
	<input {...signIn.fields.provider.as('hidden', oAuthProvider.id)} />
	<button {...attributes}>{@render children?.()}</button>
</form>
