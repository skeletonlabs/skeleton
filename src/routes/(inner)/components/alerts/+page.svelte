<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	import Alert from '$lib/components/Alert/Alert.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Alerts',
		description: 'Display customizable alerts to garner attention and provide critical actions.',
		imports: ['Alert'],
		source: 'components/Alert'
	};
	const properties: DocsShellTable[] = [
		{
			headings: ['Prop', 'Type', 'Default', 'Description'],
			source: [
				['<code>visible</code>', 'boolean', 'true', 'Control visibility of the alert.'],
				['<code>background</code>', 'string', 'bg-accent-500/30', 'Provide classes to set background color.'],
				['<code>border</code>', 'string', 'border-l-4 border-l-accent-500', 'Provide classes to set the border styles.'],
				['<code>color</code>', 'string', '-', 'Provide classes to set text color.'],
				['<code>radius</code>', 'string', '-', 'Provide classes to set border radius.'],
				['<code>duration</code>', 'number', '200', 'Svelte fade transition duration. Set <code>0</code> to disable.']
			]
		}
	];
	const classes: DocsShellTable[] = [
		{
			description: 'Coming soon.'
			// headings: ['Selector', 'Description'],
			// source: [
			// 	['<code>.foo</code>', '...'],
			// 	['<code>.bar</code>', '...']
			// ]
		}
	];
	const slots: DocsShellTable[] = [
		{
			headings: ['Slot', 'Style Prop', 'Description'],
			source: [
				['<code>lead</code>', 'slotLead', 'Provide a leading element, such as an icon.'],
				['<code>title</code>', 'slotContent > .alert-title', 'Provide the alert title text.'],
				['<code>default</code>', 'slotContent > .alert-message', 'Provide the alert message text.'],
				['<code>trail</code>', 'slotTrail', 'Provide a trailing element, such as a call to action.']
			]
		}
	];
	const a11y: DocsShellTable[] = [
		{
			description: 'Makes use of <code>role="alert"</code> and <code>aria-live="polite"</code>.'
		}
	];

	// Local
	let title = `Hello Skeleton!`;
	let message =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, cupiditate eveniet in neque magnam quos ad cumque quae numquam voluptatum magni atque vitae dolore voluptatibus aliquam tempora! Animi, nihil quo.';
	let visible: boolean = true;

	// Functions
	function toggleVisible(): void {
		visible = !visible;
	}
	function actionExample(): void {
		alert('Action button was triggered!');
	}
</script>

<DocsShell {settings} {properties} {classes} {slots} {a11y}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			{#if !visible}
				<div class="card card-body text-center"><button class="btn btn-ghost" on:click={toggleVisible}>Display Alerts</button></div>
			{/if}
			<Alert {visible}>
				<svelte:fragment slot="lead">
					<span class="text-4xl">⚠️</span>
				</svelte:fragment>
				<svelte:fragment slot="title">{title}</svelte:fragment>
				<span>{message}</span>
				<svelte:fragment slot="trail">
					<button class="btn btn-filled-ternary" on:click={actionExample}>View More</button>
					<button class="btn btn-ghost-ternary" on:click={toggleVisible}>&#10005;</button>
				</svelte:fragment>
			</Alert>
			<Alert background="bg-warning-500/30" border="border-l-4 border-warning-500" rounded="rounded-3xl" {visible}>
				<span>{message}</span>
				<svelte:fragment slot="trail">
					<button class="btn btn-ghost" on:click={toggleVisible}>&#10005;</button>
				</svelte:fragment>
			</Alert>
			<Alert background="bg-accent-500/30" border="border-l-4 border-accent-500" {visible}>
				<svelte:fragment slot="title">{title}</svelte:fragment>
				<svelte:fragment slot="trail">
					<button class="btn btn-filled-accent" on:click={actionExample}>View More</button>
				</svelte:fragment>
			</Alert>
			<Alert background="bg-primary-500/30" border="border-l-4 border-primary-500" {visible}>
				<svelte:fragment slot="title">{title}</svelte:fragment>
				<svelte:fragment slot="trail">
					<button class="btn btn-filled-primary" on:click={actionExample}>View More</button>
				</svelte:fragment>
			</Alert>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<CodeBlock language="typescript" code={`let visible: boolean = true;`} />
			<CodeBlock
				language="html"
				code={`
<Alert {visible}>
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<svelte:fragment slot="title">(title)</svelte:fragment>
	<span>(message)</span>      
	<svelte:fragment slot="trail">(trail)</svelte:fragment>
</Alert>
			`}
			/>
		</section>
	</svelte:fragment>
</DocsShell>
