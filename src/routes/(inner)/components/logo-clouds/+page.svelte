<script lang="ts">
	import { DataTable, LogoCloud, Logo } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	const tablePropsCloud: any = {
		headings: ['Prop', 'Type', 'Default', 'Effects', 'Description'],
		source: [
			['gridCols', 'string', 'md:grid-cols-1', 'Group', 'Provide classes to define grid cols.'],
			['gridGap', 'string', 'gap-1', 'Group', 'Provide classes to style grid gap.'],
			['rounded', 'string', 'rounded-lg', 'Group', 'Provide classes to style rounded styling.'],
			['background', 'string', 'bg-surface-300 dark:bg-surface-800', 'Logo', 'Provide classes to style background color.'],
			['text', 'string', 'text-base font-bold', 'Logo', 'Provide classes to style text size.'],
			['color', 'string', 'text-black dark:text-white', 'Logo', 'Provide classes to style text color.'],
			['padding', 'string', 'py-4 md:py-10', 'Logo', 'Provide classes to style padding.']
		]
	};
	const tablePropsLogo: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['href', 'string', '-', 'Providing this proper converts the element to an anchor tag.'],
			['target', 'string', '-', 'Provide a standard anchor target attribute value.']
		]
	};
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [
			['Default', 'The default pass through slot. Typically reserved for the brand name.'],
			['lead', 'A leading slot, used for icons.'],
			['trail', 'A trailing slot, used for icons.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Logo Clouds</h1>
		<p>An interactive grid that can display logos or sponsors.</p>
		<CodeBlock language="js" code={`import { LogoCloud, Logo } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<section class="space-y-4">
		<h2 class='sr-only'>Examples</h2>
		<LogoCloud gridCols="md:grid-cols-3">
			<Logo href="https://svelte.dev/" target="_blank">
				<svelte:fragment slot="lead"><SvgIcon name="svelte" width="w-8" height="h-8" /></svelte:fragment>
				<span>Svelte</span>
			</Logo>
			<Logo href="https://tailwindcss.com/" target="_blank">
				<svelte:fragment slot="lead"><SvgIcon name="tailwind" width="w-6" height="h-6" /></svelte:fragment>
				<span>Tailwind</span>
			</Logo>
			<Logo href="https://github.com/" target="_blank">
				<svelte:fragment slot="lead"><SvgIcon name="github" width="w-6" height="h-6" /></svelte:fragment>
				<span>Github</span>
			</Logo>
		</LogoCloud>
		<LogoCloud gridCols="lg:grid-cols-4">
			<Logo>HR Solutions</Logo>
			<Logo>Acme Theaters</Logo>
			<Logo>Cruisin' Cuisine</Logo>
			<Logo>Arcane Security</Logo>
			<Logo>Stark Industries</Logo>
			<Logo>Gekko & Co.</Logo>
			<Logo>Acme Corp.</Logo>
			<Logo>Wonka Inc.</Logo>
		</LogoCloud>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="html" code={`<LogoCloud>\n\t<Logo>Skeleton</Logo>\n</LogoCloud>`} />
		<CodeBlock
			language="html"
			code={`
<LogoCloud>
	<Logo href="https://skeleton.brainandbonesllc.com/" target="_blank">
		<svelte:fragment slot="lead">{icon}</svelte:fragment>
		<span>Skeleton</span>
	</Logo>
</LogoCloud>
			`}
		/>
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<h3>Logo Cloud</h3>
		<DataTable headings={tablePropsCloud.headings} source={tablePropsCloud.source} />
		<h3>Logo</h3>
		<p>Properties for <code>background</code>, <code>color</code>, <code>text</code>, <code>padding</code> can be overwritten per each Logo instance.</p>
		<p>
			This component makes use of <a href="https://svelte.dev/docs#template-syntax-attributes-and-props" target="_blank">$$restProps</a>, which allows arbitrary attributes to be provided to the
			component.
		</p>
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
		<p>Reminder: make sure to apply appropriate <code>alt</code> tags to your logo icons and images.</p>
	</section>
</div>
