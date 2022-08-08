<script lang="ts">
	import { afterUpdate } from "svelte";

	// Props
	export let weight: number = 1;
	export let variant: string = 'solid';
	export let orientation: string = 'h';

	// Base Classes
    const cBaseDivider = `block border-surface-300 dark:border-surface-700`;

    // Set Variant
	let cVariant: string;
	function setVariant(): void {
		switch(variant) {
			case('dashed'): cVariant = 'border-dashed'; break;
			case('dotted'): cVariant = 'border-dotted'; break;
			default:        cVariant = 'border-solid';
		}
	}
	
	// Set Orientation
	const cWeight = {
		1: {v: 'border-l', h: 'border-t'},
		2: {v: 'border-l-2', h: 'border-t-2'},
		4: {v: 'border-l-4', h: 'border-t-4'},
		8: {v: 'border-l-8', h: 'border-t-8'},
	};
	let cOrientation: string;
	function setOrientation(): void {
		switch(orientation) {
			case('v'): cOrientation = `border-0 ${cWeight[weight].v} h-full`; break;
			default:   cOrientation = `border-0 ${cWeight[weight].h} border-t w-full`;
		}
	}

	// After Prop Updates
	afterUpdate(() => {
		setVariant();
		setOrientation();
	});

	// Reactive Classes
    $: classes = `${cBaseDivider} ${cVariant} ${cOrientation}`;
</script>

<hr class="divider {classes} {$$props.class}" data-testid='divider' />
