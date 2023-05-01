<script lang="ts">
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	// Components
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	// Sveld
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
			['<kbd class="kbd">Tab</kbd>', 'Moves focus to the next focusable RadioItem.'],
			['<kbd class="kbd">Shift + Tab</kbd> ', 'Moves focus to the previous focusable RadioItem.'],
			['<kbd class="kbd">Space</kbd> or <kbd class="kbd">Enter</kbd>', 'Checks the focused radio button if it is not already checked']
		]
	};

	// Local
	let justify: number = 0;
	let timeHorizontal: string = 'months';
	let timeVertical: string = 'Millennia';
	let timeNames = ['Millennia', 'Epochs', 'Eras', 'Eons'];
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<RadioGroup class="text-token">
					<RadioItem bind:group={justify} name="justify" value={0}>
						<i class="fa-solid fa-align-left" />
					</RadioItem>
					<RadioItem bind:group={justify} name="justify" value={1}>
						<i class="fa-solid fa-align-center" />
					</RadioItem>
					<RadioItem bind:group={justify} name="justify" value={2}>
						<i class="fa-solid fa-align-right" />
					</RadioItem>
				</RadioGroup>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<div class="text-center"><code class="code">selected: {justify}</code></div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="ts" code={`let value: number = 0;`} />
				<CodeBlock
					language="html"
					code={`
<RadioGroup>
	<RadioItem bind:group={value} name="justify" value={0}>(label)</RadioItem>
	<RadioItem bind:group={value} name="justify" value={1}>(label)</RadioItem>
	<RadioItem bind:group={value} name="justify" value={2}>(label)</RadioItem>
</RadioGroup>
`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				This component acts as a wrapper around native HTML radio inputs. Bind the <em>group</em>, then set <em>value</em> and <em>name</em>
				as follows.
			</p>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Variants</h2>
			<p>The radio group supports variant styles for <code class="code">active</code> and <code class="code">hover</code> properties.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
						<RadioItem bind:group={timeHorizontal} name="time" value="months">Months</RadioItem>
						<RadioItem bind:group={timeHorizontal} name="time" value="years">Years</RadioItem>
					</RadioGroup>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">...</RadioGroup>`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Vertical</h2>
			<p>Set <em>display</em> to <code class="code">flex-col</code> for a vertical layout.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<RadioGroup rounded="rounded-container-token" display="flex-col">
						{#each timeNames as name, i}
							<RadioItem bind:group={timeVertical} label={name} {name} value={name}>{name}</RadioItem>
						{/each}
					</RadioGroup>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<RadioGroup rounded="rounded-container-token" display="flex-col">...</RadioGroup>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Full Width</h2>
			<p>Set <em>display</em> to <code class="code">flex</code> to stretch and fill the full width.</p>
			<CodeBlock language="html" code={`<RadioGroup display="flex">...</RadioGroup>`} />
		</section>
		<section class="space-y-4">
			<h2 class="h2">Radio Attributes</h2>
			<p>
				The Radio Item component supports Svelte's <code class="code">$$restProps</code>, which allows for <em>required</em>,
				<em>disabled</em>, and any other valid radio input attributes. Please note these settings are applied per item.
			</p>
			<CodeBlock language="html" code={`<RadioItem ... required disabled />`} />
		</section>
	</svelte:fragment>
</DocsShell>
