<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { Api } from '@zag-js/switch';

	export interface SwitchRootProviderProps extends PropsWithElement<'label'>, HTMLAttributes<'label', 'id' | 'dir' | 'form'> {
		value: () => Api;
	}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesSwitch } from '@skeletonlabs/skeleton-common';
	import { SwitchRootContext } from '../modules/root-context';

	const props: SwitchRootProviderProps = $props();

	const { element, children, value: switch_, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(switch_().getRootProps(), rest, {
			class: classesSwitch.root
		})
	);

	SwitchRootContext.provide(() => switch_());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<label {...attributes}>
		{@render children?.()}
	</label>
{/if}
