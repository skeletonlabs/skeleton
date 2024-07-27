<script lang="ts">
	import * as accordion from '@zag-js/accordion';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import { useId } from '$lib/internal/uuid.js';
	import { setAccordionContext } from './context.js';
	import type { AccordionProps } from './types.js';

	// Props
	const props: AccordionProps = $props();
	const [zagProps, skeletonProps] = $derived(accordion.splitProps(props));
	const {
		animDuration = 200,
		// Root
		base = '',
		padding = '',
		spaceY = 'space-y-2',
		rounded = 'rounded',
		width = 'w-full',
		classes = '',
		// Snippets
		children,
		iconOpen,
		iconClosed
	} = $derived(skeletonProps);

	const [snapshot, send] = useMachine(accordion.machine({ id: useId() }), {
		get context() {
			return zagProps;
		}
	});
	const api = $derived(accordion.connect(snapshot, send, normalizeProps));

	setAccordionContext({
		get api() {
			return api;
		},
		get animDuration() {
			return animDuration;
		},
		get iconClosed() {
			return iconClosed;
		},
		get iconOpen() {
			return iconOpen;
		}
	});
</script>

<!-- @component Accordion -->

<div class="{base} {padding} {spaceY} {rounded} {width} {classes}" {...api.getRootProps()}>
	{@render children()}
</div>
