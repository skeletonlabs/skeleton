<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { onMount, setContext } from 'svelte';

	// Props
	export let selected: Writable<any>;
	export let justify: string = 'justify-start';
	export let border: string = 'border-primary-500';
	export let fill: string = 'fill-primary-500';
	export let color: string = 'text-primary-500';
	// A11y
	export let labeledby: string = undefined;
	export let label: string = undefined;

	// Set Context
	setContext('selected', selected);
	setContext('border', border);
	setContext('fill', fill);
	setContext('color', color);

	// Classes
	const cBaseGroup: string = 'hide-scrollbar overflow-x-auto flex border-b border-surface-300 border-inset dark:border-surface-700';

	// Handle Home/End Input
	let elemTabGroup: HTMLElement;
	onMount(() => {
		elemTabGroup.addEventListener('keydown', (event: any) => {
			if (['Home', 'End'].includes(event.code)) {
				event.preventDefault();
				if (event.code === 'Home') {
					(elemTabGroup.children[0] as HTMLElement).focus();
				}
				if (event.code === 'End') {
					(elemTabGroup.children[elemTabGroup.children.length - 1] as HTMLElement).focus();
				}
			}
		});
	});

	// Reactive Classes
	$: classesGroup = `${cBaseGroup} ${justify} ${$$props.class||''}`;
</script>

<nav bind:this={elemTabGroup} data-testid="tab-group" class="tab-group {classesGroup}" role="tablist" aria-labelledby={labeledby} aria-label={label}>
	<slot />
</nav>
