<script lang="ts">
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Utilities
	import { modalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	// Components
	import { Accordion, AccordionItem, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	// Actions
	import { filter } from '@skeletonlabs/skeleton';
	// Filter SVGs
	import { Apollo, BlueNight, Emerald, Noir } from '@skeletonlabs/skeleton';

	// Local
	let showcase = 'components';
	const imgPlaceholder = `https://source.unsplash.com/YOErFW8AfkI/200x200`;

	function modalDemo(): void {
		const modal: ModalSettings = {
			type: 'alert',
			title: 'What is this?',
			body: 'A high priority dialog modal system with a dynamic queue. This allows you to create standard alerts and implement custom modals using standard Svelte components.'
		};
		modalStore.trigger(modal);
	}
</script>

<Apollo />
<BlueNight />
<Emerald />
<Noir />

<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-10 items-start">
	<!-- Info -->
	<div class="space-y-4">
		<h2 class="h2">Designed for Svelte and SvelteKit.</h2>
		<!-- prettier-ignore -->
		<p>
			Skeleton integrates directly with <a class="anchor" href="https://svelte.dev/" target="_blank" rel="noreferrer">Svelte</a> and <a class="anchor" href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit's</a> best features, including components, stores, actions, and more. Offering
			interactive components, image filters, and much more.
		</p>
		<!-- Options -->
		<ListBox active="variant-filled" hover="hover:variant-soft" rounded="rounded-container-token" padding="!p-4">
			<ListBoxItem bind:group={showcase} name="showcase" value="components">
				<div class="space-y-2">
					<h3 class="h3">Components</h3>
					<p class="!text-sm">Interactive and customizable components.</p>
				</div>
			</ListBoxItem>
			<ListBoxItem bind:group={showcase} name="showcase" value="actions">
				<div class="space-y-2">
					<h3 class="h3">Actions</h3>
					<p class="!text-sm">Dynamic actions for filters, tab focus, and more.</p>
				</div>
			</ListBoxItem>
			<ListBoxItem bind:group={showcase} name="showcase" value="utilities">
				<div class="space-y-2">
					<h3 class="h3">Utilities</h3>
					<p class="!text-sm">Powerful utilities that extend even further.</p>
				</div>
			</ListBoxItem>
		</ListBox>
	</div>
	<!-- Preview -->
	<div class="col-span-2">
		<DocsPreview label={showcase} regionPreview="min-h-[320px]">
			<svelte:fragment slot="preview">
				{#if showcase === 'components'}
					<!-- Source: https://www.oprahdaily.com/life/a37259063/day-of-the-dead-facts-history/ -->
					<Accordion autocollapse class="card p-4 text-token">
						<AccordionItem open>
							<svelte:fragment slot="lead"><i class="fa-solid fa-skull text-xl w-6 text-center" /></svelte:fragment>
							<svelte:fragment slot="summary"><p class="font-bold">What is Día de los Muertos?</p></svelte:fragment>
							<svelte:fragment slot="content">
								<!-- prettier-ignore -->
								<p>
									While Halloween and Day of the Dead occur nearly in tandem and share similar customs (candy, face painting, and community gathering), the two are not related. Halloween has ancient Celtic roots, while Day of the Dead has its own origins that date back to the Indigenous people of Mexico and Central America.
								</p>
							</svelte:fragment>
						</AccordionItem>
						<AccordionItem>
							<svelte:fragment slot="lead"><i class="fa-solid fa-clock text-xl w-6 text-center" /></svelte:fragment>
							<svelte:fragment slot="summary"><p class="font-bold">When did it begin?</p></svelte:fragment>
							<svelte:fragment slot="content">
								<!-- prettier-ignore -->
								<p>
									Roughly 3000 years ago, amongst the Aztec, Toltec, and Mayans, death and the dead were seen as a natural part of life that should be honored and celebrated, rather than mourned. In particular, the Nahua people of central Mexico believed the deceased traveled on a years-long journey to Chicunamictlán, the Land of the Dead. The living would provide supplies, such as food and water to aid them on the trek. This practice inspired the modern tradition of creating altars —known as ofrendas— at their homes, in addition to leaving offerings at the gravesites of loved ones.
								</p>
							</svelte:fragment>
						</AccordionItem>
						<AccordionItem>
							<svelte:fragment slot="lead"><i class="fa-solid fa-calendar text-xl w-6 text-center" /></svelte:fragment>
							<svelte:fragment slot="summary"><p class="font-bold">When is it celebrated?</p></svelte:fragment>
							<svelte:fragment slot="content">
								<!-- prettier-ignore -->
								<p>
									Once the Spanish colonized Mexico in the 16th century, their own Catholic views on the dead influenced Mexican customs. Día de los Muertos was originally celebrated in the summer months. The holiday came to fall on November 1 and November 2 to align with All Saints Day and All Souls Day.
								</p>
							</svelte:fragment>
						</AccordionItem>
						<AccordionItem>
							<svelte:fragment slot="lead"><i class="fa-solid fa-gift text-xl w-6 text-center" /></svelte:fragment>
							<svelte:fragment slot="summary"><p class="font-bold">What are ofrendas?</p></svelte:fragment>
							<svelte:fragment slot="content">
								<!-- prettier-ignore -->
								<p>
									To beckon spirits back into the Land of the Living for the festivities, revelers create makeshift altars, or ofrendas, at their homes and at the gravesites of their deceased loved ones. Families gather at the site to eat, tell stories, and even clean the graves.
								</p>
							</svelte:fragment>
						</AccordionItem>
						<AccordionItem>
							<svelte:fragment slot="lead"><i class="fa-solid fa-file text-xl w-6 text-center" /></svelte:fragment>
							<svelte:fragment slot="summary"><p class="font-bold">Source</p></svelte:fragment>
							<svelte:fragment slot="content">
								<!-- prettier-ignore -->
								<p><a class="anchor" href="https://www.oprahdaily.com/life/a37259063/day-of-the-dead-facts-history/" target="_blank" rel="noreferrer">https://www.oprahdaily.com/life/a37259063/day-of-the-dead-facts-history/</a></p>
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
					<button class="btn variant-filled" on:click={modalDemo}>Trigger Modal</button>
				{/if}
			</svelte:fragment>
		</DocsPreview>
	</div>
</div>
