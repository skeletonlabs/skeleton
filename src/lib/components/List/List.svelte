<script lang="ts">
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	// Props
	export let tag: string = 'ul'; // ul | ol | dl | nav
	export let selected: Writable<any> = writable(undefined); // (store)
	export let space: string = 'space-y-1';
	// Props (pass to list item)
	export let accent: string = '!bg-primary-500'; // '!' required
	export let hover: string = 'hover:bg-primary-500/10'; // 'hover:' required
	export let padding: string = 'px-4 py-3';
	export let rounded: string = 'rounded';
	// Props (A11y)
	export let title: string | undefined = undefined;
	export let label: string | undefined = undefined;
	export let labelledby: string | undefined = undefined;

	// Context
	setContext('parentTag', tag);
	setContext('selected', selected);
	setContext('accent', accent);
	setContext('hover', hover);
	setContext('padding', padding);
	setContext('rounded', rounded);

	// Classes
	const cBase: string = 'whitespace-nowrap';

	// Local
	let elemList: HTMLElement;

	// A11y Input Handler
	function onKeyDown(event: any): void {
		// Home/End Keys
		if (['Home', 'End'].includes(event.code)) {
			event.preventDefault();
			const currentElem: any = tag === 'nav' ? elemList.children[0] : elemList;
			if (event.code === 'Home') {
				(currentElem.children[0] as HTMLElement).focus();
			}
			if (event.code === 'End') {
				(currentElem.children[currentElem.children.length - 1] as HTMLElement).focus();
			}
		}
	}

	// Reactive Classes
	$: classesList = `${cBase} ${space} ${$$props.class || ''}`;
</script>

<svelte:element this={tag} bind:this={elemList} class="list-group {classesList}" data-testid="list-group" on:keydown={onKeyDown} {title}>
	{#if tag === 'nav'}
		<ul class={space} role="listbox" aria-label={label} aria-labelledby={labelledby} aria-multiselectable={Array.isArray($selected)}>
			<slot />
		</ul>
	{:else}
		<slot />
	{/if}
</svelte:element>
