<script lang="ts">
	import * as accordion from '@zag-js/accordion';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import { useId } from '$lib/internal/use-id.js';
	import { setAccordionContext } from './context.js';
	import type { AccordionProps } from './types.js';

	// Props
	let {
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
		iconClosed,
		...zagProps
	}: AccordionProps = $props();

	// Machine
	const [snapshot, send] = useMachine(
		accordion.machine({
			id: useId(),
			get value() {
				return $state.snapshot(value);
			},
			onValueChange(details) {
				value = details.value;
			}
		}),
		{ context: zagProps }
	);

	// API
	const api = $derived(accordion.connect(snapshot, send, normalizeProps));

	// Context
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

<!-- @component Divide content into collapsible sections. -->

<div class="{base} {padding} {spaceY} {rounded} {width} {classes}" {...api.getRootProps()} data-testid="accordion">
	{@render children()}
</div>
