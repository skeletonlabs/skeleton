<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import { popover } from '$lib/utilities/popover/popover';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Popovers',
		description: 'Create popover menus and tooltips, powered by Popper.js.',
		imports: ['popover'],
		// stylesheetIncludes: ['all', 'elements'],
		// stylesheets: ['elements/menus'],
		source: 'utilities/Popover',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/menu/',
		// parameters: [],
		// keyboard: [],
		dependencies: [{ label: 'Popper.js', url: 'https://popper.js.org/' }]
	};

	// Settings
	const exampleOneOptions = ['click', 'exampleOne', { placement: 'top', offset: 8 }];
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card p-4 variant-glass flex justify-center items-center">
			<button class="btn variant-filled" use:popover={exampleOneOptions}>Trigger</button>
			<div class="card variant-filled-secondary p-4 w-72 shadow-xl" data-popover="exampleOne">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta amet nam hic aspernatur cum porro praesentium. Voluptates velit ex
					ad eius sit! Sit deserunt ex accusamus quod fugit enim in?
				</p>
			</div>
			<!-- <div class="w-72 shadow-xl !z-50" data-popover="exampleOne">
				<select class="select" size="4" value="1">
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
					<option value="4">Option 4</option>
					<option value="5">Option 5</option>
				</select>
			</div> -->
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>Implements a subset of popper.js options.</p>
			<CodeBlock language="ts" code={`const options = ['click', 'examplePopover', { placement: 'top', offset: 8 }];`} />
			<CodeBlock language="html" code={`<button ... use:popover={options}>Trigger</button>`} />
			<CodeBlock language="html" code={`<div ... data-popover="examplePopover">Popover</div>`} />
		</section>
	</svelte:fragment>
</DocsShell>
