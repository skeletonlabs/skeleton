<script lang="ts">
	import { DataTable, Card, Avatar } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';

	// Props and Slots
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['background', 'string', 'bg-surface-200 dark:bg-surface-800', 'Provided a class to set background color.'],
			['color', 'string', '-', 'Provide a class to set text color.'],
			['padding', 'string', 'p-4', 'Provide a class to padding style.'],
			['space', 'string', 'space-y-4', 'Provide a class to adjust header/body/footer spacing.'],
			['ringSize', 'string', 'ring-[1px]', 'Provide a class set outline size.'],
			['ringColor', 'string', 'ring-black/5 dark:ring-white/5', 'Provide a class set outline color.'],
			['ringInset', 'string', 'ring-inset', 'Provide a class set outline inset style.'],
			['rounded', 'string', 'rounded-lg', 'Provide a class set border radius style.'],
		]
	};
	const tablePropsSlots: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['header', 'string', '-', 'Provide classes for the card\'s header slot.'],
			['body', 'string', '-', 'Provide classes for the card\'s body slot.'],
			['footer', 'string', '-', 'Provide classes for the card\'s footer slot.'],
		]
	};
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [
			['default', 'Provide body content here.'],
			['header', 'Provide header content, such as an image.'],
			['footer', 'Provide footer content, such as a byline.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Cards</h1>
		<p>Container elements that wrap and separate your content.</p>
		<CodeBlock language="javascript" code={`import { Card } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<section class="space-y-4">
		<!-- Colors -->
		<div class="grid md:grid-cols-3 gap-4">
			<Card background="bg-primary-500" color="text-white" class="flex-1 flex justify-center items-center min-h-[100px]">Primary</Card>
			<Card background="bg-accent-500" color="text-white" class="flex-1 flex justify-center items-center min-h-[100px]">Accent</Card>
			<Card background="bg-warning-500" color="text-white" class="flex-1 flex justify-center items-center min-h-[100px]">Warning</Card>
		</div>
		<!-- Columns -->
		<div class="grid md:grid-cols-2 gap-4">
			<!-- Minimal -->
			<Card class="flex justify-center items-center min-h-[100px]">Minimal</Card>
			<!-- Detailed -->
			<Card class="cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl overflow-hidden">
				<svelte:fragment slot="header">
					<div class="-mt-4 -mx-4">
						<img src="https://source.unsplash.com/random/1280x540?skeleton" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
					</div>
				</svelte:fragment>
				<div class="space-y-4">
					<h6 class="text-primary-500">Announcements</h6>
					<h3>Welcome to Skeleton</h3>
					<article class="text-surface-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure molestias
						cum expedita architecto itaque quae rem.
					</article>
				</div>
				<svelte:fragment slot="footer">
					<div class="flex justify-start items-center space-x-4">
						<Avatar src="https://i.pravatar.cc/160?img=5" size="sm" outlined />
						<div>
							<h6 class="font-bold">By Alex</h6>
							<p>On {new Date().toLocaleDateString()}</p>
						</div>
					</div>
				</svelte:fragment>
			</Card>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="html" code={`<Card>Minimal</Card>`} />
		<CodeBlock language="html" code={`<Card background="bg-primary-500" color="text-white">Colored</Card>`} />
		<CodeBlock language="html" code={`<Card class="hover:shadow-xl">Styled</Card>`} />
		<CodeBlock language="html" code={`
<Card header="bg-red-500" body="bg-green-500" footer="bg-blue-500" space="space-y-1">
	<svelte:fragment slot="header">(header)</svelte:fragment>
	(body)
	<svelte:fragment slot="footer">(footer)</svelte:fragment>
</Card>
		`.trim()} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
		<DataTable headings={tablePropsSlots.headings} source={tablePropsSlots.source} />
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<DataTable headings={tableSlots.headings} source={tableSlots.source} />
	</section>
</div>
