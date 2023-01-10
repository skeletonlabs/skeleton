<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import Alert from '$lib/components/Alert/Alert.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-expect-error sveld import
	import sveldAlert from '$lib/components/Alert/Alert.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Alerts',
		description: 'Display customizable alerts to garner attention and provide critical actions.',
		imports: ['Alert'],
		source: 'components/Alert',
		components: [{ sveld: sveldAlert }]
	};

	// Local
	let title = `Hello Skeleton!`;
	let message =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, cupiditate eveniet in neque magnam quos ad cumque quae numquam voluptatum magni atque vitae dolore voluptatibus aliquam tempora! Animi, nihil quo.';
	let visible = true;

	// Functions
	function toggleVisible(): void {
		visible = !visible;
	}
	function actionExample(): void {
		alert('Action button was triggered!');
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<!-- Alert -->
		<aside class="alert alert-error">
			<i class="fa-solid fa-triangle-exclamation text-4xl" />
			<div class="alert-message">
				<h3>Deprecated</h3>
				<p>This component is slated for removal. Please migrate the element styles provided by <em>all.css</em>.</p>
			</div>
			<a href="/elements/alerts" class="alert-message btn btn-filled">View Elements</a>
		</aside>

		<section class="space-y-4">
			{#if !visible}
				<div class="card p-4 text-center"><button class="btn btn-ghost-surface" on:click={toggleVisible}>Display Alerts</button></div>
			{/if}
			<Alert {visible}>
				<svelte:fragment slot="lead">
					<i class="fa-solid fa-triangle-exclamation text-2xl" />
				</svelte:fragment>
				<svelte:fragment slot="title">{title}</svelte:fragment>
				<span>{message}</span>
				<svelte:fragment slot="trail">
					<button class="btn btn-filled-warning" on:click={actionExample}>View More</button>
					<button class="btn-icon btn-ghost-warning" on:click={toggleVisible}>
						<i class="fa-solid fa-xmark" />
					</button>
				</svelte:fragment>
			</Alert>
			<hr />
			<Alert background="bg-primary-500/20" border="border border-primary-500" {visible}>
				<svelte:fragment slot="title">{title}</svelte:fragment>
				<svelte:fragment slot="trail">
					<button class="btn btn-filled-primary" on:click={actionExample}>View More</button>
				</svelte:fragment>
			</Alert>
			<Alert background="bg-secondary-500/20" border="border border-secondary-500" {visible}>
				<svelte:fragment slot="title">{title}</svelte:fragment>
				<svelte:fragment slot="trail">
					<button class="btn btn-filled-secondary" on:click={actionExample}>View More</button>
				</svelte:fragment>
			</Alert>
			<Alert background="bg-tertiary-500/20" border="border border-tertiary-500" {visible}>
				<svelte:fragment slot="title">{title}</svelte:fragment>
				<svelte:fragment slot="trail">
					<button class="btn btn-filled-tertiary" on:click={actionExample}>View More</button>
				</svelte:fragment>
			</Alert>
			<hr />
			<Alert background="bg-success-500/20" border="border border-success-500" {visible}>
				<svelte:fragment slot="title">Success!</svelte:fragment>
				<svelte:fragment slot="trail">
					<button class="btn-icon btn-ghost-success" on:click={toggleVisible}>
						<i class="fa-solid fa-xmark" />
					</button>
				</svelte:fragment>
			</Alert>
			<Alert background="bg-error-500/20" border="border border-error-500" {visible}>
				<svelte:fragment slot="title">Error!</svelte:fragment>
				<svelte:fragment slot="trail">
					<button class="btn btn-filled-error" on:click={actionExample}>View More</button>
				</svelte:fragment>
			</Alert>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>This component makes use of <code>role="alert"</code> and <code>aria-live="polite"</code>.</p>
			<CodeBlock language="typescript" code={`let visible: boolean = true;`} />
			<CodeBlock
				language="html"
				code={`
<Alert {visible}>
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<svelte:fragment slot="title">(title)</svelte:fragment>
	<span>(message)</span>
	<svelte:fragment slot="trail">(trail)</svelte:fragment>
</Alert>`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Styling</h2>
			<p>Use the <code>background</code> and <code>border</code> properties to style your alert.</p>
			<CodeBlock
				language="html"
				code={`
<Alert background="bg-primary-500/20" border="border border-primary-500">...</Alert>
			`}
			/>
		</section>
	</svelte:fragment>
</DocsShell>
