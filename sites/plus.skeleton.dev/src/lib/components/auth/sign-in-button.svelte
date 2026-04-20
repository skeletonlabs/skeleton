<script lang="ts" module>
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export interface Props extends HTMLButtonAttributes {
		provider: keyof typeof auth.options.socialProviders;
	}
</script>

<script lang="ts">
	import { signIn } from '$lib/remote/auth/sign-in.remote';
	import type { auth } from '$lib/server/auth/auth';

	const { children, provider, ...attributes }: Props = $props();
</script>

<form {...signIn.for(provider)}>
	<input {...signIn.fields.provider.as('hidden', provider)} />
	<button {...attributes}>{@render children?.()}</button>
</form>
