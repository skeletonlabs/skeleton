<script lang="ts" module>
	import type { useMenu } from '../modules/provider.svelte.js';
	import { untrack, type Snippet } from 'svelte';

	export interface MenuRootProviderProps {
		value: ReturnType<typeof useMenu>;
		children?: Snippet;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { TriggerItemContext } from '../modules/trigger-item-context.js';

	const props: MenuRootProviderProps = $props();

	const parentMenu = RootContext.consume();

	const { children, value: menu } = $derived(props);

	$effect(() =>
		untrack(() => {
			if (!parentMenu) {
				return;
			}
			menu().setParent(parentMenu().service);
			parentMenu().setChild(menu().service);
		}),
	);

	RootContext.provide(() => menu());
	TriggerItemContext.provide(() => parentMenu?.().getTriggerItemProps(menu()));
</script>

{@render children?.()}
