<script lang="ts">
	import { getContext } from 'svelte';
	import type { NavTileProps } from './types.js';

	// Props
	let {
		id,
		href,
		label,
		labelExpanded,
		title,
		selected = false,
		// Root
		base = 'flex items-center',
		width = 'w-full',
		aspect = 'aspect-square',
		background = '',
		hover = 'hover:preset-filled-surface-50-950',
		active = 'preset-filled-primary-500',
		padding = 'p-1',
		gap = 'gap-2',
		rounded = 'rounded-container',
		classes = 'flex-col justify-center',
		// Expanded
		expandedPadding = 'py-3 px-4',
		expandedGap = 'gap-4',
		expandedClasses = '',
		// Label (base)
		labelBase = 'type-scale-1',
		labelClasses = '',
		// Label (expanded)
		labelExpandedBase = '',
		labelExpandedClasses = '',
		// Events
		onclick,
		// Snippets
		children
	}: NavTileProps = $props();

	// Context
	// let parent = getContext('parent'); // rail | bar
	let expanded = getContext('expanded') ?? false;

	// Local
	const element = href ? 'a' : 'button';
	const type = href ? undefined : 'button';
	const role = href ? undefined : 'button';

	// Reactive
	const classesCollapsed = `${aspect} ${padding} ${gap} ${classes}`;
	const classesExtended = `${expandedPadding} ${expandedGap} ${expandedClasses}`;
	let rxMode = $derived(expanded ? classesExtended : classesCollapsed);
	let rxBackground = $derived(selected ? active : `${background} ${hover}`);

	function onClickHandler() {
		if (onclick && !id) throw new Error('No ID was provided');
		if (onclick && id) onclick(id);
	}
</script>

<svelte:element
	this={element}
	class="{base} {width} {rounded} {rxBackground} {rxMode}"
	{href}
	{type}
	{title}
	{role}
	onclick={onClickHandler}
	tabindex="0"
>
	<!-- Icon -->
	{#if children}<div>{@render children()}</div>{/if}
	<!-- Label (base) -->
	{#if label && !expanded}
		<div class="{labelBase} {labelClasses}">{label}</div>
	{/if}
	<!-- Label (expanded) -->
	{#if labelExpanded && expanded}
		<div class="{labelExpandedBase} {labelExpandedClasses}">{labelExpanded}</div>
	{/if}
</svelte:element>
