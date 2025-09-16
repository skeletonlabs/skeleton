<script lang="ts" module>
	import type { PropsWithChildren } from '@/internal/props-with-children';
	import type { Props } from '@zag-js/tooltip';

	export interface TooltipRootProps extends Omit<Props, 'id'>, PropsWithChildren {}
</script>

<script lang="ts">
	import { TooltipRootContext } from '../modules/root-context';
	import { useTooltip } from '../modules/use-tooltip.svelte';
	import { splitProps } from '@zag-js/tooltip';

	const props: TooltipRootProps = $props();

	const [tooltipProps, componentProps] = $derived(splitProps(props));
	const { children } = $derived(componentProps);

	const id = $props.id();
	const tooltip = useTooltip(() => ({
		id: id,
		...tooltipProps,
	}));

	TooltipRootContext.provide(() => tooltip());
</script>

{@render children?.()}
