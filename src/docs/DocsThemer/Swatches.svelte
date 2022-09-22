<script lang="ts">
	export let palette: string;
	const labels: number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
	function objectValues(obj: any): any[] {
		return Object.values(obj);
	}
</script>

<div class="mt-2 grid grid-cols-10 w-full">
	{#each objectValues(palette) as shade, i}
		<div class="flex flex-col-reverse xl:flex-col">
			<!-- Label -->
			<div class="block text-white text-xs mt-2 xl:mb-2 text-center" class:underline={i === 5}>{labels[i]}</div>
			<!-- Color -->
			<div class="h-[40px]" style:background={shade.hex ? shade.hex : shade} />
		</div>
	{/each}
</div>
