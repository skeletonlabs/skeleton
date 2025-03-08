<script lang="ts">
	import * as accordion from '@zag-js/accordion';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import { setAccordionContext } from './context.js';
	import type { AccordionProps } from './types.js';

	// Props
	const {
		animationConfig = {
			duration: 200
		},
		// Root
		base = '',
		padding = '',
		spaceY = 'space-y-2',
		rounded = 'rounded-base',
		width = 'w-full',
		classes = '',
		// Snippets
		children,
		iconOpen,
		iconClosed,
		...zagProps
	}: AccordionProps = $props();

	// Zag
	const id = $props.id();
	const service = useMachine(accordion.machine, () => ({
		id: id,
		...zagProps
	}));
	const api = $derived(accordion.connect(service, normalizeProps));

	// Context
	setAccordionContext({
		get api() {
			return api;
		},
		get animationConfig() {
			return animationConfig;
		},
		get iconClosed() {
			return iconClosed;
		},
		get iconOpen() {
			return iconOpen;
		}
	});
</script>

<!-- @component Divide content into collapsible sections. -->

<div class="{base} {padding} {spaceY} {rounded} {width} {classes}" {...api.getRootProps()} data-testid="accordion">
	{@render children?.()}
</div>
