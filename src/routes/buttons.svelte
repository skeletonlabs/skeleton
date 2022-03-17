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

<div class="space-y-4">

	<!-- Header -->
	<header class="space-y-4">
		<h2 class="text-3xl font-bold">Buttons</h2>
		<p class="text-base text-surface-400">
			Buttons allow users to take actions and make choices with a single tap.
		</p>
	</header>
	
	<!-- Examples -->
	<Card class="flex justify-center space-x-8">
		<section>
			<h2 class="text-base font-bold text-center mb-4">Default</h2>
			<nav class="flex flex-col space-y-4">
				<Button on:click={(_)=>{alert('Clicked');}}>Button</Button>
			</nav>
		</section>
		<section>
			<h2 class="text-base font-bold text-center mb-4">Filled</h2>
			<nav class="flex flex-col space-y-4">
				<Button display="filled">Button</Button>
				<Button href="http://www.google.com" target="_blank" display="filled">Anchor</Button>
				<Button display="filled" color="primary">Primary</Button>
				<Button display="filled" color="accent">Accent</Button>
				<Button display="filled" color="warning">Warning</Button>
				<Button display="filled" disabled>Disabled</Button>
			</nav>
		</section>
		<section>
			<h2 class="text-base font-bold text-center mb-4">Outlined</h2>
			<nav class="flex flex-col space-y-4">
				<Button display="outlined">Button</Button>
				<Button href="http://www.google.com" target="_blank" display="outlined">Anchor</Button>
				<Button display="outlined" color="primary">Primary</Button>
				<Button display="outlined" color="accent">Accent</Button>
				<Button display="outlined" color="warning">Warning</Button>
				<Button display="outlined" disabled>Disabled</Button>
			</nav>
		</section>
		<section>
			<h2 class="text-base font-bold text-center mb-4">Text</h2>
			<nav class="flex flex-col space-y-4">
				<Button display="text">Button</Button>
				<Button href="http://www.google.com" target="_blank" display="text">Anchor</Button>
				<Button display="text" color="primary">Primary</Button>
				<Button display="text" color="accent">Accent</Button>
				<Button display="text" color="warning">Warning</Button>
				<Button display="text" disabled>Disabled</Button>
			</nav>
		</section>
		<section>
			<h2 class="text-base font-bold text-center mb-4">Icon</h2>
			<nav class="flex flex-col space-y-4">
				<Button display="text">{@html icon}</Button>
				<Button href="http://www.google.com" target="_blank" display="text">{@html icon}</Button>
				<Button display="text" color="primary">{@html icon}</Button>
				<Button display="text" color="accent">{@html icon}</Button>
				<Button display="text" color="warning">{@html icon}</Button>
				<Button display="text" disabled>{@html icon}</Button>
			</nav>
		</section>
	</Card>
	
	<!-- Usage -->
	<section class="space-y-4">
		<h3 class="text-2xl font-bold">Usage</h3>
		<CodeBlock language="javascript" code={`<script>import {Button} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
		<h2 class="text-base font-bold">Filled + Primary</h2>
		<CodeBlock language="html" code={`<Button display="filled" color="primary">Button</Button>`}></CodeBlock>
		<h2 class="text-base font-bold">Outlined + Accent</h2>
		<CodeBlock language="html" code={`<Button display="outlined" color="accent">Button</Button>`}></CodeBlock>
		<h2 class="text-base font-bold">Text + Warning</h2>
		<CodeBlock language="html" code={`<Button display="text" color="warning">Button</Button>`}></CodeBlock>
		<h2 class="text-base font-bold">Icon + Disabled</h2>
		<CodeBlock language="html" code={`<Button display="text" disabled>${icon}</Button>`}></CodeBlock>
	</section>
	
	<!-- Properties -->
	<section class="space-y-4">
		<h3 class="text-2xl font-bold">Properties</h3>
		<Table source="{tableProps}"></Table>
	</section>

</div>
