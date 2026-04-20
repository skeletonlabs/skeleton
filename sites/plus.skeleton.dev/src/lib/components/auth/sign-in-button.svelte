<script lang="ts" module>
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export interface Props extends HTMLButtonAttributes {
		oAuthProvider: SupportedOAuthProvider;
	}
</script>

<script lang="ts">
	import type { SupportedOAuthProvider } from '$lib/auth/supported-oauth-providers';
	import { signIn } from '$lib/remote/auth/sign-in.remote';

	const { children, oAuthProvider, ...attributes }: Props = $props();
</script>

<form {...signIn.for(oAuthProvider.id)}>
	<input {...signIn.fields.provider.as('hidden', oAuthProvider.id)} />
	<button {...attributes}>{@render children?.()}</button>
</form>
