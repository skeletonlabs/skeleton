<script lang="ts">
	let currentOption = 6;
	const options = [
		'type-scale-1',
		'type-scale-2',
		'type-scale-3',
		'type-scale-4',
		'type-scale-5',
		'type-scale-6',
		'type-scale-7', // 6
		'type-scale-8',
		'type-scale-9',
		'type-scale-10',
		'type-scale-11',
		'type-scale-12',
		'type-scale-13'
	];
</script>

<div class="w-full space-y-4">
	<!-- Display -->
	<div class="h-[200px] flex justify-center items-center overflow-hidden whitespace-nowrap">
		<span class={options[currentOption]}>Type Scale {currentOption + 1}</span>
	</div>
	<!-- Ranger Slider -->
	<input class="input max-w-[320px] mx-auto" type="range" bind:value={currentOption} max="12" step="1" />
</div>
