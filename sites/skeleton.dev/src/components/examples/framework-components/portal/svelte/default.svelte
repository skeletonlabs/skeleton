<script lang="ts">
	import { SkullIcon } from '@lucide/svelte';
	import { Portal } from '@skeletonlabs/skeleton-svelte';

	let disabled = $state(true);
	let target: HTMLElement | undefined = $state();

	const cardClasses = 'card preset-outlined-surface-300-700 size-24 grid place-items-center p-4';
	const buttonClasses = 'col-span-2 btn preset-filled';
</script>

<div class="grid grid-cols-2 gap-4">
	<!-- Source -->
	<div class={cardClasses}>
		<Portal {disabled} {target}>
			<SkullIcon class="size-8" />
		</Portal>
	</div>

	<!-- Target -->
	<div class={cardClasses} bind:this={target}>
		<!-- (the content will appear here) -->
	</div>

	<!-- Trigger -->
	<button class={buttonClasses} onclick={() => (disabled = !disabled)}>
		{disabled ? 'Enable' : 'Disable'}
	</button>
</div>
