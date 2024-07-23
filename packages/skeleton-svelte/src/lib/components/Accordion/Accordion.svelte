<script lang="ts">
	import * as accordion from '@zag-js/accordion';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import { setAccordionContext } from './context.js';
	import type { AccordionProps } from './types.js';

	let {
		multiple = false,
		collapsible = false,
		value = $bindable([]),
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
	}: AccordionProps = $props();

	const [snapshot, send] = useMachine(
		accordion.machine({
			id: Math.random().toString(16).slice(2),
			multiple,
			collapsible,
			onValueChange: (detail) => {
				value = detail.value;
			}
		})
	);

	$inspect(snapshot);

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
