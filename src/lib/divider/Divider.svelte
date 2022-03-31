<script lang="ts">
	import { afterUpdate } from "svelte";

	export let weight: number = 1;
	export let variant: string = 'solid'; // solid | dashed | dotted
	export let orientation: string = 'h'; // h (horizintal) | v (vertical)

	// Define Base Classes
    const cBase = `border-surface-300 dark:border-surface-700`;
	const cWeight = {
		1: {v: 'border-l', h: 'border-t'},
		2: {v: 'border-l-2', h: 'border-t-2'},
		4: {v: 'border-l-4', h: 'border-t-4'},
		8: {v: 'border-l-8', h: 'border-t-8'},
	};
	let cVariant: string;
	let cOrientation: string;

    // Set Variant
	function setVariant(): void {
		switch(variant) {
			case('dashed'): cVariant = 'border-dashed'; break;
			case('dotted'): cVariant = 'border-dotted'; break;
			default:        cVariant = 'border-solid';
		}
	}
	
	// Set Orientation
	function setOrientation(): void {
		switch(orientation) {
			case('v'): cOrientation = `border-0 ${cWeight[weight].v} h-full`; break;
			default:   cOrientation = `border-0 ${cWeight[weight].h} border-t w-full`;
		}
	}

	// Reactive
	afterUpdate(() => {
		setVariant();
		setOrientation();
	});
    $: classes = `${cBase} ${cVariant} ${cOrientation} ${$$props.class}`;
</script>

<hr class="divider {classes}" data-testid='divider' />
