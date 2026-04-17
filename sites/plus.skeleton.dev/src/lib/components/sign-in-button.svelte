<script lang="ts" module>
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export interface Props extends HTMLButtonAttributes {
		provider: (typeof SUPPORTED_PROVIDERS)[number]['name'];
	}
</script>

<script lang="ts">
	import type { SUPPORTED_PROVIDERS } from '$lib/auth/supported-providers';
	import { signIn } from '../auth/sign-in.remote';

	const { children, provider, ...attributes }: Props = $props();
</script>

<form {...signIn.for(provider)}>
	<input {...signIn.fields.provider.as('hidden', provider)} />
	<button {...attributes}>{@render children?.()}</button>
</form>
