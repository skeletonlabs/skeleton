<script lang="ts">
	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	// Stores
	import { dialogStore } from '$lib/utilities/Dialog/stores';

	// Form Data
	const formData = {
		name: 'Jane Doe',
		tel: '214-555-1234',
		email: 'jdoe@email.com'
	};

	// We've created a custom submit function to pass the response and close the dialog.
	function onFormSubmit(): void {
		$dialogStore[0].response(formData);
		dialogStore.close();
	}

	// Base Classes
	const cBase: string = 'space-y-4';
	const cForm: string = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

<!-- @component This example creates a simple form dialog. -->

<div class="dialog-example-form {cBase}">
	<!-- Enable for debugging: -->
	<!-- <pre>{JSON.stringify(formData, null, 2)}</pre> -->
	<form class="dialog-form {cForm}">
		<label>
			<span>Name</span>
			<input type="text" bind:value={formData.name} placeholder="Enter name..." />
		</label>
		<label>
			<span>Phone Number</span>
			<input type="tel" bind:value={formData.tel} placeholder="Enter phone..." />
		</label>
		<label>
			<span>Email</span>
			<input type="email" bind:value={formData.email} placeholder="Enter email address..." />
		</label>
	</form>
	<!-- prettier-ignore -->
	<footer class="dialog-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>
    </footer>
</div>
