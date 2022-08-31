<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { writable, type Writable } from 'svelte/store';

	// Props
	export let open: Writable<boolean> = writable(false);
	export let position: string = 'left';
	export let duration: number = 200;
	// Props (backdrop)
	export let backdrop: string = 'bg-surface-400/70 dark:bg-surface-900/70';
	export let blur: string = 'backdrop-blur-none';
	// Props (drawer)
	export let background: string = 'bg-surface-100 dark:bg-surface-800';
	export let border: string = '';
	
	// Base Classes
	const cBaseBackdrop: string = 'lg:hidden fixed top-0 left-0 right-0 bottom-0 z-40 flex';
	const cBaseDrawer: string = 'shadow-xl overflow-y-auto';

	// Local
	let elemBackdrop: HTMLElement;
	let elemDrawer: HTMLElement

	// Set Position
	let pos: any;
	switch(position) {
		// prettier-ignore
		case('top'): pos = { backdrop: 'flex-col justify-start', width: 'w-full', height: 'h-[40%]' }; break;
		case('bottom'): pos = { backdrop: 'flex-col justify-end', width: 'w-full', height: 'h-[40%]' }; break;
		case('right'): pos = { backdrop: 'justify-end', width: 'w-[80%]', height: 'h-full' }; break;
		// Default: Left
		default: pos = { backdrop: 'justify-start', width: 'w-[80%]', height: 'h-full' }; break;
	}

	// Backdrop Click handler
	function onClickBackdrop(e: any): void {
		// Limit to only backdrop element
		if (e.target === elemBackdrop) { open.set(false);  }
	}

	// Reactive
	$: classesBackdrop = `${cBaseBackdrop} ${pos.backdrop} ${backdrop} ${blur}`;
	$: classesDrawer = `${cBaseDrawer} ${pos.width} ${pos.height} ${background} ${border}`;
</script>

{#if $open}
<!-- Backdrop -->
<div
	bind:this={elemBackdrop}
	class="drawer-backdrop {classesBackdrop}"
	data-testid="drawer-backdrop"
	on:click={(e) => { onClickBackdrop(e) }}
	transition:fade|local={{ duration }}
>
	<!-- Drawer -->
	<div
		bind:this={elemDrawer}
		class="drawer {classesDrawer} {$$props.class}"
		data-testid="drawer"
		transition:fly|local={{ x: -elemDrawer.offsetWidth, duration }}
	>
		<!-- Slot: Default -->
		<slot />
	</div>
</div>
{/if}