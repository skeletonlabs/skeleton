<script lang="ts" module>
	import type { Provider } from '@supabase/supabase-js';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export interface Props extends HTMLButtonAttributes {
		provider: Provider;
	}
</script>

<script lang="ts">
	const { provider, ...props }: Props = $props();
</script>

<form>
	<button {...props}></button>
</form>
