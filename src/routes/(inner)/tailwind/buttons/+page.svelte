<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	// Components
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';

	// Local:
	const href: string = '/tailwind/buttons';

	// Stores
	const storeTag: Writable<string> = writable('button');
	const storeDisabled: Writable<boolean> = writable(false);
	const storeBtnSize: Writable<string> = writable('btn-base');

	// Reactive
	$: btnValues = {
		background: 'bg-primary-500',
		size: $storeBtnSize,
		ring: undefined,
		color: 'text-white'
	};
	$: btnClases = Object.values(btnValues)
		.filter((x) => x !== undefined)
		.join(' ');

	// Tables
	const tableClasses: any = {
		headings: ['Class', 'Values', 'Description'],
		source: [
			['<code>.btn</code>', '-', 'Creates a text button using a button or anchor.'],
			['<code>.btn-icon</code>', '-', 'Creates a text icon button using a button or anchor.'],
			['<code>.btn-[size]</code>', 'sm | base | lg | xl', 'Canned button sizes that define padding and text sizes.'],
			['<code>.btn-icon-[size]</code>', 'sm | base | lg | xl', 'Canned icon button sizes that define padding and text sizes.'],
			['<code>.btn-[variant]</code>', 'filled-primary | ghost | etc.', 'A set of preset class styles for buttons or icon buttons.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Buttons</h1>
		<p>Automatically included in <code>all.css</code> and <code>elements.css</code>. This <a href="/guides/styling">stylesheet</a> provides a robust set of button styles.</p>
		<CodeBlock language="ts" code={`import '@brainandbones/skeleton/styles/elements/buttons.css';`} />
	</header>

	<!-- Sandbox -->
	<section class="space-y-4">
		<div class="grid grid-cols-1 xl:grid-cols-[1fr_480px] gap-2">
			<!-- Example -->
			<div class="card card-body h-full flex justify-center items-center">
				<!-- prettier-ignore -->
				<svelte:element this={$storeTag} class="btn {btnClases}" disabled={$storeDisabled}>
                    <span>💀</span>
                    <span>Skeleton</span>
                </svelte:element>
			</div>
			<!-- Options -->
			<div class="card card-body space-y-4">
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
						<RadioItem value="btn-sm">btn-sm</RadioItem>
						<RadioItem value="btn-base">btn-base</RadioItem>
						<RadioItem value="btn-lg">btn-lg</RadioItem>
						<RadioItem value="btn-xl">btn-xl</RadioItem>
					</RadioGroup>
				</label>
				<!-- Background -->
				<label>
					<span>Background</span>
					<select name="background" id="background" bind:value={btnValues.background}>
						<option value={undefined}>None</option>
						<option value="bg-primary-500">bg-primary-500</option>
						<option value="bg-accent-500">bg-accent-500</option>
						<option value="bg-warning-500">bg-warning-500</option>
						<option value="bg-surface-500">bg-surface-500</option>
						<option value="bg-primary-500/30">bg-primary-500/30</option>
						<option value="bg-accent-500/30">bg-accent-500/30</option>
						<option value="bg-warning-500/30">bg-warning-500/30</option>
						<option value="bg-surface-500/30">bg-surface-500/30</option>
					</select>
				</label>
				<!-- Ring -->
				<label>
					<span>Ring</span>
					<select name="ring" id="ring" bind:value={btnValues.ring}>
						<option value={undefined}>None</option>
						<option value="ring-2 ring-primary-500 ring-inset">ring-2 ring-primary-500 ring-inset</option>
						<option value="ring-2 ring-accent-500 ring-inset">ring-2 ring-accent-500 ring-inset</option>
						<option value="ring-2 ring-warning-500 ring-inset">ring-2 ring-warning-500 ring-inset</option>
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
						<option value="text-accent-500">text-accent-500</option>
						<option value="text-warning-500">text-warning-500</option>
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
		<CodeBlock
			language="html"
			code={`<` + $storeTag + ($storeTag === 'a' ? ' href="/"' : '') + ` class="btn ` + btnClases + `"` + ($storeDisabled ? ' disabled' : '') + `>Skeleton</` + $storeTag + `>`}
		/>
	</section>

	<!-- Usage -->
	<section class="space-y-8">
		<div>
			<h2>Usage</h2>
		</div>
		<!-- Buttons -->
		<div class="space-y-4">
			<h4>Button</h4>
			<p>Add the <code>.btn</code> class to any button or anchor to create a button with minimal styling.</p>
			<CodeBlock language="html" code={`<button class="btn">Button</button>`} />
			<CodeBlock language="html" code={`<a href="/" class="btn">Anchor</a>`} />
			<div class="card card-body flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
				<button class="btn">Button</button>
				<a {href} class="btn">Anchor</a>
			</div>
		</div>
		<!-- Icon Buttons -->
		<div class="space-y-4">
			<h4>Icon Buttons</h4>
			<p>Add the <code>.btn-icon</code> class to any button or anchor to create a icon button with minimal styling.</p>
			<CodeBlock language="html" code={`<button class="btn-icon">B</button>`} />
			<CodeBlock language="html" code={`<a href="/" class="btn-icon">A</a>`} />
			<div class="card card-body flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
				<button class="btn-icon">B</button>
				<!-- FIXME: the :not() style isn't applying here so I supplemented `.unstyled` class. Browser bug perhaps? -CHRIS -->
				<a {href} class="btn-icon unstyled">A</a>
			</div>
		</div>
		<!-- Styling -->
		<div class="space-y-4">
			<h4>Styling</h4>
			<p>Use Tailwind utilty classes to enhance the button styling.</p>
			<CodeBlock language="html" code={`<button class="btn bg-primary-500">Skeleton</button>`} />
			<div class="card card-body flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
				<button class="btn bg-primary-500">Skeleton</button>
				<button class="btn bg-accent-500">Skeleton</button>
				<button class="btn bg-warning-500">Skeleton</button>
			</div>
		</div>
		<!-- Sizes -->
		<div class="space-y-4">
			<h4>Sizes</h4>
			<p>Adjust the button size with <code>.btn-[sm|base|lg|xl]</code>. Sizing is controlled using <em>text size and padding</em>.</p>
			<CodeBlock language="html" code={`<button class="btn btn-lg bg-primary-500">Large</button>`} />
			<div class="card card-body flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
				<button class="btn btn-sm bg-primary-500">sm</button>
				<button class="btn btn-base bg-primary-500">base</button>
				<button class="btn btn-lg bg-primary-500">lg</button>
				<button class="btn btn-xl bg-primary-500">xl</button>
			</div>
			<p>Adjust the icon button size with <code>.btn-icon-[sm|base|lg|xl]</code>. Sizing is controlled using <em>text size, aspect square, and width</em>.</p>
			<CodeBlock language="html" code={`<button class="btn-icon btn-icon-lg bg-primary-500">lg</button>`} />
			<div class="card card-body flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
				<button class="btn-icon btn-icon-sm bg-primary-500">sm</button>
				<button class="btn-icon btn-icon-base bg-primary-500">b</button>
				<button class="btn-icon btn-icon-lg bg-primary-500">lg</button>
				<button class="btn-icon btn-icon-xl bg-primary-500">xl</button>
			</div>
		</div>
		<!-- Icons -->
		<div class="space-y-4">
			<h4>Leading and Trailing Icons</h4>
			<p>By default, buttons use <code>flex-row</code> and <code>space-x-4</code> to create an evenly spaced row. Wrap children with <em>span</em> tags to ensure spacing works as expected.</p>
			<CodeBlock language="html" code={`<button class="btn bg-primary-500">\n\t<span>💀</span>\n\t<span>Icons</span>\n\t<span>🦴</span>\n</button>`} />
			<div class="card card-body flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
				<button class="btn bg-primary-500">
					<span>💀</span>
					<span>Icons</span>
					<span>🦴</span>
				</button>
			</div>
		</div>
		<!-- Variants -->
		<div class="space-y-4">
			<h4>Variants</h4>
			<p>A set of canned preset styles are available using <code>.btn-[variant]</code>. This works for both standard and icon buttons.</p>
			<CodeBlock language="html" code={`<button class="btn btn-filled-primary">filled-primary</button>`} />
			<div class="card card-body flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
				<!-- Filled -->
				<div class="grid grid-cols-1 gap-4">
					<button class="btn btn-filled">filled</button>
					<button class="btn btn-filled-primary">filled-primary</button>
					<button class="btn btn-filled-accent">filled-accent</button>
					<button class="btn btn-filled-warning">filled-warning</button>
					<button class="btn btn-filled-surface">filled-surface</button>
				</div>
				<!-- Ringed -->
				<div class="grid grid-cols-1 gap-4">
					<button class="btn btn-ringed">ringed</button>
					<button class="btn btn-ringed-primary">ringed-primary</button>
					<button class="btn btn-ringed-accent">ringed-accent</button>
					<button class="btn btn-ringed-warning">ringed-warning</button>
					<button class="btn btn-ringed-surface">ringed-surface</button>
				</div>
				<!-- Ringed -->
				<div class="grid grid-cols-1 gap-4">
					<button class="btn btn-ghost">ghost</button>
					<button class="btn btn-ghost-primary">ghost-primary</button>
					<button class="btn btn-ghost-accent">ghost-accent</button>
					<button class="btn btn-ghost-warning">ghost-warning</button>
					<button class="btn btn-ghost-surface">ghost-surface</button>
				</div>
			</div>
			<CodeBlock language="html" code={`<button class="btn-icon btn-filled-primary">&hearts;</button>`} />
			<div class="card card-body flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
				<!-- Text -->
				<div class="grid grid-cols-1 gap-4">
					<button class="btn-icon btn-filled">&hearts;</button>
					<button class="btn-icon btn-filled-primary">&hearts;</button>
					<button class="btn-icon btn-filled-accent">&hearts;</button>
					<button class="btn-icon btn-filled-warning">&hearts;</button>
					<button class="btn-icon btn-filled-surface">&hearts;</button>
				</div>
				<!-- Ringed -->
				<div class="grid grid-cols-1 gap-4">
					<button class="btn-icon btn-ringed">&hearts;</button>
					<button class="btn-icon btn-ringed-primary">&hearts;</button>
					<button class="btn-icon btn-ringed-accent">&hearts;</button>
					<button class="btn-icon btn-ringed-warning">&hearts;</button>
					<button class="btn-icon btn-ringed-surface">&hearts;</button>
				</div>
				<!-- Ringed -->
				<div class="grid grid-cols-1 gap-4">
					<button class="btn-icon btn-ghost">&hearts;</button>
					<button class="btn-icon btn-ghost-primary">&hearts;</button>
					<button class="btn-icon btn-ghost-accent">&hearts;</button>
					<button class="btn-icon btn-ghost-warning">&hearts;</button>
					<button class="btn-icon btn-ghost-surface">&hearts;</button>
				</div>
			</div>
		</div>
		<!-- SvelteKit Link Options -->
		<div class="space-y-4">
			<h4>SvelteKit Link Options</h4>
			<p>Since we use native elements, this means we can utilize <a href="https://kit.svelte.dev/docs/link-options" target="_blank">SvelteKit Link Options</a> such as a <em>prefetch</em>.</p>
			<CodeBlock language="html" code={`<a href="/" class="btn" data-sveltekit-prefetch>Skeleton</a>`} />
		</div>
		<!-- Global Styles -->
		<div class="space-y-4">
			<h4>Global Styles</h4>
			<p>Use your global stylesheet to update all instances of this element.</p>
			<CodeBlock
				language="css"
				code={`
.btn {
	@apply font-bold rounded;
}
.btn-icon {
	@apply font-bold;
}
.btn-filled-primary,
.btn-filled-accent,
.btn-filled-warning,
.btn-filled-surface {
	@apply text-white;
}
				`}
			/>
		</div>
	</section>

	<!-- Classes -->
	<section class="space-y-4">
		<h2>Classes</h2>
		<DataTable headings={tableClasses.headings} source={tableClasses.source} />
	</section>
</div>
