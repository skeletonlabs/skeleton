<script lang="ts">
	import { DataTable, Card, Alert, Button } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';

	let title = `What's New in Skeleton?`;
	let message =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, cupiditate eveniet in neque magnam quos ad cumque quae numquam voluptatum magni atque vitae dolore voluptatibus aliquam tempora! Animi, nihil quo.';

	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['visible', 'boolean', 'true', 'Control visibility of the alert.'],
			['duration', 'number', '200', 'Set fade in/out animation speed. Set 0 (zero) to disable.'],
			['background', 'string', 'bg-accent-500/30', 'Provide a class to set background color.'],
			['border', 'string', 'border-l-accent-500', 'Provide a class to set border styles.'],
			['color', 'string', '-', 'Provide a class to set text color.'],
			['radius', 'string', '-', 'Provide a class to set border radius.']
		]
	};
	const tableSlots: any = {
		headings: ['Slot', 'Description'],
		source: [
			['lead', 'Provide a leading element, such as an icon.'],
			['title', 'Provide the title of the alert.'],
			['message', 'Provide the message of the alert.'],
			['trail', 'Provide a trailing elements, such as buttons.']
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
	<Card class="space-y-4">
		{#if !visible}<Button variant="ghost" on:click={toggleVisible}>Show Alerts</Button>{/if}
		<Alert {visible}>
			<svelte:fragment slot="lead">
				<span class="text-4xl">⚠️</span>
			</svelte:fragment>
			<svelte:fragment slot="title">{title}</svelte:fragment>
			<svelte:fragment slot="message">{message}</svelte:fragment>
			<svelte:fragment slot="trail">
				<Button variant="filled-accent" on:click={actionExample}>View More</Button>
				<Button variant="ghost-accent" on:click={toggleVisible}>&#10005;</Button>
			</svelte:fragment>
		</Alert>
		<Alert background="bg-primary-500/30" border="border-primary-500" {visible}>
			<svelte:fragment slot="title">{title}</svelte:fragment>
			<svelte:fragment slot="trail">
				<Button variant="filled-primary" on:click={actionExample}>View More</Button>
			</svelte:fragment>
		</Alert>
		<Alert background="bg-warning-500/30" border="border-warning-500" rounded="rounded-3xl" {visible}>
			<svelte:fragment slot="message">{message}</svelte:fragment>
			<svelte:fragment slot="trail">
				<Button variant="ghost" on:click={toggleVisible}>&#10005;</Button>
			</svelte:fragment>
		</Alert>
	</Card>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock
			language="typescript"
			code={`
let visible: boolean = true;
function actionExample(): void { alert('Action button was triggered!'); }`}
		/>
		<CodeBlock
			language="html"
			code={`
<Alert {visible}>
    <svelte:fragment slot="lead">(icon)</svelte:fragment>
    <svelte:fragment slot="title">Hello, Skeleton</svelte:fragment>
    <svelte:fragment slot="message">A custom message here.</svelte:fragment>      
    <svelte:fragment slot="trail">
        <Button variant="filled" on:click={actionExample}>Show Me</Button>
    </svelte:fragment>
</Alert>
        `.trim()}
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
