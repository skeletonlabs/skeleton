<script lang="ts">
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte';
	// Components
	import ListBox from '$lib/components/ListBox/ListBox.svelte';
	import ListBoxItem from '$lib/components/ListBox/ListBoxItem.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Local
	let showcase: string = 'components';
</script>

<div class="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-10 items-center">
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
					<p class="!text-sm">Interactive and customizable Svelte components.</p>
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
	<div class="col-span-2">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<Accordion autocollapse class="card p-4 text-token">
					<AccordionItem open>
						<svelte:fragment slot="lead"><i class="fa-solid fa-book text-xl w-6 text-center" /></svelte:fragment>
						<svelte:fragment slot="summary"><p class="font-bold">Books</p></svelte:fragment>
						<svelte:fragment slot="content">
							<p>This is the content panel for the <strong>books</strong> item.</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa maxime aut praesentium recusandae quos suscipit
								deleniti doloribus eos sequi ratione rerum dicta, omnis amet et minus, sint explicabo nobis.
							</p>
						</svelte:fragment>
					</AccordionItem>
					<AccordionItem>
						<svelte:fragment slot="lead"><i class="fa-solid fa-film text-xl w-6 text-center" /></svelte:fragment>
						<svelte:fragment slot="summary"><p class="font-bold">Movies</p></svelte:fragment>
						<svelte:fragment slot="content">
							<p>This is the content panel for the <strong>movies</strong> item.</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa maxime aut praesentium recusandae quos suscipit
								deleniti doloribus eos sequi ratione rerum dicta, omnis amet et minus, sint explicabo nobis.
							</p>
						</svelte:fragment>
					</AccordionItem>
					<AccordionItem>
						<svelte:fragment slot="lead"><i class="fa-solid fa-tv text-xl w-6 text-center" /></svelte:fragment>
						<svelte:fragment slot="summary"><p class="font-bold">Television</p></svelte:fragment>
						<svelte:fragment slot="content">
							<p>This is the content panel for the <strong>television</strong> item.</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa maxime aut praesentium recusandae quos suscipit
								deleniti doloribus eos sequi ratione rerum dicta, omnis amet et minus, sint explicabo nobis.
							</p>
						</svelte:fragment>
					</AccordionItem>
					<AccordionItem>
						<svelte:fragment slot="lead"><i class="fa-solid fa-gamepad text-xl w-6 text-center" /></svelte:fragment>
						<svelte:fragment slot="summary"><p class="font-bold">Games</p></svelte:fragment>
						<svelte:fragment slot="content">
							<p>This is the content panel for the <strong>games</strong> item.</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi quibusdam odit, temporibus ullam ab enim
								expedita eum officia ipsum, laboriosam, nobis quasi laborum aspernatur reiciendis dignissimos optio sunt distinctio.
							</p>
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="html"
					code={`
<Accordion>
	<AccordionItem open>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<svelte:fragment slot="summary">(summary)</svelte:fragment>
		<svelte:fragment slot="content">(content)</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<svelte:fragment slot="summary">(summary)</svelte:fragment>
		<svelte:fragment slot="content">(content)</svelte:fragment>
	</AccordionItem>
	<!-- ... -->
</Accordion>
`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</div>
</div>
