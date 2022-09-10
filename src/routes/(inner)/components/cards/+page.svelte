<script lang="ts">
	import { DataTable, Card, Avatar } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Props and Slots
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['background', 'string', 'bg-surface-200 dark:bg-surface-800', 'Provided a class to set background color.'],
			['color', 'string', '-', 'Provide classes to set text color.'],
			['padding', 'string', 'p-4', 'Provide classes to padding style.'],
			['space', 'string', 'space-y-4', 'Provide classes to adjust header/body/footer spacing.'],
			['ringSize', 'string', 'ring-[1px]', 'Provide classes set outline size.'],
			['ringColor', 'string', 'ring-black/5 dark:ring-white/5', 'Provide classes set outline color.'],
			['ringInset', 'string', 'ring-inset', 'Provide classes set outline inset style.'],
			['rounded', 'string', 'rounded-lg', 'Provide classes set border radius style.']
		]
	};
	const tablePropsSlots: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['slotHeader', 'string', '-', 'Provide arbitrary classes to style the header slot.'],
			['slotBody', 'string', '-', 'Provide arbitrary classes to style the default body slot.'],
			['slotFooter', 'string', '-', 'Provide arbitrary classes to style the footer slot.']
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
			<Card background="bg-primary-500" color="text-white" slotBody="flex-1 flex justify-center items-center min-h-[100px]">Primary</Card>
			<Card background="bg-accent-500" color="text-white" slotBody="flex-1 flex justify-center items-center min-h-[100px]">Accent</Card>
			<Card background="bg-warning-500" color="text-white" slotBody="flex-1 flex justify-center items-center min-h-[100px]">Warning</Card>
		</div>
		<!-- Columns -->
		<div class="grid md:grid-cols-2 gap-4">
			<!-- Minimal -->
			<Card class="flex justify-center items-center min-h-[100px]">Minimal</Card>
			<!-- Detailed -->
			<Card
				slotHeader="-mt-4 -mx-4"
				slotBody="space-y-4"
				slotFooter="flex justify-start items-center space-x-4"
				class="cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl overflow-hidden"
			>
				<!-- Header -->
				<svelte:fragment slot="header">
					<img src="https://source.unsplash.com/random/1280x540?skeleton" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
				</svelte:fragment>
				<!-- Body -->
				<h6 class="text-primary-500">Announcements</h6>
				<h3>Welcome to Skeleton</h3>
				<article class="text-surface-400">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure molestias
					cum expedita architecto itaque quae rem.
				</article>
				<!-- Footer -->
				<svelte:fragment slot="footer">
					<Avatar src="https://i.pravatar.cc/160?img=5" size="sm" outlined />
					<div>
						<h6 class="font-bold">By Alex</h6>
						<p>On {new Date().toLocaleDateString()}</p>
					</div>
				</svelte:fragment>
			</Card>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="html" code={`<Card>Skeleton</Card>`} />
		<CodeBlock
			language="html"
			code={`
<Card slotHeader="bg-primary-500" slotBody="bg-accent-500" slotFooter="bg-warning-500" space="space-y-1">
	<svelte:fragment slot="header">(header)</svelte:fragment>
	(body)
	<svelte:fragment slot="footer">(footer)</svelte:fragment>
</Card>
		`.trim()}
		/>
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
