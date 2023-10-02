<script lang="ts">
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
	// Components
	import { CodeBlock, Table, type TableSource } from '@skeletonlabs/skeleton';

	const cSwatch = 'w-4 aspect-square rounded-full';
	const tableProps: TableSource = {
		head: ['Color', 'ID', 'Example'],
		body: [
			[`<div class="${cSwatch} bg-primary-500" />`, '[style]-primary-[50-900]', 'Typically your primary brand color.'],
			[`<div class="${cSwatch} bg-secondary-500" />`, '[style]-secondary-[50-900]', 'A secondary branding color for supplementary value.'],
			[`<div class="${cSwatch} bg-tertiary-500" />`, '[style]-tertiary-[50-900]', 'A third and additional branding color.'],
			[
				`<div class="${cSwatch} bg-success-500" />`,
				'[style]-success-[50-900]',
				'Used for successful or positive actions, such as a form submit alert.'
			],
			[`<div class="${cSwatch} bg-warning-500" />`, '[style]-warning-[50-900]', 'Used for negative or harmful actions, such as warnings.'],
			[`<div class="${cSwatch} bg-error-500" />`, '[style]-error-[50-900]', 'May be used for errors, alerts, and invalid inputs.'],
			[`<div class="${cSwatch} bg-surface-500" />`, '[style]-surface-[50-900]', 'The base level colors, used for backgrounds.']
		]
	};

	const shadesArr = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
	const colorsArr = ['Primary', 'Secondary', 'Tertiary', 'Success', 'Warning', 'Error', 'Surface'];
</script>

<LayoutPage>
	<header class="space-y-4">
		<h1 class="h1">Colors</h1>
		<p>Skeleton themes extend Tailwind's color palette and can be used anywhere within your project.</p>
	</header>

	<hr />

	<Table source={tableProps} />

	<!-- Color Palette -->
	<section class="space-y-4 bg-red-500">
		<div class="sm:block hidden">
			<h2 class="h2">Color Palette</h2>
			<div class="grid grid-cols-10 grid-rows-11 gap-x-2">
				{#each colorsArr as label}
					<h3 class="grid col-span-11 py-1">
						{label}:
					</h3>
					{#each shadesArr as test}
						<div
							class="bg-{label.toLowerCase()}-{test} {test == 500
								? 'col-span-1'
								: ''} outline outline-1 outline-black rounded font-extrabold text-on-[{label.toLowerCase()}]-token text-center"
						>
							<div class="text-on-{label.toLowerCase()}-token">
								{test == 500 ? test : ''}
							</div>
						</div>
					{/each}
				{/each}
			</div>
		</div>
		<div class="sm:hidden block" data-toc-ignore>
			<h2 class="h2" data-toc-ignore>Color Palette Mobile</h2>
			<div class="grid grid-rows-9 gap-x-2 max-[430px]:flex-col max-[430px]:gap-x-0" data-toc-ignore>
				{#each colorsArr as label}
					<h3 class="row-start-1 text-center max-[430px]:p-0 p-1 text-xs max-[640px]:text-[8px]" data-toc-ignore>
						{label == 'Secondary' ? 'Second.' : label}
					</h3>
					<div class="w-full h-full grid grid-rows-9 gap-y-4">
						{#each shadesArr as test}
							<div
								class="bg-{label.toLowerCase()}-{test} outline outline-1 h-6 outline-black rounded-lg font-extrabold text-on-[{label.toLowerCase()}]-token text-center col-span-1"
							>
								{test == 500 ? test : ''}
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</section>


	<!-- Reference -->
	<section class="space-y-4">
		<h2 class="h2">Usage</h2>
		<CodeBlock language="html" code={`<!-- Inlined classes -->\n<div class="bg-primary-500 text-secondary-500">Skeleton</div>`} />
		<CodeBlock language="html" code={`<!-- Tailwind opacity scale -->\n<div class="border border-primary-500/50">Skeleton</div>`} />
		<CodeBlock language="css" code={`/* Using Tailwind @apply */\n.example { @apply text-primary-500; }`} />
		<CodeBlock
			language="css"
			code={`/* Using CSS custom properties. Note that colors are RGB values! */\nbody { background: rgba(var(--color-surface-900) / 1); }`}
		/>
	</section>
</LayoutPage>
