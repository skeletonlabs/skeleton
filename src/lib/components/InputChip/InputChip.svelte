<script lang="ts">
	export let source: any[] = ['vanilla', 'chocolate', 'strawberry'];
	export let whitelist: any = [...source];
	export let value: string = '';

	// Classes
	// focus:border-secondary-500
	const cBase = 'unstyled border-token flex flex-wrap gap-2 items-center p-2 rounded';
	const cChip = 'chip-primary hover:chip-error';
	const cInput = 'unstyled flex-auto bg-transparent border-transparent px-2 p-[1px] rounded text-sm';

	function onKeyDown(event: KeyboardEvent): void {
		if (event.code === 'Enter') {
			// Not already included, whitelist allows it
			if (!source.includes(value) && whitelist.length > 0 && whitelist.includes(value)) {
				source = [...source, value];
				value = '';
			}
		}
	}

	function remove(chipIndex: number): void {
		source = source.filter((_, i) => i !== chipIndex);
		console.log(source);
	}
</script>

<label class="input-chip {cBase}">
	<strong>Flavors</strong>
	{#each source as chip, i}
		<!-- prettier-ignore -->
		<span class="chip {cChip}" on:click={() => {remove(i)}} on:keypress>
			<span>{chip}</span>
			<span>✕</span>
		</span>
	{/each}
	<input class="input-chip-field {cInput}" type="text" placeholder="Enter Value..." bind:value on:keydown={onKeyDown} />
</label>

<style>
	input:focus {
		outline: 10 !important;
	}
</style>
