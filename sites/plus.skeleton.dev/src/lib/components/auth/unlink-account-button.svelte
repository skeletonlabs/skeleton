<script lang="ts" module>
	import type { UnlinkAccountSchema } from '$lib/schemas/auth/unlink-account-schema';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { InferInput } from 'valibot';

	export interface Props extends InferInput<typeof UnlinkAccountSchema>, HTMLButtonAttributes {}
</script>

<script lang="ts">
	import { unlinkAccount } from '$lib/remote/auth/unlink-account.remote';

	const { children, providerId, ...attributes }: Props = $props();
</script>

<form {...unlinkAccount.for(providerId)}>
	<input {...unlinkAccount.fields.providerId.as('hidden', providerId)} />
	<button {...attributes}>{@render children?.()}</button>
</form>
