<script lang="ts">
	// Docs
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	import { variants } from '$docs/components/DocsPreview/options';
	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Buttons',
		description: 'Provides a robust set of button styles, including preset variants.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/buttons'],
		source: 'styles/elements/buttons.css',
		classes: [
			['<code class="code">.btn</code>', '-', 'Creates a text button using a button or anchor.'],
			['<code class="code">.btn-icon</code>', '-', 'Creates a text icon button using a button or anchor.'],
			['<code class="code">.btn-[value]</code>', 'sm | base | lg | xl', 'Canned button sizes that define padding and text sizes.'],
			['<code class="code">.btn-icon-[value]</code>', 'sm | base | lg | xl', 'Canned icon button sizes that define padding and text sizes.']
		]
	};

	// Local:
	let currentVariant = 'variant-filled';
	const href = '/elements/buttons';

	// Reactive
	$: props = {
		tag: 'button',
		variant: 'variant-filled-primary',
		size: '',
		disabled: false
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="flex gap-4">
					<button type="button" class="btn-icon {currentVariant}">
						<i class="fa-solid fa-skull" />
					</button>
					<button type="button" class="btn {currentVariant}">Button</button>
					<button type="button" class="btn {currentVariant}">
						<i class="fa-solid fa-skull" />
						<span>Button</span>
					</button>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<div class="flex justify-center gap-4">
					<select bind:value={currentVariant} class="select w-auto">
						{#each variants as vSet}
							<optgroup label={vSet.label}>
								{#each vSet.list as v}
									<option value={v}>{v}</option>
								{/each}
							</optgroup>
						{/each}
					</select>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="html"
					code={`
<button type="button" class="btn-icon ${currentVariant}">(icon)</button>
<button type="button" class="btn ${currentVariant}">Button</button>
<button type="button" class="btn ${currentVariant}">
	<span>(icon)</span>
	<span>Button</span>
</button>
`}
				/>
				<CodeBlock
					language="html"
					code={`
<a href="/" class="btn-icon ${currentVariant}">(icon)</a>
<a href="/" class="btn ${currentVariant}">a</a>
<a href="/" class="btn ${currentVariant}">
	<span>(icon)</span>
	<span>Anchor</span>
</a>
`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>
			Use <code class="code">.btn</code> to add basic button styles to any anchor or button element. Replace with
			<code class="code">.btn-icon</code>
			for an icon button. Mix buttons with any arbitrary background color or variant style classes, such as
			<code class="code">.variant-[style]-[themeColor]</code>.
		</p>
		<section class="space-y-4">
			<h2 class="h2">Sizes</h2>
			<p>A number of canned size presets are available via <code class="code">.btn-[size]</code>.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="space-y-4">
						<div class="flex justify-center items-center gap-4">
							<button type="button" class="btn btn-sm variant-filled">sm</button>
							<button type="button" class="btn variant-filled">base</button>
							<button type="button" class="btn btn-lg variant-filled">lg</button>
							<button type="button" class="btn btn-xl variant-filled">xl</button>
						</div>
						<hr />
						<div class="flex justify-center items-center gap-4">
							<button type="button" class="btn-icon btn-icon-sm variant-filled">
								<i class="fa-solid fa-skull" />
							</button>
							<button type="button" class="btn-icon variant-filled">
								<i class="fa-solid fa-skull" />
							</button>
							<button type="button" class="btn-icon btn-icon-lg variant-filled">
								<i class="fa-solid fa-skull" />
							</button>
							<button type="button" class="btn-icon btn-icon-xl variant-filled">
								<i class="fa-solid fa-skull" />
							</button>
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<button type="button" class="btn btn-sm variant-filled">sm</button>
<button type="button" class="btn variant-filled">base</button>
<button type="button" class="btn btn-lg variant-filled">lg</button>
<button type="button" class="btn btn-xl variant-filled">xl</button>
`}
					/>
					<CodeBlock
						language="html"
						code={`
<button type="button" class="btn-icon btn-icon-sm variant-filled">(icon)</button>
<button type="button" class="btn-icon variant-filled">(icon)</button>
<button type="button" class="btn-icon btn-icon-lg variant-filled">(icon)</button>
<button type="button" class="btn-icon btn-icon-xl variant-filled">(icon)</button>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Button Groups</h2>
			<p>Groups related anchors or buttons. Pairs with any variant style. Horizontal and vertical options are provided.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="btn-group variant-filled">
						<button>Months</button>
						<button>Days</button>
						<button>Years</button>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<div class="btn-group variant-filled">
	<button>Months</button>
	<button>Days</button>
	<button>Years</button>
</div>
`}
					/>
					<!-- prettier-ignore -->
					<p>Customize the vertical dividers using <a class="anchor" href="https://tailwindcss.com/blog/tailwindcss-v3-1#arbitrary-values-but-for-variants" target="_blank" rel="noreferrer">Tailwind's arbitrary variant syntax</a>.</p>
					<CodeBlock language="html" code={`<div class="btn-group variant-ghost-primary [&>*+*]:border-red-500">...</div>`} />
				</svelte:fragment>
			</DocsPreview>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="btn-group-vertical variant-filled">
						<button>Months</button>
						<button>Days</button>
						<button>Years</button>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<div class="btn-group-vertical variant-filled">
	<button>Months</button>
	<button>Days</button>
	<button>Years</button>
</div>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">SvelteKit Link Options</h2>
			<!-- prettier-ignore -->
			<p>
				While using native anchor elements, you can take advantage of <a class="anchor" href="https://kit.svelte.dev/docs/link-options" target="_blank" rel="noreferrer">SvelteKit's Link Options</a> such as a <em>prefetch</em>.
			</p>
			<CodeBlock language="html" code={`<a href="/" class="btn variant-filled" data-sveltekit-preload-data="hover">Button</a>`} />
		</section>
	</svelte:fragment>
</DocsShell>
