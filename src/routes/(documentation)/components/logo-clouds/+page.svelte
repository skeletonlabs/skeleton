<script lang="ts">
	import { DataTable, LogoCloud, Logo } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';

	const tablePropsCloud: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['background', 'string', 'bg-surface-200 dark:bg-surface-800', 'Provide a class to set background color.'],
			['color', 'string', 'text-black dark:text-white', 'Provide a class to set text color.'],
			['text', 'string', 'text-base font-bold', 'Provide a class to set text styling.']
		]
	};
	const tablePropsLogo: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['background', 'string', 'bg-surface-200 dark:bg-surface-800', 'Provide a class to override background color.'],
			['color', 'string', 'text-black dark:text-white', 'Provide a class to override text color.'],
			['text', 'string', 'text-base font-bold', 'Provide a class to override text styling.'],
			['href', 'string', '-', 'Converts to an anchor element and sets click through value.']
		]
	};
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [
			['lead', 'Dedicated leading slot, left of the label.'],
			['label', 'Dedicated slot for adding a label.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Logo Clouds</h1>
		<p>Comfortably fits 2-4 logos with optional fragment slots for icons and labels.</p>
		<CodeBlock language="js" code={`import { LogoCloud, Logo } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<section class="space-y-4">
		<LogoCloud>
			<Logo>HR Solutions Co.</Logo>
			<Logo>Acme Theaters</Logo>
			<Logo>Cruisin' Cuisine</Logo>
			<Logo>Arcane Security</Logo>
		</LogoCloud>
		<LogoCloud>
			<Logo>HR Solutions Co.</Logo>
			<Logo>Acme Theaters</Logo>
			<Logo>Cruisin' Cuisine</Logo>
		</LogoCloud>
		<LogoCloud>
			<Logo>
				<svelte:fragment slot="lead"><span>💼</span></svelte:fragment>
				<svelte:fragment slot="label">HR Solutions Co.</svelte:fragment>
			</Logo>
			<Logo>
				<svelte:fragment slot="lead"><span>🍿</span></svelte:fragment>
				<svelte:fragment slot="label">Acme Theaters</svelte:fragment>
			</Logo>
		</LogoCloud>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="html" code={`<LogoCloud>\n\t<Logo>Skeleton</Logo>\n</LogoCloud>`} />
		<CodeBlock
			language="html"
			code={`<LogoCloud>\n\t<Logo>\n\t\t<svelte:fragment slot="lead">{@html icon}</svelte:fragment>\n\t\t<svelte:fragment slot="label">Skeleton</svelte:fragment>\n\t</Logo>\n</LogoCloud>`}
		/>
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<h3>Logo Cloud</h3>
		<DataTable headings={tablePropsCloud.headings} source={tablePropsCloud.source} />
		<h3>Logo</h3>
		<DataTable headings={tablePropsLogo.headings} source={tablePropsLogo.source} />
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<DataTable headings={tableSlots.headings} source={tableSlots.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<h2>Accessibility</h2>
		<p>Make sure to apply appropriate <code>alt</code> tags to your logo icons and images.</p>
	</section>
</div>
