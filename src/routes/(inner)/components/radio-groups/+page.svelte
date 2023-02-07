<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	import sveldRadioGroup from '$lib/components/Radio/RadioGroup.svelte?raw&sveld';
	import sveldRadioItem from '$lib/components/Radio/RadioItem.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Radio Groups',
		description: 'Capture feedback limited to a small set of options.',
		imports: ['RadioGroup', 'RadioItem'],
		source: 'components/Radio',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/',
		restProps: 'RadioItem input',
		components: [
			{ label: 'RadioGroup', sveld: sveldRadioGroup },
			{ label: 'RadioItem', sveld: sveldRadioItem, overrideProps: ['padding', 'hover', 'accent', 'color', 'fill', 'rounded'] }
		],
		keyboard: [
			['<kbd>Tab</kbd>', 'Moves focus to the next focusable RadioItem.'],
			['<kbd>Shift + Tab</kbd> ', 'Moves focus to the previous focusable RadioItem.'],
			['<kbd>Space</kbd> or <kbd>Enter</kbd>', 'Checks the focused radio button if it is not already checked']
		]
	};

	// Local
	let justify: number = 0;
	let alignment: string = 'horizontal';
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-2 gap-4">
			<card class="card variant-glass p-4 text-center space-y-2">
				<RadioGroup>
					<RadioItem bind:group={justify} name="justify-left" value={0}>
						<i class="fa-solid fa-align-left" />
					</RadioItem>
					<RadioItem bind:group={justify} name="justify-center" value={1}>
						<i class="fa-solid fa-align-center" />
					</RadioItem>
					<RadioItem bind:group={justify} name="justify-right" value={2}>
						<i class="fa-solid fa-align-right" />
					</RadioItem>
				</RadioGroup>
				<div><code>selected: {justify}</code></div>
			</card>
			<card class="card variant-glass p-4 text-center space-y-2">
				<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
					<RadioItem bind:group={alignment} name="alignment-horizontal" value="horizontal">Horizontal</RadioItem>
					<RadioItem bind:group={alignment} name="alignment-vertical" value="vertical">Vertical</RadioItem>
				</RadioGroup>
				<div><code>selected: {alignment}</code></div>
			</card>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				This component acts as a wrapper around native HTML radio inputs. Bind the <em>group</em>, then set <em>value</em> and <em>name</em>
				as follows.
			</p>
			<CodeBlock language="ts" code={`let alignment: string = 'horizontal';`} />
			<CodeBlock
				language="html"
				code={`
<RadioGroup>
	<RadioItem bind:group={alignment} name="alignment-horizontal" value="horizontal">Horizontal</RadioItem>
	<RadioItem bind:group={alignment} name="alignment-vertical" value="vertical">Vertical</RadioItem>
</RadioGroup>
				`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Variants</h2>
			<p>The radio group supports variant styles for <code>active</code> and <code>hover</code> properties.</p>
			<CodeBlock language="html" code={`<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">...</RadioGroup>`} />
		</section>
		<section class="space-y-4">
			<h2>Full Width Display</h2>
			<p>Set <em>display</em> to <code>flex</code> to stretch and fill the full width.</p>
			<CodeBlock language="html" code={`<RadioGroup display="flex"></RadioGroup>`} />
		</section>
		<section class="space-y-4">
			<h2>Radio Attributes</h2>
			<p>
				The Radio Item component supports Svelte's <code>$$restProps</code>, which allows for <em>required</em>, <em>disabled</em>, and any
				other valid radio input attributes. Please note these settings are applied per item.
			</p>
			<CodeBlock language="html" code={`<RadioItem ... required disabled />`} />
		</section>
	</svelte:fragment>
</DocsShell>
