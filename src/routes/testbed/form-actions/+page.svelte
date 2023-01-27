<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;

	// Components
	import InputChip from '$lib/components/InputChip/InputChip.svelte';
	import ListBox from '$lib/components/ListBox/ListBox.svelte';

	// Local
	let formData = {
		first_name: 'Susan',
		chips: ['chip1', 'chip2', 'chip3'],
		lbSource: [
			{ label: 'List Option 1', value: 1 },
			{ label: 'List Option 2', value: 2 },
			{ label: 'List Option 3', value: 3 },
			{ label: 'List Option 4', value: 4 }
		],
		lbSingle: 1,
		lbMulti: [1, 2]
	};

	// const submit: SubmitFunction = (input) => {
	// 	console.log(input.data);
	// 	console.log(input.data.get('name'));

	// 	return async ({ update }) => {
	// 		await update();
	// 	};
	// };
</script>

<div class="page-container">
	<!-- Form -->
	<!-- {submit} -->
	<form method="POST" action="?/submit" use:enhance class="space-y-4">
		<!-- First Name -->
		<label class="input-label">
			<span>Input (text)</span>
			<input type="text" id="first_name" name="first_name" placeholder="First Name" value={formData.first_name} />
		</label>
		<!-- Input Chip -->
		<InputChip name="chips" bind:value={formData.chips} />
		<!-- ListBox (single) -->
		<div class="input-cell p-2 rounded-container-token">
			<ListBox name="listbox-single" bind:source={formData.lbSource} bind:value={formData.lbSingle} />
		</div>
		<!-- ListBox (multiple) -->
		<div class="input-cell p-2 rounded-container-token">
			<ListBox name="listbox-multiple" bind:source={formData.lbSource} bind:value={formData.lbMulti} multiple />
		</div>
		<!-- Submit -->
		<button class="btn variant-filled" type="submit">Submit</button>
	</form>

	<!-- Form output -->
	<pre>form-action-data: {JSON.stringify(form, null, 2)}</pre>
</div>
