<script lang="ts">
	import SkullIcon from '@lucide/svelte/icons/skull';
	import { Portal } from '@skeletonlabs/skeleton-svelte';

	let disabled = $state(true);
	let target: HTMLElement | undefined = $state();
</script>

<div class="flex flex-col items-center gap-8 w-full">
	<div class="w-full flex justify-evenly">
		<div class="card preset-outlined size-24 grid place-items-center p-4">
			<Portal {disabled} {target}>
				<SkullIcon />
			</Portal>
		</div>
		<div class="card preset-outlined size-24 grid place-items-center p-4" bind:this={target}></div>
	</div>
	<button class="btn preset-filled w-fit" onclick={() => (disabled = !disabled)}>Portal: {disabled ? 'Disabled' : 'Enabled'}</button>
</div>
