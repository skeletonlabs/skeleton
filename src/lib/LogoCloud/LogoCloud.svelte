<script lang="ts">
    import { onMount } from 'svelte';

    // Count Children
    let element: HTMLElement;
    let childCount: number;
    onMount(() => { childCount = element.childElementCount; });

    // Define Base Classes
    const cBase = `grid grid-cols-1 gap-1 overflow-hidden rounded-xl`;

    // Columns
	const columnConfig = {
		2: 'md:grid-cols-2',
		3: 'lg:grid-cols-3',
		4: 'md:grid-cols-2 lg:grid-cols-4',
	};

    // Maintain the current state of styles
    $: classes = `${cBase} ${columnConfig[childCount]} ${$$props.class}`;
</script>

<div class="cloud {classes}" bind:this={element}>
    <slot />
</div>