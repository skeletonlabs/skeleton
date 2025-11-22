<script lang="ts" module>
	import type { PropsWithChildren } from '../../../internal/props-with-children.js';

	export interface PortalRootProps extends Required<PropsWithChildren> {
		/**
		 * If true, the portal functionality is disabled and children are rendered in place.
		 *
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * The HTML element to which the portal content will be appended.
		 *
		 * @default document.body
		 */
		target?: HTMLElement;
	}
</script>

<script lang="ts">
	import { getAllContexts, mount, unmount } from 'svelte';

	const props: PortalRootProps = $props();

	const context = getAllContexts();

	const { children, disabled = false, target = typeof window === 'undefined' ? undefined : document.body } = $derived(props);

	$effect(() => {
		if (disabled || !target) {
			return;
		}
		const instance = mount(children, {
			target: target,
			context: context,
		});
		return () => unmount(instance);
	});
</script>

{#if disabled || !target}
	{@render children()}
{/if}
