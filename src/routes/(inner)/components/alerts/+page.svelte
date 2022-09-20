<script lang="ts">
	import { DataTable, Alert } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	let title = `Hello Skeleton!`;
	let message =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, cupiditate eveniet in neque magnam quos ad cumque quae numquam voluptatum magni atque vitae dolore voluptatibus aliquam tempora! Animi, nihil quo.';

	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['visible', 'boolean', 'true', 'Control visibility of the alert.'],
			['background', 'string', 'bg-accent-500/30', 'Provide classes to set background color.'],
			['border', 'string', 'border-l-4 border-l-accent-500', 'Provide classes to set the border styles.'],
			['color', 'string', '-', 'Provide classes to set text color.'],
			['radius', 'string', '-', 'Provide classes to set border radius.'],
			['duration', 'number', '200', 'Svelte fade transition duration. Set <code>0</code> to disable.']
		]
	};
	const tableSlots: any = {
		headings: ['Slot', 'Syle Prop', 'Description'],
		source: [
			['lead', 'slotLead', 'Provide a leading element, such as an icon.'],
			['title', 'slotContent > .alert-title', 'Provide the alert title text.'],
			['default', 'slotContent > .alert-message', 'Provide the alert message text.'],
			['trail', 'slotTrail', 'Provide a trailing element, such as a call to action.']
		]
	};

	function toggleVisible(): void {
		visible = !visible;
	}
	function actionExample(): void {
		alert('Action button was triggered!');
	}

	let visible: boolean = true;
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Alerts</h1>
		<p>Display customizable alerts to garner attention and provide critical actions.</p>
		<CodeBlock language="javascript" code={`import { Alert } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<div class="card card-body space-y-4">
		{#if !visible}<button class="btn btn-ghost" on:click={toggleVisible}>Show Alerts</button>{/if}
		<Alert {visible}>
			<svelte:fragment slot="lead">
				<span class="text-4xl">⚠️</span>
			</svelte:fragment>
			<svelte:fragment slot="title">{title}</svelte:fragment>
			<span>{message}</span>
			<svelte:fragment slot="trail">
				<button class="btn btn-filled-accent" on:click={actionExample}>View More</button>
				<button class="btn btn-ghost-accent" on:click={toggleVisible}>&#10005;</button>
			</svelte:fragment>
		</Alert>
		<Alert background="bg-primary-500/30" border="border-l-4 border-primary-500" {visible}>
			<svelte:fragment slot="title">{title}</svelte:fragment>
			<svelte:fragment slot="trail">
				<button class="btn btn-filled-primary" on:click={actionExample}>View More</button>
			</svelte:fragment>
		</Alert>
		<Alert background="bg-warning-500/30" border="border-l-4 border-warning-500" rounded="rounded-3xl" {visible}>
			<span>{message}</span>
			<svelte:fragment slot="trail">
				<button class="btn btn-ghost" on:click={toggleVisible}>&#10005;</button>
			</svelte:fragment>
		</Alert>
	</div>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
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

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<DataTable headings={tableSlots.headings} source={tableSlots.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<h2>Accessibility</h2>
		<p>Makes use of <code>role="alert"</code> and <code>aria-live="polite"</code>.</p>
	</section>
</div>
