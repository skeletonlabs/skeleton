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
	export let blur: string = 'backdrop-blur-sm';
	// Props (drawer)
	export let bgDrawer: string = 'bg-surface-100 dark:bg-surface-800';
	export let border: string | undefined = undefined;
	export let rounded: string | undefined = undefined;
	export let width: string | undefined = undefined;
	export let height: string | undefined = undefined;
	export let margin: string | undefined = undefined;
	// Props (a11y)
	export let labelledby: string | undefined = undefined;
	export let describedby: string | undefined = undefined;

	// Base Classes
	const cBaseBackdrop: string = 'fixed top-0 left-0 right-0 bottom-0 z-40 flex';
	const cBaseDrawer: string = 'shadow-xl overflow-y-auto';

	// Local
	let elemBackdrop: HTMLElement;

	// Set Animation Values
	let animParams: any = { backdrop: '', width: '', height: '', x: 0, y: 0 };
	function setAnimParams(): void {
		switch (position) {
			case 'top':
				animParams = { backdrop: 'flex-col justify-start', width: 'w-full', height: 'h-[40%]', x: 0, y: -window.innerHeight };
				break;
			case 'bottom':
				animParams = { backdrop: 'flex-col justify-end', width: 'w-full', height: 'h-[40%]', x: 0, y: window.innerHeight };
				break;
			case 'right':
				animParams = { backdrop: 'justify-end', width: 'w-[80%]', height: 'h-full', x: window.innerWidth, y: 0 };
				break;
			// Default: Left
			default:
				animParams = { backdrop: 'justify-start', width: 'w-[80%]', height: 'h-full', x: -window.innerWidth, y: 0 };
				break;
		}
	}

	// Input Handlers
	function onClickBackdrop(e: any): void {
		// Limit to only backdrop element
		if (e.target === elemBackdrop) {
			close();
		}
	}
	function onKeydownWindow(e: any): void {
		if (!$open) return;
		if (e.code === 'Escape') {
			close();
		}
	}

	// Close
	function close(): void {
		open.set(false);
	}

	// Lifecycle
	onMount(() => {
		setAnimParams();
	});
	afterUpdate(() => {
		setAnimParams();
	});

	// Reactive
	$: classesWidth = width ? width : animParams.width;
	$: classesHeight = height ? height : animParams.height;
	$: classesBackdrop = `${cBaseBackdrop} ${animParams.backdrop} ${bgBackdrop} ${blur} ${$$props.class || ''}`;
	$: classesDrawer = `${cBaseDrawer} ${classesWidth} ${classesHeight} ${bgDrawer} ${border} ${margin} ${rounded}`;
</script>

<svelte:window on:keydown={onKeydownWindow} />

{#if $open}
	<!-- Backdrop -->
	<div
		bind:this={elemBackdrop}
		class="drawer-backdrop {classesBackdrop}"
		data-testid="drawer-backdrop"
		on:click={(e) => {
			onClickBackdrop(e);
		}}
		transition:fade|local={{ duration }}
	>
		<!-- Drawer -->
		<div
			class="drawer {classesDrawer}"
			data-testid="drawer"
			transition:fly|local={{ x: animParams.x, y: animParams.y, duration }}
			role="dialog"
			aria-modal="true"
			aria-labelledby={labelledby}
			aria-describedby={describedby}
		>
			<!-- Slot: Default -->
			<slot />
		</div>
	</div>
{/if}
