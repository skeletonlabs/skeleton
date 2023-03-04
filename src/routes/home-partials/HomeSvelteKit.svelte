<script lang="ts">
	import ListBox from '$lib/components/ListBox/ListBox.svelte';
	import ListBoxItem from '$lib/components/ListBox/ListBoxItem.svelte';

	// Classes
	const cPreview =
		'col-span-2 bg-gradient-to-bl from-primary-500 to-secondary-500 text-on-primary-token flex justify-center items-center rounded-container-token p-4 md:p-10';

	// Local
	let showcase: string = 'components';
</script>

<div class="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-10">
	<!-- Info -->
	<div class="space-y-4">
		<h2>Designed for Svelte and SvelteKit.</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis velit deserunt cupiditate aliquid, perferendis
			recusandae laudantium odit repellendus.
		</p>
		<!-- Options -->
		<ListBox active="variant-filled-secondary" hover="hover:variant-soft-secondary" rounded="rounded-container-token" padding="!p-4">
			<ListBoxItem bind:group={showcase} name="showcase" value="components">
				<div class="space-y-2">
					<h3>Components</h3>
					<p class="!text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</ListBoxItem>
			<ListBoxItem bind:group={showcase} name="showcase" value="actions">
				<div class="space-y-2">
					<h3>Actions</h3>
					<p class="!text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</ListBoxItem>
			<ListBoxItem bind:group={showcase} name="showcase" value="utilities">
				<div class="space-y-2">
					<h3>Utilities</h3>
					<p class="!text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</ListBoxItem>
		</ListBox>
	</div>
	<!-- Preview -->
	<div class={cPreview}>
		<span class="badge variant-filled">{showcase}</span>
	</div>
</div>
