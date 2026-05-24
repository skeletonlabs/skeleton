<script lang="ts" module>
	import type { useMenu } from '../modules/provider.svelte.js';
	import { untrack, type Snippet } from 'svelte';

	export interface MenuRootProviderProps {
		value: ReturnType<typeof useMenu>;
		children?: Snippet;
	}
</script>

<script lang="ts">
	import { MenuRootContext } from '../modules/root-context.js';
	import { MenuTriggerItemContext } from '../modules/trigger-item-context.js';

	const props: MenuRootProviderProps = $props();

	const parentMenu = MenuRootContext.consume();

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

	MenuRootContext.provide(() => menu());
	MenuTriggerItemContext.provide(() => parentMenu?.().getTriggerItemProps(menu()));
</script>

{@render children?.()}
