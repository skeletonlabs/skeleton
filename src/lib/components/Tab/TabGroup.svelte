<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { onMount, setContext } from 'svelte';

	// Props
	export let selected: Writable<any>;
	export let justify: string = 'justify-start';
	export let borderWidth: string = 'border-b-2';
	export let borderColor: string = 'border-primary-500';
	export let color: string = 'text-primary-500';
	export let fill: string = 'fill-primary-500';
	export let hover: string = 'hover:bg-primary-500/10';
	export let rounded: string = 'rounded-tl-lg rounded-tr-lg';
	// A11y
	export let labeledby: string | undefined = undefined;
	export let label: string | undefined = undefined;

	// Set Context
	setContext('selected', selected);
	setContext('borderWidth', borderWidth);
	setContext('borderColor', borderColor);
	setContext('color', color);
	setContext('fill', fill);
	setContext('hover', hover);
	setContext('rounded', rounded);

	// Classes
	const cBase: string = 'border-surface-500/50 flex hide-scrollbar overflow-x-auto';

	// Handle Home/End Input
	let elemTabGroup: HTMLElement;

	function keydown(event: KeyboardEvent) {
		if (['Home', 'End'].includes(event.code)) {
			event.preventDefault();
			if (event.code === 'Home') {
				(elemTabGroup.children[0] as HTMLElement).focus();
			}
			if (event.code === 'End') {
				(elemTabGroup.children[elemTabGroup.children.length - 1] as HTMLElement).focus();
			}
		}
	}

	// Reactive Classes
	$: classesGroup = `${cBase} ${borderWidth} ${justify} ${$$props.class || ''}`;
</script>

<!-- prettier-ignore -->
<nav>
	<ul
		bind:this={elemTabGroup}
		on:keydown={keydown}
		class="tab-group {classesGroup}"
		data-testid="tab-group"
		role="tablist"
		aria-labelledby={labeledby}
		aria-label={label}
	>
		<slot />
	</ul>
</nav>
