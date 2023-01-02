<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

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
			['<code>.btn-icon-[value]</code>', 'sm | base | lg | xl', 'Canned icon button sizes that define padding and text sizes.'],
			['<code>.btn-[variant]</code>', '(see usage)', 'A set of preset class styles for buttons or icon buttons.']
		]
	};

	// Local:
	const href = '/elements/buttons';

	// Stores
	const storeTag: Writable<string> = writable('button');
	const storeDisabled: Writable<boolean> = writable(false);
	const storeBtnSize: Writable<string> = writable('btn-base');

	// Reactive
	$: btnValues = {
		variant: 'btn-filled-primary',
		size: $storeBtnSize,
		ring: undefined,
		color: undefined
	};
	$: btnClases = Object.values(btnValues)
		.filter((x) => x !== undefined)
		.join(' ');
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-2">
			<!-- Example -->
			<div class="card grid grid-rows-[1fr_auto]">
				<div class="p-4 flex justify-center items-center">
					<!-- prettier-ignore -->
					<svelte:element this={$storeTag} class="btn {btnClases}" disabled={$storeDisabled}>
						<i class="fa-solid fa-skull" />
						<span>Skeleton</span>
					</svelte:element>
				</div>
				<div class="p-4">
					<CodeBlock
						language="html"
						code={`<` +
							$storeTag +
							($storeTag === 'a' ? ' href="/"' : '') +
							` class="btn ` +
							btnClases +
							`"` +
							($storeDisabled ? ' disabled' : '') +
							`>Skeleton</` +
							$storeTag +
							`>`}
					/>
				</div>
			</div>
			<!-- Options -->
			<div class="card p-4 space-y-4">
				<!-- Tag -->
				<label for="">
					<RadioGroup selected={storeTag} display="flex">
						<RadioItem value="button">Button</RadioItem>
						<RadioItem value="a">Anchor</RadioItem>
					</RadioGroup>
				</label>
				<!-- Size -->
				<label for="">
					<span>Size</span>
					<RadioGroup selected={storeBtnSize} display="flex">
						<RadioItem value="btn-sm">sm</RadioItem>
						<RadioItem value="btn-base">base</RadioItem>
						<RadioItem value="btn-lg">lg</RadioItem>
						<RadioItem value="btn-xl">xl</RadioItem>
					</RadioGroup>
				</label>
				<!-- Variant -->
				<label>
					<span>Variant</span>
					<select name="variant" id="variant" bind:value={btnValues.variant}>
						<option value={undefined}>None</option>
						<!-- Filled -->
						<option value="btn-filled-primary">btn-filled-primary</option>
						<option value="btn-filled-secondary">btn-filled-secondary</option>
						<option value="btn-filled-tertiary">btn-filled-tertiary</option>
						<option value="btn-filled-success">btn-filled-success</option>
						<option value="btn-filled-warning">btn-filled-warning</option>
						<option value="btn-filled-error">btn-filled-error</option>
						<option value="btn-filled-surface">btn-filled-surface</option>
						<!-- Ringed -->
						<option value="btn-ringed-primary">btn-ringed-primary</option>
						<option value="btn-ringed-secondary">btn-ringed-secondary</option>
						<option value="btn-ringed-tertiary">btn-ringed-tertiary</option>
						<option value="btn-ringed-success">btn-ringed-success</option>
						<option value="btn-ringed-warning">btn-ringed-warning</option>
						<option value="btn-ringed-error">btn-ringed-error</option>
						<option value="btn-ringed-surface">btn-ringed-surface</option>
						<!-- Ghost -->
						<option value="btn-ghost-primary">btn-ghost-primary</option>
						<option value="btn-ghost-secondary">btn-ghost-secondary</option>
						<option value="btn-ghost-tertiary">btn-ghost-tertiary</option>
						<option value="btn-ghost-success">btn-ghost-success</option>
						<option value="btn-ghost-warning">btn-ghost-warning</option>
						<option value="btn-ghost-error">btn-ghost-error</option>
						<option value="btn-ghost-surface">btn-ghost-surface</option>
					</select>
				</label>
				<!-- Ring -->
				<label>
					<span>Ring</span>
					<select name="ring" id="ring" bind:value={btnValues.ring}>
						<option value={undefined}>None</option>
						<option value="ring-2 ring-primary-500 ring-inset">ring-2 ring-primary-500 ring-inset</option>
						<option value="ring-2 ring-secondary-500 ring-inset">ring-2 ring-secondary-500 ring-inset</option>
						<option value="ring-2 ring-tertiary-500 ring-inset">ring-2 ring-tertiary-500 ring-inset</option>
						<option value="ring-2 ring-success-500 ring-inset">ring-2 ring-success-500 ring-inset</option>
						<option value="ring-2 ring-warning-500 ring-inset">ring-2 ring-warning-500 ring-inset</option>
						<option value="ring-2 ring-error-500 ring-inset">ring-2 ring-error-500 ring-inset</option>
						<option value="ring-2 ring-surface-500 ring-inset">ring-2 ring-surface-500 ring-inset</option>
					</select>
				</label>
				<!-- Color -->
				<label>
					<span>Color</span>
					<select name="color" id="color" bind:value={btnValues.color}>
						<option value={undefined}>Inherent</option>
						<option value="text-white">text-white</option>
						<option value="text-black">text-black</option>
						<option value="text-primary-500">text-primary-500</option>
						<option value="text-secondary-500">text-secondary-500</option>
						<option value="text-tertiary-500">text-tertiary-500</option>
						<option value="text-success-500">text-success-500</option>
						<option value="text-warning-500">text-warning-500</option>
						<option value="text-error-500">text-error-500</option>
						<option value="text-surface-500">text-surface-500</option>
					</select>
				</label>
				<!-- Disabled -->
				<label for="">
					<span>Disabled</span>
					<RadioGroup selected={storeDisabled} display="flex">
						<RadioItem value={false}>Enabled</RadioItem>
						<RadioItem value={true}>Disabled</RadioItem>
					</RadioGroup>
				</label>
			</div>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Buttons -->
		<div class="space-y-4">
			<h2>Standard Button</h2>
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
				<!-- FIXME: the :not() style isn't applying here so I supplemented `.unstyled` class. Browser bug perhaps? -CHRIS -->
				<a {href} class="btn-icon unstyled">A</a>
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
				code={`<button class="btn bg-primary-500">\n\t<span>💀</span>\n\t<span>Icons</span>\n\t<span>🦴</span>\n</button>`}
			/>
			<div class="card p-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
				<button class="btn btn-filled-primary">
					<span>💀</span>
					<span>Icons</span>
					<span>🦴</span>
				</button>
			</div>
		</div>
		<!-- Variants -->
		<div class="space-y-4">
			<h2>Variants</h2>
			<p>A set of canned preset styles are available using <code>.btn-[variant]</code>. This works for both standard and icon buttons.</p>
			<CodeBlock language="html" code={`<button class="btn btn-filled-primary">filled-primary</button>`} />
			<div class="card p-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
				<!-- Filled -->
				<div class="grid grid-cols-1 gap-4">
					<button class="btn btn-filled">filled</button>
					<button class="btn btn-filled-primary">filled-primary</button>
					<button class="btn btn-filled-secondary">filled-secondary</button>
					<button class="btn btn-filled-tertiary">filled-tertiary</button>
					<button class="btn btn-filled-success">filled-success</button>
					<button class="btn btn-filled-warning">filled-warning</button>
					<button class="btn btn-filled-error">filled-error</button>
					<button class="btn btn-filled-surface">filled-surface</button>
				</div>
				<!-- Ringed -->
				<div class="grid grid-cols-1 gap-4">
					<button class="btn btn-ringed">ringed</button>
					<button class="btn btn-ringed-primary">ringed-primary</button>
					<button class="btn btn-ringed-secondary">ringed-secondary</button>
					<button class="btn btn-ringed-tertiary">ringed-tertiary</button>
					<button class="btn btn-ringed-success">ringed-success</button>
					<button class="btn btn-ringed-warning">ringed-warning</button>
					<button class="btn btn-ringed-error">ringed-error</button>
					<button class="btn btn-ringed-surface">ringed-surface</button>
				</div>
				<!-- Ringed -->
				<div class="grid grid-cols-1 gap-4">
					<button class="btn btn-ghost">ghost</button>
					<button class="btn btn-ghost-primary">ghost-primary</button>
					<button class="btn btn-ghost-secondary">ghost-secondary</button>
					<button class="btn btn-ghost-tertiary">ghost-tertiary</button>
					<button class="btn btn-ghost-success">ghost-success</button>
					<button class="btn btn-ghost-warning">ghost-warning</button>
					<button class="btn btn-ghost-error">ghost-error</button>
					<button class="btn btn-ghost-surface">ghost-surface</button>
				</div>
			</div>
			<CodeBlock language="html" code={`<button class="btn-icon btn-filled-primary">💀</button>`} />
			<div class="card p-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
				<!-- Text -->
				<div class="grid grid-cols-1 gap-4">
					<button class="btn-icon btn-filled"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-filled-primary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-filled-secondary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-filled-tertiary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-filled-success"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-filled-warning"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-filled-error"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-filled-surface"><i class="fa-solid fa-skull" /></button>
				</div>
				<!-- Ringed -->
				<div class="grid grid-cols-1 gap-4">
					<button class="btn-icon btn-ringed"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-ringed-primary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-ringed-secondary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-ringed-tertiary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-ringed-success"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-ringed-warning"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-ringed-error"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-ringed-surface"><i class="fa-solid fa-skull" /></button>
				</div>
				<!-- Ringed -->
				<div class="grid grid-cols-1 gap-4">
					<button class="btn-icon btn-ghost"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-ghost-primary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-ghost-secondary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-ghost-tertiary"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-ghost-success"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-ghost-warning"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-ghost-error"><i class="fa-solid fa-skull" /></button>
					<button class="btn-icon btn-ghost-surface"><i class="fa-solid fa-skull" /></button>
				</div>
			</div>
		</div>
		<!-- SvelteKit Link Options -->
		<div class="space-y-4">
			<h2>SvelteKit Link Options</h2>
			<p>
				Since we use native elements, this means we can utilize <a
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
