<script lang="ts">
	import ListBox from '$lib/components/ListBox/ListBox.svelte';
	import ListBoxItem from '$lib/components/ListBox/ListBoxItem.svelte';

	// Classes
	const cPreview =
		'col-span-2 bg-gradient-to-bl from-primary-500 to-secondary-500 text-on-primary-token flex justify-center items-center rounded-container-token p-4 md:p-10';

	// Local
	let showcase: string = 'elements';
</script>

<div class="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-10">
	<!-- Preview -->
	<div class={cPreview}>
		<span class="badge variant-filled">{showcase}</span>
	</div>
	<!-- Info -->
	<div class="space-y-4">
		<h2>Enhanced With the Power of Tailwind CSS.</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis velit deserunt cupiditate aliquid, perferendis
			recusandae laudantium odit repellendus.
		</p>
		<!-- Options -->
		<ListBox active="variant-filled-secondary" hover="hover:variant-soft-secondary" rounded="rounded-container-token" padding="!p-4">
			<ListBoxItem bind:group={showcase} name="showcase" value="elements">
				<div class="space-y-2">
					<h3>Elements</h3>
					<p class="!text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</ListBoxItem>
			<ListBoxItem bind:group={showcase} name="showcase" value="colors">
				<div class="space-y-2">
					<h3>Colors</h3>
					<p class="!text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</ListBoxItem>
			<ListBoxItem bind:group={showcase} name="showcase" value="darkmode">
				<div class="space-y-2">
					<h3>Dark Mode</h3>
					<p class="!text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</ListBoxItem>
		</ListBox>
	</div>
</div>
