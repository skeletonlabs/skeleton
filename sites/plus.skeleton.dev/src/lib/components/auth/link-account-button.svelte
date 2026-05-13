<script lang="ts" module>
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export interface Props extends HTMLButtonAttributes {
		provider: SupportedOAuthProvider;
	}
</script>

<script lang="ts">
	import type { SupportedOAuthProvider } from '$lib/client/auth/supported-oauth-providers';
	import { linkAccount } from '$lib/remote/auth/link-account.remote';

	const { children, provider, ...attributes }: Props = $props();
</script>

<form {...linkAccount.for(provider.id)}>
	<input {...linkAccount.fields.providerId.as('hidden', provider.id)} />
	<button {...attributes}>{@render children?.()}</button>
</form>
