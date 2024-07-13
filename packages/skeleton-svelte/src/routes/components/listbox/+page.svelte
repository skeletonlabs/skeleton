<script lang="ts">
	import Listbox from '$lib/components/Listbox/index.js';
	import BoxIcon from 'lucide-svelte/icons/box';

	const onsubmit = (e: SubmitEvent) => {
		e.preventDefault();
		console.log(new FormData(e.target as HTMLFormElement).getAll('test'));
	};
</script>

<h1 class="h1">Listbox</h1>

<form {onsubmit}>
	<Listbox multiple>
		{#each [1, 2, 3, 4, 5] as item}
			<Listbox.Item name="test" value="Value {item}">
				{#snippet lead()}
					<BoxIcon />
				{/snippet}
				Option {item}
			</Listbox.Item>
		{/each}
	</Listbox>
	<button class="btn btn-md preset-filled">Submit</button>
</form>
