<script lang="ts">
	export let weight: number = 1;
	export let display: string = 'solid'; // solid | dashed | dotted
	export let orientation: string = 'h'; // h (horizintal) | v (vertical)

	// Define Base Classes
    const cBase = `border-surface-300 dark:border-surface-700`;

	// Weight
	const cWeight = {
		1: {v: 'border-l', h: 'border-t'},
		2: {v: 'border-l-2', h: 'border-t-2'},
		4: {v: 'border-l-4', h: 'border-t-4'},
		8: {v: 'border-l-8', h: 'border-t-8'},
	};

    // Set Display
	let cDisplay: string;
	switch(display) {
		case('dashed'): cDisplay = 'border-dashed'; break;
		case('dotted'): cDisplay = 'border-dotted'; break;
		default:        cDisplay = 'border-solid';
	}
	
	// Set Orientation
	let cOrientation: string;
	switch(orientation) {
		case('v'): cOrientation = `border-0 ${cWeight[weight].v} h-full`; break;
		default:   cOrientation = `border-0 ${cWeight[weight].h} border-t w-full`;
	}

	// Maintain the current state of styles
    $: classes = `${cBase} ${cDisplay} ${cOrientation} ${$$props.class}`;
</script>

<hr class={classes} />
