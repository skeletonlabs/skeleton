<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	// Components
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import Card from '$lib/components/Card/Card.svelte';
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
		outline: undefined,
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
			['<code>.btn-[value]</code>', 'sm | base | lg | xl', 'Canned button sizes that define padding and text sizes.'],
			['<code>.btn-[value]</code>', '(variant id)', 'A set of preset class styles for a <code>.btn</code> element.'],
			['<code>.btn-icon-[value]</code>', '(variant id)', 'A set of preset class styles for a <code>.btn-icon</code> element.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Buttons</h1>
		<p>The <code>button.css</code> <a href="/guides/styling">stylesheet add-on</a> provides a robust set of button styles.</p>
		<CodeBlock language="ts" code={`import '@brainandbones/skeleton/styles/buttons.css';`.trim()} />
	</header>

	<!-- Sandbox -->
	<section class="space-y-4">
		<div class="grid grid-cols-1 xl:grid-cols-[1fr_480px] gap-2">
			<!-- Example -->
			<Card slotBody="h-full flex justify-center items-center">
				<!-- prettier-ignore -->
				<svelte:element this={$storeTag} class="btn {btnClases}" disabled={$storeDisabled}>
                    <span>💀</span>
                    <span>Skeleton</span>
                </svelte:element>
			</Card>
			<!-- Options -->
			<Card slotBody="space-y-4">
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
				<!-- Outline -->
				<label>
					<span>Outline</span>
					<select name="outline" id="outline" bind:value={btnValues.outline}>
						<option value={undefined}>None</option>
						<option value="btn-outline-primary">btn-outline-primary</option>
						<option value="btn-outline-accent">btn-outline-accent</option>
						<option value="btn-outline-warning">btn-outline-warning</option>
						<option value="btn-outline-surface">btn-outline-surface</option>
					</select>
				</label>
				<!-- Color -->
				<label>
					<span>Color</span>
					<select name="color" id="color" bind:value={btnValues.color}>
						<option value={undefined}>None</option>
						<option value="text-white">text-white</option>
						<option value="text-black">text-black</option>
						<option value="text-primary-500">text-primary-500</option>
						<option value="text-accent-500">text-accent-500</option>
						<option value="text-warning-500">text-warning-500</option>
						<option value="text-surface-500">btn-outline-surface-500</option>
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
			</Card>
		</div>
		<CodeBlock language="html" code={`<` + $storeTag + ` class="btn ` + btnClases + `" disabled="` + $storeDisabled + `">Skeleton</` + $storeTag + `>`} />
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<h4>Button</h4>
		<p>Add the <code>.btn</code> class to any anchor or button to create a <em>text</em> button.</p>
		<CodeBlock language="html" code={`<button class="btn">Skeleton</button>`} />
		<CodeBlock language="html" code={`<a href="/" class="btn">Skeleton</a>`} />
		<Card slotBody="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
			<button class="btn">Button</button>
			<a {href} class="btn">Anchor</a>
		</Card>
		<h4>Icon Buttons</h4>
		<p>Add the <code>.btn-icon</code> class to any anchor or button to create a <em>text</em> icon button.</p>
		<CodeBlock language="html" code={`<button class="btn-icon">💀</button>`} />
		<CodeBlock language="html" code={`<a href="/" class="btn-icon">💀</a>`} />
		<Card slotBody="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
			<button class="btn-icon">B</button>
			<a {href} class="btn-icon">A</a>
		</Card>
		<h4>Styling</h4>
		<p>Use any valid Tailwind classes to style your buttons.</p>
		<CodeBlock language="html" code={`<button class="btn bg-primary-500">Skeleton</button>`} />
		<Card slotBody="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
			<button class="btn bg-primary-500">Skeleton</button>
			<button class="btn bg-accent-500">Skeleton</button>
			<button class="btn bg-warning-500">Skeleton</button>
		</Card>
		<h4>Sizes</h4>
		<p>Add a <code>.btn-[sm|base|lg|xl]</code> class to adjust the size of a button.</p>
		<CodeBlock language="html" code={`<button class="btn btn-lg bg-primary-500">Large</button>`} />
		<Card slotBody="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
			<button class="btn btn-sm bg-primary-500">sm</button>
			<button class="btn btn-base bg-primary-500">base</button>
			<button class="btn btn-lg bg-primary-500">lg</button>
			<button class="btn btn-xl bg-primary-500">xl</button>
		</Card>
		<p>Add a <code>.btn-icon-[sm|base|lg|xl]</code> class to adjust the size of an icon button.</p>
		<CodeBlock language="html" code={`<button class="btn-icon btn-icon-lg bg-primary-500">💀</button>`} />
		<Card slotBody="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
			<button class="btn-icon btn-icon-sm bg-primary-500">sm</button>
			<button class="btn-icon btn-icon-base bg-primary-500">b</button>
			<button class="btn-icon btn-icon-lg bg-primary-500">lg</button>
			<button class="btn-icon btn-icon-xl bg-primary-500">xl</button>
		</Card>
		<h4>Outline</h4>
		<p>
			We've included theme-friendly utility classes for <code>btn-outline-[primary|accent|warning|surface]</code>. This represents <code>ring-2 ring-[color]-500 ring-inset</code>.
		</p>
		<CodeBlock language="html" code={`<button class="btn btn-outline-primary">Outline</button>`} />
		<Card slotBody="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
			<button class="btn btn-outline-primary">Outline</button>
		</Card>
		<h4>Leading and Trailing Icons</h4>
		<p>By default, buttons use a <code>flex-row</code> layout, which means child elements create a spaced row. Using <em>span</em> elements ensures the spacing works as expected.</p>
		<CodeBlock
			language="html"
			code={`
<button class="btn bg-primary-500">
    <span>💀</span>
    <span>Skeleton</span>
</button>
        `.trim()}
		/>
		<Card slotBody="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
			<button class="btn bg-primary-500">
				<span>💀</span>
				<span>Skeleton</span>
			</button>
		</Card>
		<h4>Variants</h4>
		<p>A set of canned preset styles are available by using <code>.btn-[variant]</code>. This works for both standard and icon buttons.</p>
		<CodeBlock language="html" code={`<button class="btn btn-filled-primary">filled-primary</button>`} />
		<Card slotBody="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
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
		</Card>
		<CodeBlock language="html" code={`<button class="btn-icon btn-filled-primary">♥</button>`} />
		<Card slotBody="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
			<!-- Text -->
			<div class="grid grid-cols-1 gap-4">
				<button class="btn-icon btn-filled">♥</button>
				<button class="btn-icon btn-filled-primary">♥</button>
				<button class="btn-icon btn-filled-accent">♥</button>
				<button class="btn-icon btn-filled-warning">♥</button>
				<button class="btn-icon btn-filled-surface">♥</button>
			</div>
			<!-- Ringed -->
			<div class="grid grid-cols-1 gap-4">
				<button class="btn-icon btn-ringed">♥</button>
				<button class="btn-icon btn-ringed-primary">♥</button>
				<button class="btn-icon btn-ringed-accent">♥</button>
				<button class="btn-icon btn-ringed-warning">♥</button>
				<button class="btn-icon btn-ringed-surface">♥</button>
			</div>
			<!-- Ringed -->
			<div class="grid grid-cols-1 gap-4">
				<button class="btn-icon btn-ghost">♥</button>
				<button class="btn-icon btn-ghost-primary">♥</button>
				<button class="btn-icon btn-ghost-accent">♥</button>
				<button class="btn-icon btn-ghost-warning">♥</button>
				<button class="btn-icon btn-ghost-surface">♥</button>
			</div>
		</Card>
		<h4>SvelteKit Link Options</h4>
		<p>By using native anchor elements we can make use of <a href="https://kit.svelte.dev/docs/link-options" target="_blank">SvelteKit Link Options</a> such as a <em>prefetch</em>.</p>
		<CodeBlock language="html" code={`<a href="/" class="btn" data-sveltekit-prefetch>Skeleton</a>`} />
	</section>

	<!-- Global Styles -->
	<section class="space-y-4">
		<h2>Global Button Styles</h2>
		<p>If you wish to override default button styles, you can do so in your global stylesheet. Here's an example.</p>
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
		`.trim()}
		/>
	</section>

	<!-- Classes -->
	<section class="space-y-4">
		<h2>Classes</h2>
		<DataTable headings={tableClasses.headings} source={tableClasses.source} />
	</section>
</div>
