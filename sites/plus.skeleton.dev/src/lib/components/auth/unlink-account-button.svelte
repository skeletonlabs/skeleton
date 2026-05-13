<script lang="ts" module>
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export interface Props extends HTMLButtonAttributes {
		provider: SupportedOAuthProvider;
	}
</script>

<script lang="ts">
	import type { SupportedOAuthProvider } from '$lib/client/auth/supported-oauth-providers';
	import { unlinkAccount } from '$lib/remote/auth/unlink-account.remote';

	const { children, provider, ...attributes }: Props = $props();
</script>

<form {...unlinkAccount.for(provider.id)}>
	<input {...unlinkAccount.fields.providerId.as('hidden', provider.id)} />
	<button {...attributes}>{@render children?.()}</button>
</form>
