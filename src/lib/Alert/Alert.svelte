<script lang="ts">
	import { fade } from 'svelte/transition';

	export let visible: boolean = true;
	export let duration: number = 200; // ms
	export let background: string = 'bg-surface-500';
	export let color: string = 'text-white';
	export let radius: string = 'rounded-lg';

	let cBase = 'flex flex-col items-start lg:items-center lg:flex-row p-5 space-y-4 lg:space-y-0 lg:space-x-4';
	$: classes = `${cBase} ${background} ${color} ${radius} ${$$props.class}`;
</script>

{#if visible}
<!-- TODO: convert to <Card> -->
<div class="alert {classes}" data-testid="alert" transition:fade={{duration}}>

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
			<p><slot name="message" /></p>
		{/if}
	</section>
	
	<!-- Slot: Trail -->
	{#if $$slots.trail}
		<section class="flex items-center space-x-4">
			<slot name='trail'/>
		</section>
	{/if}
</div>
{/if}