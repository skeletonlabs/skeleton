<script lang="ts" module>
	import type { PropsWithChildren } from '../../../internal/props-with-children.js';
	import type { Props } from '@zag-js/floating-panel';

	export interface FloatingPanelRootProps extends Omit<Props, 'id'>, PropsWithChildren {}
</script>

<script lang="ts">
	import { useFloatingPanel } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { splitProps } from '@zag-js/floating-panel';

	const props: FloatingPanelRootProps = $props();

	const [floatingPanelProps, componentProps] = $derived(splitProps(props));
	const { children } = $derived(componentProps);

	const id = $props.id();
	const floatingPanel = useFloatingPanel(() => ({
		...floatingPanelProps,
		id: id,
	}));

	RootContext.provide(() => floatingPanel());
</script>

{@render children?.()}
