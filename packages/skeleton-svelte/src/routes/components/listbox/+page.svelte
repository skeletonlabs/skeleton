<script lang="ts">
	import Listbox from '$lib/components/Listbox/index.js';
	import BoxIcon from 'lucide-svelte/icons/box';

	const onsubmit = (e: SubmitEvent) => {
		e.preventDefault();
		console.log(new FormData(e.target as HTMLFormElement).getAll('test'));
	};

	const items = ['apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach'];
</script>

<h1 class="h1">Listbox</h1>

<form {onsubmit}>
	<Listbox multiple>
		{#each items as item}
			<Listbox.Item name="test" value={item}>
				{#snippet lead()}
					<BoxIcon />
				{/snippet}

				{item}
			</Listbox.Item>
		{/each}
	</Listbox>
	<button class="btn filled-500">Submit</button>
</form>
