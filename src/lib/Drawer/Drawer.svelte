<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { writable, type Writable } from 'svelte/store';
	import { afterUpdate, onMount } from 'svelte/internal';

	// Props
	export let open: Writable<boolean> = writable(false);
	export let position: string = 'left';
	export let duration: number = 150;
	// Props (backdrop)
	export let bgBackdrop: string = 'bg-surface-400/70 dark:bg-surface-900/70';
	export let display: string = '';
	export let blur: string = 'backdrop-blur-sm';
	// Props (drawer)
	export let bgDrawer: string = 'bg-surface-100 dark:bg-surface-800';
	export let border: string = '';
	export let rounded: string = '';
	export let width: string = '';
	export let height: string = '';
	export let margin: string = '';
	
	// Base Classes
	const cBaseBackdrop: string = 'fixed top-0 left-0 right-0 bottom-0 z-40 flex';
	const cBaseDrawer: string = 'shadow-xl overflow-y-auto';

	// Local
	let elemBackdrop: HTMLElement;

	// Set Animation Values
	let animParams: any = { backdrop: '', width: '', height: '', x: 0, y: 0 };
	function setAnimParams(): void {
		switch(position) {
			// prettier-ignore
			case('top'):
				animParams = { backdrop: 'flex-col justify-start', width: 'w-full', height: 'h-[40%]', x: 0, y: -window.innerHeight };
				break;
			case('bottom'):
				animParams = { backdrop: 'flex-col justify-end', width: 'w-full', height: 'h-[40%]', x: 0, y: window.innerHeight };
				break;
			case('right'):
				animParams = { backdrop: 'justify-end', width: 'w-[80%]', height: 'h-full', x: window.innerWidth, y: 0 };
				break;
			// Default: Left
			default:
				animParams = { backdrop: 'justify-start', width: 'w-[80%]', height: 'h-full', x: -window.innerWidth, y: 0 };
				break;
		}
	}

	// Backdrop Click handler
	function onClickBackdrop(e: any): void {
		// Limit to only backdrop element
		if (e.target === elemBackdrop) { open.set(false);  }
	}

	// Input Handler
	function inputHandler(e: any): void {
		console.log(e);
	}

	// Lifecycle
	onMount(() => { setAnimParams(); });
	afterUpdate(() => { setAnimParams(); });

	// Reactive
	$: classesWidth = width !== '' ? width : animParams.width;
	$: classesHeight = height !== '' ? height : animParams.height;
	$: classesBackdrop = `${cBaseBackdrop} ${animParams.backdrop} ${bgBackdrop} ${display} ${blur}`;
	$: classesDrawer = `${cBaseDrawer} ${classesWidth} ${classesHeight} ${bgDrawer} ${border} ${margin} ${rounded}`;
</script>

{#if $open}
<!-- Backdrop -->
<div
	bind:this={elemBackdrop}
	class="drawer-backdrop {classesBackdrop} {$$props.class||''}"
	data-testid="drawer-backdrop"
	on:click={(e) => { onClickBackdrop(e) }}
	on:keydown={inputHandler}
	transition:fade|local={{ duration }}
>
	<!-- Drawer -->
	<div
		class="drawer {classesDrawer} {$$props.class}"
		data-testid="drawer"
		transition:fly|local={{ x: animParams.x, y: animParams.y, duration }}
	>
		<!-- Slot: Default -->
		<slot />
	</div>
</div>
{/if}