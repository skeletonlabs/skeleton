<script lang="ts">
	//Slots
	/**
	 * @slot lead - Provide a leading element, such as an icon.
	 * @slot content - Provide the alert message text.
	 * @slot trail - Provide a trailing element, such as a call to action.
	 * @slot title - Provide the alert title text.
	 */

	import { fade } from 'svelte/transition';

	// Props
	/** Control visibility of the alert. */
	export let visible: boolean = true;
	/** Provide classes to set background color. */
	export let background: string = 'bg-tertiary-500/40';
	/** Provide classes to set the border styles. */
	export let border: string = 'border-l-4 border-l-tertiary-500';
	/** Provide classes to set text color. */
	export let color: string = '';
	/** Provide classes to set border radius. */
	export let rounded: string = '';
	/** Svelte fade transition duration. Set 0 to disable. */
	export let duration: number = 200; // ms

	// Props (regions)
	/** Classes to be applied to the lead slot region. */
	export let slotLead: string = '';
	/** Classes to be applied to the content slot region. */
	export let slotContent: string = '';
	/** Classes to be applied to the trail slot region. */
	export let slotTrail: string = '';

	// Base Classes
	let cBaseCard: string = 'flex flex-col items-start lg:items-center lg:flex-row p-5 space-y-4 lg:space-y-0 lg:space-x-4';
	let cLead: string = 'flex justify-center items-center';
	let cContent: string = 'flex flex-col w-full justify-center space-y-2';
	let cTrail: string = 'flex items-center space-x-4';

	// Reactive Classes
	$: classesCard = `${cBaseCard} ${background} ${border} ${color} ${rounded} ${$$props.class ?? ''}`;
	$: classesLead = `${cLead} ${slotLead}`;
	$: classesContent = `${cContent} ${slotContent}`;
	$: classesTrail = `${cTrail} ${slotTrail}`;
</script>

{#if visible}
	<div class="alert {classesCard}" transition:fade|local={{ duration }} data-testid="alert" role="alert" aria-live="polite">
		<!-- Slot: Lead -->
		{#if $$slots.lead}
			<section class="alert-lead {classesLead}">
				<slot name="lead" />
			</section>
		{/if}

		<!-- Content -->
		<section class="alert-content {classesContent}">
			<!-- Slot: Title -->
			{#if $$slots.title}<h3 class="alert-title"><slot name="title" /></h3>{/if}
			<!-- Slot: Default -->
			{#if $$slots.default}<div class="alert-message {color}"><slot /></div>{/if}
		</section>

		<!-- Slot: Trail -->
		{#if $$slots.trail}
			<section class="alert-trail {classesTrail}">
				<slot name="trail" />
			</section>
		{/if}
	</div>
{/if}
