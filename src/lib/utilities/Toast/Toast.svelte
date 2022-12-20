<script lang="ts">
	import { fly } from 'svelte/transition';

	// Toast Store
	import { toastStore } from './stores';

	// Props
	/** Set the toast position.
	 * @type {'t' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br'}
	 */
	export let position = 'b';
	/** Maximum toasts that can show at once. */
	export let max = 3;
	/** The duration of the fly in/out animation. */
	export let duration = 150;

	// Props (styles)
	/** Provide classes to set the background color. */
	export let background = 'bg-secondary-500';
	/** Provide classes to set width styles. */
	export let width = 'max-w-[640px]';
	/** Provide classes to set the text color. */
	export let color = 'text-on-secondary-token';
	/** Provide classes to set the padding. */
	export let padding = 'p-4';
	/** Provide classes to set the horizontal spacing. */
	export let spacing = 'space-x-4';
	/** Provide classes to set the border radius styles. */
	export let rounded = 'rounded-container-token';
	/** Provide classes to set the border box shadow. */
	export let shadow = 'shadow-lg';

	// Props (buttons)
	/** Provide action button styles. */
	export let buttonAction = 'btn-filled';
	/** Provide dismiss button styles. */
	export let buttonDismiss = 'btn-filled';

	// Base Classes
	const cWrapper = 'flex fixed top-0 left-0 right-0 bottom-0 z-[888] pointer-events-none';
	const cSnackbar = 'flex flex-col space-y-2';
	const cToast = 'flex justify-between items-center pointer-events-auto';

	// Local
	let cPosition: string;
	let cAlign: string; // items-center
	let animAxis = { x: 0, y: 0 };

	// Set Position
	// prettier-ignore
	switch (position) {
		// Centered
		case('t'): cPosition = 'justify-center items-start'; cAlign = 'items-center'; animAxis = { x: 0, y: -100 }; break;
		case('b'): cPosition = 'justify-center items-end'; cAlign = 'items-center'; animAxis = { x: 0, y: 100 }; break;
		case('l'): cPosition = 'justify-start items-center'; cAlign = 'items-start'; animAxis = { x: -100, y: 0 }; break;
		case('r'): cPosition = 'justify-end items-center'; cAlign = 'items-end'; animAxis = { x: 100, y: 0 }; break;
		// Corners
		case ('tl'): cPosition = 'justify-start items-start'; cAlign = 'items-start'; animAxis = { x: -100, y: 0 }; break;
		case ('tr'): cPosition = 'justify-end items-start'; cAlign = 'items-end'; animAxis = { x: 100, y: 0 }; break;
		case ('bl'): cPosition = 'justify-start items-end'; cAlign = 'items-start'; animAxis = { x: -100, y: 0 }; break;
		case ('br'): cPosition = 'justify-end items-end'; cAlign = 'items-end'; animAxis = { x: 100, y: 0 }; break;
	}

	function onAction(index: number): void {
		$toastStore[index]?.action?.response();
		toastStore.close($toastStore[index].id);
	}

	// Reactive
	$: classesWrapper = `${cWrapper} ${cPosition} ${$$props.class || ''}`;
	$: classesSnackbar = `${cSnackbar} ${cAlign} ${padding}`;
	$: classesBase = `${cToast} ${background} ${width} ${color} ${padding} ${spacing} ${rounded} ${shadow}`;
</script>

{#if $toastStore.length}
	<!-- Wrapper -->
	<div class="snackbar-wrapper {classesWrapper}" data-testid="snackbar-wrapper">
		<!-- List -->
		<div class="snackbar {classesSnackbar}" transition:fly={{ x: animAxis.x, y: animAxis.y, duration }}>
			{#each $toastStore as t, i}
				{#if i < max + 1}
					<!-- Toast -->
					<div class="toast {classesBase} {t.classes}" role="alert" aria-live="polite" data-testid="toast">
						<div class="text-base">{@html t.message}</div>
						<!-- prettier-ignore -->
						<div class="flex items-center space-x-2">
							{#if t.action}<button class="btn {buttonAction}" on:click={() => onAction(i)}>{@html t.action.label}</button>{/if}
							<button class="btn-icon {buttonDismiss}" on:click={() => { toastStore.close(t.id) }}>✕</button>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
{/if}
