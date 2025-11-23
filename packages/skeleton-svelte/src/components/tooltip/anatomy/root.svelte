<script lang="ts" module>
	import type { PropsWithChildren } from '../../../internal/props-with-children.js';
	import type { Props } from '@zag-js/tooltip';

	export interface TooltipRootProps extends Omit<Props, 'id'>, PropsWithChildren {}
</script>

<script lang="ts">
	import { useTooltip } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { splitProps } from '@zag-js/tooltip';

	const props: TooltipRootProps = $props();

	const [tooltipProps, componentProps] = $derived(splitProps(props));
	const { children } = $derived(componentProps);

	const id = $props.id();
	const tooltip = useTooltip(() => ({
		...tooltipProps,
		id: id,
	}));

	RootContext.provide(() => tooltip());
</script>

{@render children?.()}
