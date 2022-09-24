<script lang="ts">
	import { fade } from 'svelte/transition';

	// Props
	export let visible: boolean = true;
	export let background: string = 'bg-accent-500/30';
	export let border: string = 'border-l-4 border-l-accent-500';
	export let color: string | undefined = '';
	export let radius: string = '';
	export let duration: number = 200; // ms
	// Props (slots)
	export let slotLead: string = '';
	export let slotContent: string = '';
	export let slotTrail: string = '';

	// Base Classes
	let cBaseCard: string = 'flex flex-col items-start lg:items-center lg:flex-row p-5 space-y-4 lg:space-y-0 lg:space-x-4';
	let cLead: string = 'flex justify-center items-center';
	let cContent: string = 'flex flex-col w-full justify-center space-y-2';
	let cTrail: string = 'flex items-center space-x-4';

	// Reactive Classes
	$: classesCard = `${cBaseCard} ${background} ${border} ${color} ${radius} ${$$props.class || ''}`;
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
