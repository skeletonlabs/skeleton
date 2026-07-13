<script lang="ts" module>
	import type { LinkAccountSchema } from '$lib/schemas/auth/link-account-schema';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { InferInput } from 'valibot';

	export interface Props extends InferInput<typeof LinkAccountSchema>, HTMLButtonAttributes {}
</script>

<script lang="ts">
	import { linkAccount } from '$lib/remote/auth/link-account.remote';

	const { children, providerId, callbackURL, ...attributes }: Props = $props();
</script>

<form {...linkAccount.for(providerId)}>
	<input {...linkAccount.fields.providerId.as('hidden', providerId)} />
	{#if callbackURL}
		<input {...linkAccount.fields.callbackURL.as('hidden', callbackURL)} />
	{/if}
	<button {...attributes}>{@render children?.()}</button>
</form>
