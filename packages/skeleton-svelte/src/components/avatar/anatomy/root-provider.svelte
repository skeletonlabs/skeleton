<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	import type { useAvatar } from '../modules/use-avatar.svelte';

	export interface AvatarRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useAvatar>;
	}
</script>

<script lang="ts">
	import { classesAvatar } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	import { AvatarRootContext } from '../modules/root-context';

	const props: AvatarRootProviderProps = $props();

	const { element, children, value: api, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(api().getRootProps(), rest, {
			class: classesAvatar.root,
		}),
	);

	AvatarRootContext.provide(() => api());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
