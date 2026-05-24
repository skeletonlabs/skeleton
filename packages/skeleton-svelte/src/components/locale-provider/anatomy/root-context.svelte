<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export interface LocaleProviderRootContextProps {
		children: Snippet<[ReturnType<typeof LocaleProviderRootContext.consume>]>;
	}
</script>

<script lang="ts">
	import { LocaleProviderRootContext } from '../modules/root-context.js';

	const props: LocaleProviderRootContextProps = $props();

	const locale = LocaleProviderRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(locale)}
