<script lang="ts">
	import Card from '$lib/Card/Card.svelte';
    import Table from '$lib/_Table/Table.svelte';
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import Button from '$lib/Button/Button.svelte';

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['display', 'string', 'filled | outlined | text', '-', 'Controls how the button displays.'],
            ['color', 'string', 'primary | accent | warning', '-', 'Defines which color variable to use.'],
        ],
    };
	const icon: string = `&#9733;`;
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Buttons</h1>
		<p>Buttons allow users to take actions and make choices with a single tap.</p>
	</header>

	<!-- Variants -->
	<section class="space-y-4">
		<h4>Variants</h4>
		<Card class="flex justify-center space-x-8">
			<section>
				<h4 class="text-center mb-4">Icon</h4>
				<nav class="flex flex-col space-y-4">
					<Button variant="text">{@html icon}</Button>
					<Button variant="text-primary">{@html icon}</Button>
					<Button variant="text-accent">{@html icon}</Button>
					<Button variant="text-warning">{@html icon}</Button>
				</nav>
			</section>
			<section>
				<h4 class="text-center mb-4">Text</h4>
				<nav class="flex flex-col space-y-4">
					<Button variant="text">Button</Button>
					<Button variant="text-primary">Button</Button>
					<Button variant="text-accent">Button</Button>
					<Button variant="text-warning">Button</Button>
				</nav>
			</section>
			<section>
				<h4 class="text-center mb-4">Filled</h4>
				<nav class="flex flex-col space-y-4">
					<Button variant="filled">Button</Button>
					<Button variant="filled-primary">Button</Button>
					<Button variant="filled-accent">Button</Button>
					<Button variant="filled-warning">Button</Button>
				</nav>
			</section>
			<section>
				<h4 class="text-center mb-4">Ring</h4>
				<nav class="flex flex-col space-y-4">
					<Button variant="ring">Button</Button>
					<Button variant="ring-primary">Button</Button>
					<Button variant="ring-accent">Button</Button>
					<Button variant="ring-warning">Button</Button>
				</nav>
			</section>
			<section>
				<h4 class="text-center mb-4">Ghost</h4>
				<nav class="flex flex-col space-y-4">
					<Button variant="ghost">Button</Button>
					<Button variant="ghost-primary">Button</Button>
					<Button variant="ghost-accent">Button</Button>
					<Button variant="ghost-warning">Button</Button>
				</nav>
			</section>
		</Card>
	</section>
	
	<!-- Custom -->
	<section class="space-y-4">
		<h4>Custom</h4>
		<Card class="flex justify-center space-x-8">
			<section>
				<h4 class="text-center mb-4">Icon</h4>
				<nav class="flex flex-col space-y-4">
					<Button>{@html icon}</Button>
					<Button href="http://www.google.com" target="_blank">{@html icon}</Button>
					<Button color="text-primary-500">{@html icon}</Button>
					<Button color="text-accent-500">{@html icon}</Button>
					<Button color="text-warning-500">{@html icon}</Button>
					<Button disabled>{@html icon}</Button>
				</nav>
			</section>
			<section>
				<h4 class="text-center mb-4">Text</h4>
				<nav class="flex flex-col space-y-4">
					<Button>Button</Button>
					<Button href="http://www.google.com" target="_blank">Anchor</Button>
					<Button color="text-primary-500">Button</Button>
					<Button color="text-accent-500">Button</Button>
					<Button color="text-warning-500">Button</Button>
					<Button disabled>Button</Button>
				</nav>
			</section>
			<section>
				<h4 class="text-center mb-4">Filled</h4>
				<nav class="flex flex-col space-y-4">
					<Button background="bg-surface-500">Button</Button>
					<Button background="bg-surface-500" href="http://www.google.com" target="_blank">Anchor</Button>
					<Button background="bg-primary-500">Button</Button>
					<Button background="bg-accent-500">Button</Button>
					<Button background="bg-warning-500">Button</Button>
					<Button background="bg-surface-500" disabled>Button</Button>
				</nav>
			</section>
			<section>
				<h4 class="text-center mb-4">Ring</h4>
				<nav class="flex flex-col space-y-4">
					<Button ring="ring-white">Button</Button>
					<Button ring="ring-white" href="http://www.google.com" target="_blank">Anchor</Button>
					<Button color="text-primary-500" ring="ring-primary-500">Button</Button>
					<Button color="text-accent-500" ring="ring-accent-500">Button</Button>
					<Button color="text-warning-500" ring="ring-warning-500">Button</Button>
					<Button ring="ring-white" disabled>Button</Button>
				</nav>
			</section>
			<section>
				<h4 class="text-center mb-4">Ghost</h4>
				<nav class="flex flex-col space-y-4">
					<Button background="bg-white/10" ring="ring-white">Button</Button>
					<Button background="bg-white/10" ring="ring-white" href="http://www.google.com" target="_blank">Anchor</Button>
					<Button background="bg-primary-500/10" color="text-primary-500" ring="ring-primary-500">Button</Button>
					<Button background="bg-accent-500/10" color="text-accent-500" ring="ring-accent-500">Button</Button>
					<Button background="bg-warning-500/10" color="text-warning-500" ring="ring-warning-500">Button</Button>
					<Button background="bg-white/10" ring="ring-white" disabled>Button</Button>
				</nav>
			</section>
		</Card>
	</section>
	
	<!-- Arbitrary -->
	<section class="space-y-4">
		<h4>Arbitrary</h4>
		<Card class="flex justify-center space-x-8">
			<section>
				<nav class="flex flex-row space-x-4">
					<Button color="text-orange-500" ring="ring-orange-500" rounded="rounded-full">
						<span class="mr-2">{@html icon}</span> Orange
					</Button>
					<Button background="bg-sky-500">
						<svg class="fill-white inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
						Twitter
					</Button>
					<Button background="bg-pink-200" color="text-red-500">Cancel</Button>
				</nav>
			</section>
		</Card>
	</section>
	
	<!-- Usage -->
	<!-- <section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="javascript" code={`<script>import {Button} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
		<h4>Filled + Primary</h4>
		<CodeBlock language="html" code={`<Button display="filled" color="primary">Button</Button>`}></CodeBlock>
		<h4>Outlined + Accent</h4>
		<CodeBlock language="html" code={`<Button display="outlined" color="accent">Button</Button>`}></CodeBlock>
		<h4>Text + Warning</h4>
		<CodeBlock language="html" code={`<Button display="text" color="warning">Button</Button>`}></CodeBlock>
		<h4>Icon + Disabled</h4>
		<CodeBlock language="html" code={`<Button display="text" disabled>${icon}</Button>`}></CodeBlock>
	</section> -->
	
	<!-- Properties -->
	<!-- <section class="space-y-4">
		<h2>Properties</h2>
		<Table source="{tableProps}"></Table>
	</section> -->

</div>
