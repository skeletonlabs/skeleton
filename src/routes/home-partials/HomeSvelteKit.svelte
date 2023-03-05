<script lang="ts">
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Utilities
	import type { ModalSettings } from '$lib/utilities/Modal/types';
	import { modalStore } from '$lib/utilities/Modal/stores';
	// Components
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte';
	import ListBox from '$lib/components/ListBox/ListBox.svelte';
	import ListBoxItem from '$lib/components/ListBox/ListBoxItem.svelte';
	// Actions
	import { filter } from '$lib/actions/Filters/filter';
	// Filter SVGs
	import Apollo from '$lib/actions/Filters/svg-filters/Apollo.svelte';
	import BlueNight from '$lib/actions/Filters/svg-filters/BlueNight.svelte';
	import Emerald from '$lib/actions/Filters/svg-filters/Emerald.svelte';
	import Noir from '$lib/actions/Filters/svg-filters/Noir.svelte';

	// Local
	let showcase: string = 'components';
	const imgPlaceholder = `https://i.pravatar.cc/512?img=48`;

	function modalDemo(): void {
		const d: ModalSettings = {
			type: 'alert',
			title: 'Hello Skeleton',
			body: 'Create dynamic modals that capture focus that can display text, images, or event embed whole components.'
		};
		modalStore.trigger(d);
	}
</script>

<Apollo />
<BlueNight />
<Emerald />
<Noir />

<div class="grid grid-cols-1 xl:grid-cols-3 gap-10 items-start">
	<!-- Info -->
	<div class="space-y-4">
		<h2>Designed for Svelte and SvelteKit.</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis velit deserunt cupiditate aliquid, perferendis
			recusandae laudantium odit repellendus.
		</p>
		<!-- Options -->
		<ListBox active="variant-filled" hover="hover:variant-soft" rounded="rounded-container-token" padding="!p-4">
			<ListBoxItem bind:group={showcase} name="showcase" value="components">
				<div class="space-y-2">
					<h3>Components</h3>
					<p class="!text-sm">Interactive and customizable Svelte components.</p>
				</div>
			</ListBoxItem>
			<ListBoxItem bind:group={showcase} name="showcase" value="actions">
				<div class="space-y-2">
					<h3>Actions</h3>
					<p class="!text-sm">Dynamic Svelte actions DOM manipulation.</p>
				</div>
			</ListBoxItem>
			<ListBoxItem bind:group={showcase} name="showcase" value="utilities">
				<div class="space-y-2">
					<h3>Utilities</h3>
					<p class="!text-sm">Powerful utilities that combine other features.</p>
				</div>
			</ListBoxItem>
		</ListBox>
	</div>
	<!-- Preview -->
	<div class="col-span-2">
		<DocsPreview label={showcase} regionPreview="min-h-[320px]">
			<svelte:fragment slot="preview">
				{#if showcase === 'components'}
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
				{:else if showcase === 'actions'}
					<section class="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
						<div class="flex flex-col items-center space-y-4 overflow-hidden">
							<img class="aspect-square w-full rounded-container-token" src={imgPlaceholder} use:filter={'#Emerald'} alt="example" />
							<span class="badge variant-soft">Emerald</span>
						</div>
						<div class="flex flex-col items-center space-y-4 overflow-hidden">
							<img class="aspect-square w-full rounded-container-token" src={imgPlaceholder} use:filter={'#BlueNight'} alt="example" />
							<span class="badge variant-soft">BlueNight</span>
						</div>
						<div class="flex flex-col items-center space-y-4 overflow-hidden">
							<img class="aspect-square w-full rounded-container-token" src={imgPlaceholder} use:filter={'#Apollo'} alt="example" />
							<span class="badge variant-soft">Apollo</span>
						</div>
						<div class="flex flex-col items-center space-y-4 overflow-hidden">
							<img class="aspect-square w-full rounded-container-token" src={imgPlaceholder} use:filter={'#Noir'} alt="example" />
							<span class="badge variant-soft">Noir</span>
						</div>
					</section>
				{:else if showcase === 'utilities'}
					<button class="btn variant-filled" on:click={modalDemo}>Show Modal</button>
				{/if}
			</svelte:fragment>
		</DocsPreview>
	</div>
</div>
