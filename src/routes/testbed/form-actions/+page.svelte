<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;

	// Components
	import InputChip from '$lib/components/InputChip/InputChip.svelte';
	import FileButton from '$lib/components/FileButton/FileButton.svelte';

	// Local
	let formData = {
		first_name: 'Chris',
		flavors: ['vanilla', 'chocolate', 'strawberry']
	};

	const submit: SubmitFunction = (input) => {
		console.log(input.data);
		console.log(input.data.get('name'));

		return async ({ update }) => {
			await update();
		};
	};
</script>

<div class="page-container">
	<!-- Form -->
	<form method="POST" action="?/submit" use:enhance={submit} class="space-y-4">
		<!-- First Name -->
		<label class="input-label">
			<span>Input (text)</span>
			<input type="text" id="first_name" name="first_name" placeholder="First Name" value={formData.first_name} />
		</label>
		<!-- File Button -->
		<!-- <FileButton name="files">Upload File</FileButton> -->
		<!-- Select -->
		<select name="pets" multiple>
			<option value="dog">Dog</option>
			<option value="cat">Cat</option>
			<option value="hamster">Hamster</option>
			<option value="parrot">Parrot</option>
			<option value="spider">Spider</option>
			<option value="goldfish">Goldfish</option>
		</select>
		<!-- Input Chip -->
		<InputChip name="flavors" bind:value={formData.flavors} />
		<!-- Submit -->
		<button class="btn variant-filled" type="submit">Submit</button>
	</form>

	<!-- Form output -->
	<pre>form-action-data: {JSON.stringify(form, null, 2)}</pre>
</div>
