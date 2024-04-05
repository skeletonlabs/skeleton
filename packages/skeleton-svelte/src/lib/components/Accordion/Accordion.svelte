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

	let selected: string[] = $state([]);

	// Functions
	function open(id: string) {
		if (multiple) {
			selected = [...selected, id];
		} else {
			selected = [id];
		}
	}

	function close(id: string) {
		selected = selected.filter((_id: string) => _id !== id);
	}

	function toggle(id: string) {
		if (isOpen(id)) {
			close(id);
		} else {
			open(id);
		}
	}

	function isOpen(id: string) {
		return selected.includes(id);
	}

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
</script>

<!-- @component An Accordion parent component. -->

<div class="{base} {padding} {spaceY} {rounded} {width} {classes}" data-testid="accordion">
	{@render children()}
</div>
