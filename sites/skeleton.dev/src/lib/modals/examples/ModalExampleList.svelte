<script lang="ts">
	import { ListBox, ListBoxItem, getModalStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	// Local
	let flavor = 'chocolate';
	const modalStore = getModalStore();

	// Handle Form Submission
	function onFormSubmit(): void {
		if ($modalStore[0].response) $modalStore[0].response(flavor);
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header>
		<article>{$modalStore[0].body ?? '(body missing)'}</article>
		<ListBox class="border border-surface-500 p-4 rounded-container-token">
			<ListBoxItem bind:group={flavor} name="chocolate" value="chocolate">Chocolate</ListBoxItem>
			<ListBoxItem bind:group={flavor} name="vanilla" value="vanilla">Vanilla</ListBoxItem>
			<ListBoxItem bind:group={flavor} name="strawberry" value="strawberry">Strawberry</ListBoxItem>
			<ListBoxItem bind:group={flavor} name="peach" value="peach">Peach</ListBoxItem>
		</ListBox>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Select Flavors</button>
    </footer>
	</div>
{/if}
