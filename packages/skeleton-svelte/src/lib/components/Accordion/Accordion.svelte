<script lang="ts" context="module">
	type AccordionContext = {
		open: (id: string) => void;
		close: (id: string) => void;
		toggle: (id: string) => void;
		isOpen: (id: string) => boolean;
		animDuration: number;
		iconOpen?: Snippet;
		iconClosed?: Snippet;
	};

	const accordionCtxKey = Symbol();

	export const getAccordionCtx = () => getContext<AccordionContext>(accordionCtxKey);
	export const setAccordionCtx = (ctx: AccordionContext) => setContext(accordionCtxKey, ctx);
</script>

<script lang="ts">
	import type { AccordionProps } from './types.js';
	import { getContext, setContext, type Snippet } from 'svelte';

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
		// Snippets
		children,
		iconOpen,
		iconClosed
	}: AccordionProps = $props();

	// Functions
	const open = (id: string) => (multiple ? (opened = [...opened, id]) : (opened = [id]));
	const close = (id: string) => (opened = opened.filter((_id: string) => _id !== id));
	const toggle = (id: string) => (isOpen(id) ? close(id) : open(id));
	const isOpen = (id: string) => opened.includes(id);

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
		if (!multiple && opened.length > 1) {
			opened = [opened[0]];
		}
	});
</script>

<!-- @component An Accordion parent component. -->

<div class="{base} {padding} {spaceY} {rounded} {width} {classes}" data-testid="accordion">
	{@render children()}
</div>
