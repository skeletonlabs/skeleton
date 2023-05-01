<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Variants',
		description: 'Canned styles available to easily customize elements, components, and more.',
		source: 'tailwind/tokens'
	};
</script>

<DocsShell {settings} tabs={false}>
	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<hr />
		<section class="space-y-4">
			<h2 class="h2">Usage</h2>
			<p>Implement using <code class="code">.variant-[style]-[color]</code>. Automatically applies an accessible text or SVG fill color.</p>
			<CodeBlock language="html" code={`<div class="variant-filled-primary">primary</div>`} />
		</section>
		<!-- Filled -->
		<section class="space-y-4">
			<h2 class="h2">Filled</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold">
						<div class="card variant-filled-primary p-4 capitalize">primary</div>
						<div class="card variant-filled-secondary p-4 capitalize">secondary</div>
						<div class="card variant-filled-tertiary p-4 capitalize">tertiary</div>
						<div class="card variant-filled-success p-4 capitalize">success</div>
						<div class="card variant-filled-warning p-4 capitalize">warning</div>
						<div class="card variant-filled-error p-4 capitalize">error</div>
						<div class="col-span-3 card variant-filled-surface p-4 capitalize">surface</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<div class="variant-filled-primary">primary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-filled-secondary">secondary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-filled-tertiary">tertiary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-filled-success">success</div>`} />
					<CodeBlock language="html" code={`<div class="variant-filled-warning">warning</div>`} />
					<CodeBlock language="html" code={`<div class="variant-filled-error">error</div>`} />
					<CodeBlock language="html" code={`<div class="variant-filled-surface">surface</div>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Ghost -->
		<section class="space-y-4">
			<h2 class="h2">Ghost</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold">
						<div class="card variant-ghost-primary p-4 capitalize">primary</div>
						<div class="card variant-ghost-secondary p-4 capitalize">secondary</div>
						<div class="card variant-ghost-tertiary p-4 capitalize">tertiary</div>
						<div class="card variant-ghost-success p-4 capitalize">success</div>
						<div class="card variant-ghost-warning p-4 capitalize">warning</div>
						<div class="card variant-ghost-error p-4 capitalize">error</div>
						<div class="col-span-3 card variant-ghost-surface p-4 capitalize">surface</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<div class="variant-ghost-primary">primary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ghost-secondary">secondary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ghost-tertiary">tertiary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ghost-success">success</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ghost-warning">warning</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ghost-error">error</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ghost-surface">surface</div>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Soft -->
		<section class="space-y-4">
			<h2 class="h2">Soft</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold">
						<div class="card variant-soft-primary p-4 capitalize">primary</div>
						<div class="card variant-soft-secondary p-4 capitalize">secondary</div>
						<div class="card variant-soft-tertiary p-4 capitalize">tertiary</div>
						<div class="card variant-soft-success p-4 capitalize">success</div>
						<div class="card variant-soft-warning p-4 capitalize">warning</div>
						<div class="card variant-soft-error p-4 capitalize">error</div>
						<div class="col-span-3 card variant-soft-surface p-4 capitalize">surface</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<div class="variant-soft-primary">primary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-soft-secondary">secondary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-soft-tertiary">tertiary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-soft-success">success</div>`} />
					<CodeBlock language="html" code={`<div class="variant-soft-warning">warning</div>`} />
					<CodeBlock language="html" code={`<div class="variant-soft-error">error</div>`} />
					<CodeBlock language="html" code={`<div class="variant-soft-surface">surface</div>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Ringed -->
		<section class="space-y-4">
			<h2 class="h2">Ringed</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold">
						<div class="card variant-ringed-primary p-4 capitalize">primary</div>
						<div class="card variant-ringed-secondary p-4 capitalize">secondary</div>
						<div class="card variant-ringed-tertiary p-4 capitalize">tertiary</div>
						<div class="card variant-ringed-success p-4 capitalize">success</div>
						<div class="card variant-ringed-warning p-4 capitalize">warning</div>
						<div class="card variant-ringed-error p-4 capitalize">error</div>
						<div class="col-span-3 card variant-ringed-surface p-4 capitalize">surface</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<div class="variant-ringed-primary">primary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ringed-secondary">secondary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ringed-tertiary">tertiary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ringed-success">success</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ringed-warning">warning</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ringed-error">error</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ringed-surface">surface</div>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Glass -->
		<section class="space-y-4">
			<h2 class="h2">Glass</h2>
			<p>Adds a frosted glass style effect. Perfect for overlapping busy or animated backgrounds.</p>
			<DocsPreview background="neutral" regionViewport="!p-0">
				<svelte:fragment slot="preview">
					<div
						class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold p-4 md:p-10 text-white"
						style="background: url('https://i.imgur.com/DdrZVb7.gif') center center no-repeat; background-size: cover;"
					>
						<div class="card variant-glass-primary p-4 capitalize">primary</div>
						<div class="card variant-glass-secondary p-4 capitalize">secondary</div>
						<div class="card variant-glass-tertiary p-4 capitalize">tertiary</div>
						<div class="card variant-glass-success p-4 capitalize">success</div>
						<div class="card variant-glass-warning p-4 capitalize">warning</div>
						<div class="card variant-glass-error p-4 capitalize">error</div>
						<div class="col-span-3 card variant-glass-surface p-4 capitalize">surface</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="text-center">
						<a class="btn btn-sm variant-soft" href="http://www.markferrari.com/" target="_blank" rel="noreferrer"> Image Source </a>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<div class="variant-glass-primary">primary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-glass-secondary">secondary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-glass-tertiary">tertiary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-glass-success">success</div>`} />
					<CodeBlock language="html" code={`<div class="variant-glass-warning">warning</div>`} />
					<CodeBlock language="html" code={`<div class="variant-glass-error">error</div>`} />
					<CodeBlock language="html" code={`<div class="variant-glass-surface">surface</div>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Gradients -->
		<section class="space-y-4">
			<h2 class="h2">Gradients</h2>
			<p>
				Provides two-toned gradient combinations. Requires a direction, such as <code class="code">bg-gradient-to-br</code> (bottom-right).
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
						<!-- Core Trio -->
						<div class="card bg-gradient-to-br variant-gradient-primary-secondary px-4 py-10 text-center">
							<span class="badge variant-filled">Primary-Secondary</span>
						</div>
						<div class="card bg-gradient-to-br variant-gradient-secondary-tertiary px-4 py-10 text-center">
							<span class="badge variant-filled">Secondary-Tertiary</span>
						</div>
						<div class="card bg-gradient-to-br variant-gradient-tertiary-primary px-4 py-10 text-center">
							<span class="badge variant-filled">Tertiary-Primary</span>
						</div>
						<!-- Core Trio (reversed) -->
						<div class="card bg-gradient-to-br variant-gradient-secondary-primary px-4 py-10 text-center">
							<span class="badge variant-filled">Secondary-Primary</span>
						</div>
						<div class="card bg-gradient-to-br variant-gradient-tertiary-secondary px-4 py-10 text-center">
							<span class="badge variant-filled">Tertiary-Secondary</span>
						</div>
						<div class="card bg-gradient-to-br variant-gradient-primary-tertiary px-4 py-10 text-center">
							<span class="badge variant-filled">Primary-Tertiary</span>
						</div>
						<!-- State Trio -->
						<div class="card bg-gradient-to-br variant-gradient-success-warning px-4 py-10 text-center">
							<span class="badge variant-filled">Success-Warning</span>
						</div>
						<div class="card bg-gradient-to-br variant-gradient-warning-error px-4 py-10 text-center">
							<span class="badge variant-filled">Warning-Error</span>
						</div>
						<div class="card bg-gradient-to-br variant-gradient-error-success px-4 py-10 text-center">
							<span class="badge variant-filled">Error-Success</span>
						</div>
						<!-- State Reversed -->
						<div class="card bg-gradient-to-br variant-gradient-warning-success px-4 py-10 text-center">
							<span class="badge variant-filled">Warning-Success</span>
						</div>
						<div class="card bg-gradient-to-br variant-gradient-error-warning px-4 py-10 text-center">
							<span class="badge variant-filled">Error-Warning</span>
						</div>
						<div class="card bg-gradient-to-br variant-gradient-success-error px-4 py-10 text-center">
							<span class="badge variant-filled">Success-Error</span>
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="text-center">
						For more options see the <a
							class="btn btn-sm variant-soft"
							href="https://tailwindcss.com/docs/gradient-color-stops"
							target="_blank"
							rel="noreferrer"
						>
							Tailwind Docs &rarr;
						</a>
					</div>
				</svelte:fragment>
				<!-- prettier-ignore -->
				<svelte:fragment slot="source">
					<p>Core Trio</p>
					<CodeBlock language="html" code={`<div class="bg-gradient-to-br variant-gradient-primary-secondary">Skeleton</div>`}/>
					<CodeBlock language="html" code={`<div class="bg-gradient-to-br variant-gradient-secondary-tertiary">Skeleton</div>`}/>
					<CodeBlock language="html" code={`<div class="bg-gradient-to-br variant-gradient-tertiary-primary">Skeleton</div>`}/>
					<p>Core Trio (reversed)</p>
					<CodeBlock language="html" code={`<div class="bg-gradient-to-br variant-gradient-secondary-primary">Skeleton</div>`}/>
					<CodeBlock language="html" code={`<div class="bg-gradient-to-br variant-gradient-tertiary-secondary">Skeleton</div>`}/>
					<CodeBlock language="html" code={`<div class="bg-gradient-to-br variant-gradient-primary-tertiary">Skeleton</div>`}/>
					<p>State Trio</p>
					<CodeBlock language="html" code={`<div class="bg-gradient-to-br variant-gradient-success-warning">Skeleton</div>`} />
					<CodeBlock language="html" code={`<div class="bg-gradient-to-br variant-gradient-warning-error">Skeleton</div>`} />
					<CodeBlock language="html" code={`<div class="bg-gradient-to-br variant-gradient-error-success">Skeleton</div>`} />
					<p>State Trio (reversed)</p>
					<CodeBlock language="html" code={`<div class="bg-gradient-to-br variant-gradient-warning-success">Skeleton</div>`} />
					<CodeBlock language="html" code={`<div class="bg-gradient-to-br variant-gradient-error-warning">Skeleton</div>`} />
					<CodeBlock language="html" code={`<div class="bg-gradient-to-br variant-gradient-success-error">Skeleton</div>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
