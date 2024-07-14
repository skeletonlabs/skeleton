<script lang="ts">
	import Listbox from '$lib/components/Listbox/index.js';
	import BoxIcon from 'lucide-svelte/icons/box';

	let value: string | string[] = $state('');
	let multiple = $state(false);

	function formDataToObject(formData: FormData) {
		const result: Record<string, string[]> = {};
		for (const [key, value] of formData.entries()) {
			if (!(key in result)) {
				result[key] = [value as string];
			} else {
				result[key]!.push(value as string);
			}
		}
		return result;
	}

	let data = $state({});

	const onsubmit = (e: SubmitEvent) => {
		e.preventDefault();
		data = formDataToObject(new FormData(e.target as HTMLFormElement));
	};
</script>

<h1 class="h1">Listbox</h1>

<h2 class="h2">Input</h2>

<label>
	<span class="label-text">Multiple</span>
	<input type="checkbox" class="checkbox" bind:checked={multiple} />
</label>

<h2 class="h2">Output</h2>

<h3 class="h3">Binding:</h3>
<pre>{JSON.stringify(value, null, 2)}</pre>

<h3 class="h3">Form:</h3>
<pre>{JSON.stringify(data, null, 2)}</pre>

<form class="flex flex-col gap-2 max-w-md" {onsubmit}>
	<Listbox name="test" classes="!max-h-32" {multiple} bind:value>
		{#each [1, 2, 3, 4, 5] as item}
			<Listbox.Item value="Value {item}">
				{#snippet lead()}
					<BoxIcon />
				{/snippet}
				Option {item}
			</Listbox.Item>
		{/each}
	</Listbox>
	<button class="btn btn-md preset-filled">Submit</button>
</form>
