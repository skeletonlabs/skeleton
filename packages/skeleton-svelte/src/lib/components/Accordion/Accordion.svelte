<script lang="ts" context="module">
	const accordionCtxKey = Symbol();

	export const getAccordionCtx = () => getContext<AccordionContext>(accordionCtxKey);
	export const setAccordionCtx = (ctx: AccordionContext) => setContext(accordionCtxKey, ctx);
</script>

<script lang="ts">
	import type { AccordionContext, AccordionProps } from './types.js';
	import { getContext, setContext } from 'svelte';

	let {
		multiple = false,
		opened = $bindable([]),
		animDuration = 200,
		// Root
		base = '',
		padding = '',
		spaceY = 'space-y-2',
		rounded = 'rounded',
		width = 'w-full',
		classes = '',
		// Events
		ontoggle = () => {},
		// Snippets
		children,
		iconOpen,
		iconClosed
	}: AccordionProps = $props();

	// Functions
	function open(id: string) {
		opened = multiple ? [...opened, id] : [id];
	}
	function close(id: string) {
		opened = opened.filter((_id) => _id !== id);
	}
	function toggle(id: string) {
		isOpen(id) ? close(id) : open(id);
		ontoggle(new CustomEvent('toggle', { detail: { id, open: isOpen(id) } }));
	}
	function isOpen(id: string) {
		return opened.includes(id);
	}

	// Context
	setAccordionCtx({
		open,
		close,
		toggle,
		isOpen,
		get animDuration() {
			return animDuration;
		},
		get iconOpen() {
			return iconOpen;
		},
		get iconClosed() {
			return iconClosed;
		}
	});

	// Side effects
	$effect(() => {
		// If multiple prop is updated to false and there are more than one opened item, keep only the first one open.
		if (!multiple && opened.length > 1) opened = [opened[0]];
	});
</script>

<!-- @component An Accordion parent component. -->

<div class="{base} {padding} {spaceY} {rounded} {width} {classes}" data-testid="accordion">
	{@render children()}
</div>
