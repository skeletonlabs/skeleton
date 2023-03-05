<script lang="ts">
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import ListBox from '$lib/components/ListBox/ListBox.svelte';
	import ListBoxItem from '$lib/components/ListBox/ListBoxItem.svelte';
	// Utilities
	import LightSwitch from '$lib/utilities/LightSwitch/LightSwitch.svelte';

	// Local
	let showcase: string = 'elements';
</script>

<div class="grid grid-cols-1 xl:grid-cols-3 gap-10 items-start">
	<!-- Preview -->
	<div class="col-span-2">
		<DocsPreview label={showcase} regionPreview="min-h-[320px]">
			<svelte:fragment slot="preview">
				{#if showcase === 'elements'}
					<div class="card overflow-hidden max-w-[400px] text-token">
						<header>
							<img src="https://source.unsplash.com/random/1280x540?skeleton" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
						</header>
						<div class="p-4 space-y-4">
							<h6>Announcements</h6>
							<h3 data-toc-ignore>Skeleton is Awesome!</h3>
							<article>
								<p class="opacity-75">This showcases Skeleton's Card, Typography, Chips, and a Divider elements.</p>
							</article>
						</div>
						<hr class="opacity-50" />
						<footer class="p-4 flex justify-center items-center space-x-4">
							<!-- prettier-ignore -->
							<div class="flex justify-center space-x-2">
								<span class="chip variant-soft hover:variant-filled">
									<i class="fa-solid fa-heart" />
									<span>Like</span>
								</span>
								<span class="chip variant-soft hover:variant-filled">
									<i class="fa-solid fa-paperclip" />
									<span>Save</span>
								</span>
								<span class="chip variant-soft hover:variant-filled">
									<i class="fa-solid fa-share" />
									<span>Share</span>
								</span>
							</div>
						</footer>
					</div>
				{:else if showcase === 'colors'}
					<div class="card p-2 grid grid-cols-10 gap-0.5 rounded-container-token overflow-hidden">
						<!-- Primary -->
						<div class="h-6 sm:h-8 aspect-square bg-primary-50">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-primary-100">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-primary-200">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-primary-300">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-primary-400">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-primary-500">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-primary-600">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-primary-700">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-primary-800">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-primary-900">&nbsp;</div>
						<!-- secondary -->
						<div class="h-6 sm:h-8 aspect-square bg-secondary-50">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-secondary-100">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-secondary-200">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-secondary-300">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-secondary-400">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-secondary-500">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-secondary-600">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-secondary-700">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-secondary-800">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-secondary-900">&nbsp;</div>
						<!-- tertiary -->
						<div class="h-6 sm:h-8 aspect-square bg-tertiary-50">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-tertiary-100">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-tertiary-200">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-tertiary-300">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-tertiary-400">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-tertiary-500">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-tertiary-600">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-tertiary-700">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-tertiary-800">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-tertiary-900">&nbsp;</div>
						<!-- success -->
						<div class="h-6 sm:h-8 aspect-square bg-success-50">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-success-100">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-success-200">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-success-300">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-success-400">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-success-500">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-success-600">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-success-700">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-success-800">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-success-900">&nbsp;</div>
						<!-- warning -->
						<div class="h-6 sm:h-8 aspect-square bg-warning-50">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-warning-100">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-warning-200">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-warning-300">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-warning-400">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-warning-500">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-warning-600">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-warning-700">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-warning-800">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-warning-900">&nbsp;</div>
						<!-- error -->
						<div class="h-6 sm:h-8 aspect-square bg-error-50">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-error-100">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-error-200">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-error-300">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-error-400">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-error-500">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-error-600">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-error-700">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-error-800">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-error-900">&nbsp;</div>
						<!-- surface -->
						<div class="h-6 sm:h-8 aspect-square bg-surface-50">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-surface-100">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-surface-200">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-surface-300">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-surface-400">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-surface-500">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-surface-600">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-surface-700">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-surface-800">&nbsp;</div>
						<div class="h-6 sm:h-8 aspect-square bg-surface-900">&nbsp;</div>
					</div>
				{:else if showcase === 'darkmode'}
					<LightSwitch width="w-16" height="h-8" />
				{/if}
			</svelte:fragment>
		</DocsPreview>
	</div>
	<!-- Info -->
	<div class="space-y-4">
		<h2>Enhanced with Tailwind CSS.</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis velit deserunt cupiditate aliquid, perferendis
			recusandae laudantium odit repellendus.
		</p>
		<!-- Options -->
		<ListBox active="variant-filled-primary" hover="hover:variant-soft-primary" rounded="rounded-container-token" padding="!p-4">
			<ListBoxItem bind:group={showcase} name="showcase" value="elements">
				<div class="space-y-2">
					<h3>Elements</h3>
					<p class="!text-sm">Create common UI using HTML + Tailwind.</p>
				</div>
			</ListBoxItem>
			<ListBoxItem bind:group={showcase} name="showcase" value="colors">
				<div class="space-y-2">
					<h3>Theme Colors</h3>
					<p class="!text-sm">Draw from an extensive set of theme colors.</p>
				</div>
			</ListBoxItem>
			<ListBoxItem bind:group={showcase} name="showcase" value="darkmode">
				<div class="space-y-2">
					<h3>Dark Mode</h3>
					<p class="!text-sm">Toggle dark mode with the flip of a switch.</p>
				</div>
			</ListBoxItem>
		</ListBox>
	</div>
</div>
