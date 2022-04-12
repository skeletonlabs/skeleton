<script lang="ts">
	import { onMount } from 'svelte';

	export let visible: boolean = true;
	export let color: string = 'bg-surface-300 dark:bg-surface-900';
	export let textColor: string = '';

	let cBase = 'flex flex-col sm:flex-col md:flex-col lg:flex-row'
	$: classes = `${cBase} ${$$props.class} ${color}`;

	$: cText = `${textColor}`;
</script>

<!-- Shown if visible -->
{#if visible}
	<div data-testid="alert" on:click on:mouseover on:focus class="alert {classes}">
	
		{#if $$slots.lead}
			<!-- Icon slot -->
			<div class="flex flex-col sm:self-start lg:self-center justify-center lg:w-8 sm:w-6 m-6">
				<slot name="lead" />
			</div>
		{/if}

		<!-- Title + Message -->
		<div class="flex flex-col w-full justify-center">
			{#if $$slots.title && $$slots.message}
				<div class="m-4 sm:ml-6 mb-2 font-bold text-xl {textColor}">
					<slot name="title" />
				</div>
			{:else}
				<div class="m-4 sm:ml-6 font-bold text-md semi-bold {textColor}">
					<slot name="title" />
				</div>
			{/if}

			{#if $$slots.message}
				<div class="m-4 sm:ml-6 mt-0 {textColor}">
					<slot name="message" />
				</div>
			{/if}
		</div>
		
		<!-- Action Slot -->
		{#if $$slots.trail}
			<div class='flex flex-row h-min sm:justify-self-start lg:self-center space-x-4 m-4 sm:ml-6'>
				<slot name='trail'/>
			</div>
		{/if}
	</div>
{/if}