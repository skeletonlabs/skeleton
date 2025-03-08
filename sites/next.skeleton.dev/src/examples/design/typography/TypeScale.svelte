<script lang="ts">
	let currentOption = 6;
	const options = [
		'text-xs',
		'text-sm',
		'text-base',
		'text-lg',
		'text-xl',
		'text-2xl',
		'text-3xl', // <-- default
		'text-4xl',
		'text-5xl',
		'text-6xl',
		'text-7xl',
		'text-8xl',
		'text-9xl'
	];
</script>

<div class="w-full space-y-4">
	<!-- Display -->
	<div class="h-[200px] flex justify-center items-center overflow-hidden whitespace-nowrap">
		<span class={options[currentOption]}>{options[currentOption]}</span>
	</div>
	<!-- Ranger Slider -->
	<input
		class="input max-w-[320px] mx-auto"
		type="range"
		value={currentOption}
		onValueChange={(e) => (currentOption = e.value)}
		max="12"
		step="1"
	/>
</div>
