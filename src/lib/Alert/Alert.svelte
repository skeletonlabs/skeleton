<script lang="ts">
	import { fade } from 'svelte/transition';
	import Card from '$lib/Card/Card.svelte';

	// Props
	export let visible: boolean = true;
	export let duration: number = 200; // ms
	export let background: string = 'bg-surface-500';
	export let color: string = 'text-white';
	export let radius: string = 'rounded-lg';

	// Base Classes
	let cBaseCard = 'flex flex-col items-start lg:items-center lg:flex-row p-5 space-y-4 lg:space-y-0 lg:space-x-4';

	// Reactive Classes
	$: classesCard = `${cBaseCard} ${radius} ${$$props.class}`;
</script>

{#if visible}
	<div class="alert" transition:fade|local={{ duration }} data-testid="alert" role="alert" aria-live="polite">
		<Card {background} {color} class={classesCard}>
			<!-- Slot: Lead -->
			{#if $$slots.lead}
				<section class="flex justify-center items-center lg:min-w-[72px]">
					<slot name="lead" />
				</section>
			{/if}

			<!-- Content -->
			<section class="flex flex-col w-full justify-center space-y-2">
				<!-- Slot: Title -->
				<h3><slot name="title">(REQUIRED: Title Slot)</slot></h3>
				<!-- Slot: Message -->
				{#if $$slots.message}
					<div class="{color} opacity-70"><slot name="message" /></div>
				{/if}
			</section>

			<!-- Slot: Trail -->
			{#if $$slots.trail}
				<section class="flex items-center space-x-4">
					<slot name="trail" />
				</section>
			{/if}
		</Card>
	</div>
{/if}
