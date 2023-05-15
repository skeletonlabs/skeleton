<script lang="ts">
	import { crossfade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { flip } from 'svelte/animate';

	// Types
	import type { CssClasses } from '@skeletonlabs/skeleton';

	// Stores
	import { toastStore } from './stores';

	// Props
	/** Set the toast position.
	 * @type {'t' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br'}
	 */
	export let position: 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br' = 'b';
	/** Maximum toasts that can show at once. */
	export let max = 3;
	/** The duration of the fly in/out animation. */
	export let duration = 250;

	// Props (styles)
	/** Provide classes to set the background color. */
	export let background: CssClasses = 'variant-filled-secondary';
	/** Provide classes to set width styles. */
	export let width: CssClasses = 'max-w-[640px]';
	/** Provide classes to set the text color. */
	export let color: CssClasses = '';
	/** Provide classes to set the padding. */
	export let padding: CssClasses = 'p-4';
	/** Provide classes to set toast horizontal spacing. */
	export let spacing: CssClasses = 'space-x-4';
	/** Provide classes to set the border radius styles. */
	export let rounded: CssClasses = 'rounded-container-token';
	/** Provide classes to set the border box shadow. */
	export let shadow: CssClasses = 'shadow-lg';
	/** Provide a class to override the z-index */
	export let zIndex: CssClasses = 'z-[888]';

	// Props (buttons)
	/** Provide styles for the action button. */
	export let buttonAction: CssClasses = 'btn variant-filled';
	/** Provide styles for the dismiss button. */
	export let buttonDismiss: CssClasses = 'btn-icon btn-icon-sm variant-filled';
	/** The button label text. */
	export let buttonDismissLabel = '✕';

	// Base Classes
	const cWrapper = 'flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none';
	const cSnackbar = 'flex flex-col space-y-2';
	const cToast = 'flex justify-between items-center pointer-events-auto';
	const cToastActions = 'flex items-center space-x-2';

	// Local
	let cPosition: string;
	let cAlign: string; // items-center
	let animAxis = { x: 0, y: 0 };

	// Set Position
	// prettier-ignore
	switch (position) {
		// Middles
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
	$: classesWrapper = `${cWrapper} ${cPosition} ${zIndex} ${$$props.class || ''}`;
	$: classesSnackbar = `${cSnackbar} ${cAlign} ${padding}`;
	$: classesToast = `${cToast} ${width} ${color} ${padding} ${spacing} ${rounded} ${shadow}`;
	// Filtered Toast Store
	$: filteredToasts = Array.from($toastStore).slice(0, max);

	// Crossfade animation for Toasts
	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * duration),

		fallback(node) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration,
				easing: cubicInOut,
				css: (t, u) => `
					transform: ${transform} scale(${t}) translate(${u * animAxis.x}%, ${u * animAxis.y}%);
					opacity: ${t}
				`
			};
		}
	});
</script>

{#if $toastStore.length}
	<!-- Wrapper -->
	<div class="snackbar-wrapper {classesWrapper}" data-testid="snackbar-wrapper">
		<!-- List -->
		<div class="snackbar {classesSnackbar}">
			{#each filteredToasts as t, i (t)}
				<div animate:flip={{ duration }} in:receive={{ key: t.id }} out:send={{ key: t.id }}>
					<!-- Toast -->
					<div
						class="toast {classesToast} {t.background ?? background} {t.classes ?? ''}"
						role="alert"
						aria-live="polite"
						data-testid="toast"
					>
						<div class="text-base">{@html t.message}</div>
						<div class="toast-actions {cToastActions}">
							{#if t.action}<button class={buttonAction} on:click={() => onAction(i)}>{@html t.action.label}</button>{/if}
							<button class={buttonDismiss} on:click={() => toastStore.close(t.id)}>{buttonDismissLabel}</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}
