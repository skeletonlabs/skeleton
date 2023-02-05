<script lang="ts">
	// Docs
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';
	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Buttons',
		description: 'Provides a robust set of button styles, including preset variants.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/buttons'],
		source: 'styles/elements/buttons.css',
		classes: [
			['<code>.btn</code>', '-', 'Creates a text button using a button or anchor.'],
			['<code>.btn-icon</code>', '-', 'Creates a text icon button using a button or anchor.'],
			['<code>.btn-[value]</code>', 'sm | base | lg | xl', 'Canned button sizes that define padding and text sizes.'],
			['<code>.btn-icon-[value]</code>', 'sm | base | lg | xl', 'Canned icon button sizes that define padding and text sizes.']
		]
	};

	// Local:
	const href = '/elements/buttons';

	// Reactive
	$: props = {
		tag: 'button',
		variant: 'variant-filled-primary',
		size: 'btn-base',
		disabled: false
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-2">
			<!-- Example -->
			<div class="card grid grid-rows-[1fr_auto]">
				<div class="p-4 flex justify-center items-center">
					<svelte:element this={props.tag} class="btn {props.size} {props.variant}" disabled={props.disabled}>
						<i class="fa-solid fa-skull" />
						<span>Skeleton</span>
					</svelte:element>
				</div>
			</div>
			<!-- Options -->
			<div class="card p-4 space-y-4">
				<!-- Tag -->
				<label class="label" for="">
					<RadioGroup display="flex">
						<RadioItem bind:group={props.tag} name="tag-button" value="button">Button</RadioItem>
						<RadioItem bind:group={props.tag} name="tag-anchor" value="a">Anchor</RadioItem>
					</RadioGroup>
				</label>
				<!-- Size -->
				<label class="label" for="">
					<span>Size</span>
					<RadioGroup display="flex">
						<RadioItem bind:group={props.size} name="btn-sm" value="btn-sm">sm</RadioItem>
						<RadioItem bind:group={props.size} name="btn-base" value="btn-base">base</RadioItem>
						<RadioItem bind:group={props.size} name="btn-lg" value="btn-lg">lg</RadioItem>
						<RadioItem bind:group={props.size} name="btn-xl" value="btn-xl">xl</RadioItem>
					</RadioGroup>
				</label>
				<!-- Variant -->
				<label class="label">
					<span>Variant</span>
					<select class="select" name="variant" id="variant" bind:value={props.variant}>
						<option value={undefined}>None</option>
						<!-- Filled -->
						<option value="variant-filled-primary">variant-filled-primary</option>
						<option value="variant-filled-secondary">variant-filled-secondary</option>
						<option value="variant-filled-tertiary">variant-filled-tertiary</option>
						<option value="variant-filled-success">variant-filled-success</option>
						<option value="variant-filled-warning">variant-filled-warning</option>
						<option value="variant-filled-error">variant-filled-error</option>
						<option value="variant-filled-surface">variant-filled-surface</option>
						<!-- Ringed -->
						<option value="variant-ringed-primary">variant-ringed-primary</option>
						<option value="variant-ringed-secondary">variant-ringed-secondary</option>
						<option value="variant-ringed-tertiary">variant-ringed-tertiary</option>
						<option value="variant-ringed-success">variant-ringed-success</option>
						<option value="variant-ringed-warning">variant-ringed-warning</option>
						<option value="variant-ringed-error">variant-ringed-error</option>
						<option value="variant-ringed-surface">variant-ringed-surface</option>
						<!-- Ghost -->
						<option value="variant-ghost-primary">variant-ghost-primary</option>
						<option value="variant-ghost-secondary">variant-ghost-secondary</option>
						<option value="variant-ghost-tertiary">variant-ghost-tertiary</option>
						<option value="variant-ghost-success">variant-ghost-success</option>
						<option value="variant-ghost-warning">variant-ghost-warning</option>
						<option value="variant-ghost-error">variant-ghost-error</option>
						<option value="variant-ghost-surface">variant-ghost-surface</option>
					</select>
				</label>
				<!-- Disabled -->
				<label class="label" for="">
					<span>Disabled</span>
					<RadioGroup display="flex">
						<RadioItem bind:group={props.disabled} name="enabled" value={false}>Enabled</RadioItem>
						<RadioItem bind:group={props.disabled} name="disabled" value={true}>Disabled</RadioItem>
					</RadioGroup>
				</label>
			</div>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Buttons -->
		<div class="space-y-4">
			<p>Add the <code>.btn</code> class to any button or anchor to create a button with minimal styling.</p>
			<CodeBlock language="html" code={`<button class="btn">Button</button>\n<a href="/" class="btn">Anchor</a>`} />
			<div class="card p-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
				<button class="btn">Button</button>
				<a {href} class="btn">Anchor</a>
			</div>
		</div>
		<!-- Icon Buttons -->
		<div class="space-y-4">
			<h2>Icon Buttons</h2>
			<p>Add the <code>.btn-icon</code> class to any button or anchor to create a icon button with minimal styling.</p>
			<CodeBlock language="html" code={`<button class="btn-icon">B</button>\n<a href="/" class="btn-icon">A</a>`} />
			<div class="card p-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
				<button class="btn-icon">B</button>
				<a {href} class="btn-icon">A</a>
			</div>
		</div>
		<!-- Icons -->
		<div class="space-y-4">
			<h2>Leading and Trailing Icons</h2>
			<p>
				By default, buttons use <code>flex-row</code> and <code>space-x-4</code> to create an evenly spaced row. Wrap children with
				<em>span</em> tags to ensure spacing works as expected.
			</p>
			<CodeBlock
				language="html"
				code={`<button class="btn bg-primary-500">\n\t<span>(icon)</span>\n\t<span>Skeleton</span>\n\t<span>(icon)</span>\n</button>`}
			/>
			<div class="card p-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
				<button class="btn variant-filled-primary">
					<span>💀</span>
					<span>Skeleton</span>
					<span>🦴</span>
				</button>
			</div>
		</div>
		<!-- Variants -->
		<div class="space-y-4">
			<h2>Variants</h2>
			<p>Supports all standard variant styles via <code>.variant-[style]-[color]</code>.</p>
			<CodeBlock language="html" code={`<button class="btn variant-filled-primary">Skeleton</button>`} />
			<div class="card p-4 grid grid-cols-1 md:grid-cols-5 gap-4">
				<!-- filled -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Filled</p>
					<button class="btn variant-filled-primary">primary</button>
					<button class="btn variant-filled-secondary">secondary</button>
					<button class="btn variant-filled-tertiary">tertiary</button>
					<button class="btn variant-filled-success">success</button>
					<button class="btn variant-filled-warning">warning</button>
					<button class="btn variant-filled-error">error</button>
					<button class="btn variant-filled-surface">surface</button>
				</div>
				<!-- soft -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Soft</p>
					<button class="btn variant-soft-primary">primary</button>
					<button class="btn variant-soft-secondary">secondary</button>
					<button class="btn variant-soft-tertiary">tertiary</button>
					<button class="btn variant-soft-success">success</button>
					<button class="btn variant-soft-warning">warning</button>
					<button class="btn variant-soft-error">error</button>
					<button class="btn variant-soft-surface">surface</button>
				</div>
				<!-- ringed -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Ringed</p>
					<button class="btn variant-ringed-primary">primary</button>
					<button class="btn variant-ringed-secondary">secondary</button>
					<button class="btn variant-ringed-tertiary">tertiary</button>
					<button class="btn variant-ringed-success">success</button>
					<button class="btn variant-ringed-warning">warning</button>
					<button class="btn variant-ringed-error">error</button>
					<button class="btn variant-ringed-surface">surface</button>
				</div>
				<!-- ghost -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Ghost</p>
					<button class="btn variant-ghost-primary">primary</button>
					<button class="btn variant-ghost-secondary">secondary</button>
					<button class="btn variant-ghost-tertiary">tertiary</button>
					<button class="btn variant-ghost-success">success</button>
					<button class="btn variant-ghost-warning">warning</button>
					<button class="btn variant-ghost-error">error</button>
					<button class="btn variant-ghost-surface">surface</button>
				</div>
				<!-- glass -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Glass</p>
					<button class="btn variant-glass-primary">primary</button>
					<button class="btn variant-glass-secondary">secondary</button>
					<button class="btn variant-glass-tertiary">tertiary</button>
					<button class="btn variant-glass-success">success</button>
					<button class="btn variant-glass-warning">warning</button>
					<button class="btn variant-glass-error">error</button>
					<button class="btn variant-glass-surface">surface</button>
				</div>
			</div>
			<CodeBlock language="html" code={`<button class="btn-icon variant-filled-primary">(icon)</button>`} />
			<div class="card p-4 grid grid-cols-1 md:grid-cols-5 gap-4">
				<!-- filled -->
				<div class="grid grid-cols-1 gap-4 place-self-center text-center text-xs font-bold">
					<p>Filled</p>
					<button class="btn-icon variant-filled-primary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-filled-secondary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-filled-tertiary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-filled-success"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-filled-warning"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-filled-error"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-filled-surface"><i class="fa-solid fa-skull" /></button>
				</div>
				<!-- soft -->
				<div class="grid grid-cols-1 gap-4 place-self-center text-center text-xs font-bold">
					<p>Soft</p>
					<button class="btn-icon variant-soft-primary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-soft-secondary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-soft-tertiary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-soft-success"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-soft-warning"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-soft-error"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-soft-surface"><i class="fa-solid fa-skull" /></button>
				</div>
				<!-- ringed -->
				<div class="grid grid-cols-1 gap-4 place-self-center text-center text-xs font-bold">
					<p>Ringed</p>
					<button class="btn-icon variant-ringed-primary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-ringed-secondary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-ringed-tertiary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-ringed-success"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-ringed-warning"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-ringed-error"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-ringed-surface"><i class="fa-solid fa-skull" /></button>
				</div>
				<!-- ghost -->
				<div class="grid grid-cols-1 gap-4 place-self-center text-center text-xs font-bold">
					<p>Ghost</p>
					<button class="btn-icon variant-ghost-primary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-ghost-secondary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-ghost-tertiary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-ghost-success"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-ghost-warning"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-ghost-error"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-ghost-surface"><i class="fa-solid fa-skull" /></button>
				</div>
				<!-- glass -->
				<div class="grid grid-cols-1 gap-4 place-self-center text-center text-xs font-bold">
					<p>Glass</p>
					<button class="btn-icon variant-glass-primary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-glass-secondary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-glass-tertiary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-glass-success"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-glass-warning"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-glass-error"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon variant-glass-surface"><i class="fa-solid fa-skull" /></button>
				</div>
			</div>
		</div>
		<!-- Button Groups -->
		<section class="space-y-4">
			<h2>Button Groups</h2>
			<p>Creates a set of related buttons. Acccepts <em>buttons</em> or <em>anchors</em> and pairs with any variant style.</p>
			<CodeBlock
				language="html"
				code={`
<div class="btn-group variant-filled-primary">
	<button>Months</button>
	<button>Days</button>
	<button>Years</button>
</div>
			`}
			/>
			<div class="card p-4 grid grid-cols-1 xl:grid-cols-3 gap-4 place-items-center">
				<div>
					<div class="btn-group variant-filled-primary">
						<button>Months</button>
						<button>Days</button>
						<button>Years</button>
					</div>
				</div>
				<div>
					<div class="btn-group variant-ghost-secondary">
						<button>Months</button>
						<button>Days</button>
						<button>Years</button>
					</div>
				</div>
				<div>
					<div class="btn-group variant-ringed-tertiary">
						<button>Months</button>
						<button>Days</button>
						<button>Years</button>
					</div>
				</div>
			</div>
			<!-- prettier-ignore -->
			<p>A neutral divider color is provided by default, but you can use the <a href="https://tailwindcss.com/blog/tailwindcss-v3-1#arbitrary-values-but-for-variants" target="_blank" rel="noreferrer">Tailwind's abitrary variant syntax</a> to adjust this as desired.</p>
			<CodeBlock language="html" code={`<div class="btn-group variant-ghost-primary [&>*+*]:border-primary-900">...</div>`} />
			<div class="card p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
				<div class="text-center space-y-2">
					<code>[&>*+*]:border-red-500</code><br />
					<div class="btn-group variant-ghost-primary [&>*+*]:border-red-500">
						<button>Months</button>
						<button>Days</button>
						<button>Years</button>
					</div>
				</div>
				<div class="text-center space-y-2">
					<code>[&>*+*]:border-primary-500</code><br />
					<div class="btn-group variant-ghost-primary [&>*+*]:border-primary-500">
						<button>Months</button>
						<button>Days</button>
						<button>Years</button>
					</div>
				</div>
			</div>
			<p>
				Use the <code>.btn-group-vertical</code> class to set a vertical button group. This can be paired with Tailwind's responsive breakpoints.
			</p>
			<CodeBlock language="html" code={`<div class="btn-group-vertical variant-filled-primary">...</div>`} />
			<div class="card p-4 text-center">
				<div class="btn-group-vertical variant-filled-primary">
					<button>Months</button>
					<button>Days</button>
					<button>Years</button>
				</div>
			</div>
		</section>
		<!-- SvelteKit Link Options -->
		<div class="space-y-4">
			<h2>SvelteKit Link Options</h2>
			<p>
				Since Skeleton uses native button elements, this means you can utilize <a
					href="https://kit.svelte.dev/docs/link-options"
					target="_blank"
					rel="noreferrer">SvelteKit Link Options</a
				>
				such as a
				<em>prefetch</em>.
			</p>
			<CodeBlock language="html" code={`<a href="/" class="btn" data-sveltekit-preload-data="hover">Skeleton</a>`} />
		</div>
	</svelte:fragment>
</DocsShell>
