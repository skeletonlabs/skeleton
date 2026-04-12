<script lang="ts" module>
	import type { Provider } from '@supabase/supabase-js';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export interface Props extends HTMLButtonAttributes {
		provider: Provider;
	}
</script>

<script lang="ts">
	import { signIn } from '../auth/sign-in.remote';

	const { children, provider, ...attributes }: Props = $props();
</script>

<form {...signIn}>
	<input {...signIn.fields.provider.as('hidden', provider)} />
	<button {...attributes}>{@render children?.()}</button>
</form>
