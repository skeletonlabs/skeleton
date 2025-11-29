<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Props } from '@zag-js/switch';

	export interface SwitchRootProps extends Omit<Props, 'id'>, PropsWithElement<'label'>, HTMLAttributes<'label', 'id' | 'dir' | 'form'> {}
</script>

<script lang="ts">
	import { useSwitch } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';
	import { splitProps } from '@zag-js/switch';

	const props: SwitchRootProps = $props();

	const [switchProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const switch_ = useSwitch(() => ({
		...switchProps,
		id: id,
	}));

	const attributes = $derived(mergeProps(switch_().getRootProps(), rest));

	RootContext.provide(() => switch_());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<label {...attributes}>
		{@render children?.()}
	</label>
{/if}
