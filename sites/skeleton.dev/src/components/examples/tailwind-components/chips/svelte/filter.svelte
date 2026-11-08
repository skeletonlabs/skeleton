<script lang="ts">
	import CheckIcon from "@lucide/svelte/icons/check";

	const colors = ["red", "green", "blue"];
	let color = $state(colors[0]);

	function setColor(selectedColor: string) {
		color = selectedColor;
	}
</script>

<div class="card preset-filled-surface-100-900 w-full max-w-md p-4">
	<div class="flex items-center justify-center gap-2">
		<span class="text-sm opacity-60">Favorite Color</span>
		<!-- --- -->
		{#each colors as c (c)}
			<button
				class={`chip preset-outlined-surface-400-600 capitalize ${color === c ? "preset-tonal-primary" : ""}`}
				onclick={() => setColor(c)}
			>
				{#if color === c}<CheckIcon size={14} />{/if}
				<span>{c}</span>
			</button>
		{/each}
		<!-- --- -->
	</div>
</div>
