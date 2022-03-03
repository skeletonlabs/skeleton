<script lang="ts">
	import Button from '$lib/Button/Button.svelte';
	// Docs
	import Card from '$lib/Card/Card.svelte';
    import Table from '$lib/_Table/Table.svelte';
    import CodeBlock from '$lib/_CodeBlock/CodeBlock.svelte';

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['display', 'string', 'filled | outlined | text', '-', 'Controls how the button displays.'],
            ['color', 'string', 'primary | accent | warning', '-', 'Defines which color variable to use.'],
        ],
    };
</script>

<header class="mb-4">
	<h2 class="text-3xl font-bold mb-4">Buttons</h2>
	<p class="text-base opacity-70">
		Buttons allow users to take actions, and make choices, with a single tap.
	</p>
</header>

<Card class="flex justify-center space-x-8 mb-4">
	<div>
		<h2 class="text-base font-bold text-center mb-4">Default</h2>
		<nav class="flex flex-col space-y-4">
			<Button on:click={(_)=>{alert('Clicked');}}>Button</Button>
		</nav>
	</div>
	<div>
		<h2 class="text-base font-bold text-center mb-4">Filled</h2>
		<nav class="flex flex-col space-y-4">
			<Button display="filled">Button</Button>
			<Button href="http://www.google.com" target="_blank" display="filled">Anchor</Button>
			<Button display="filled" color="primary">Primary</Button>
			<Button display="filled" color="accent">Accent</Button>
			<Button display="filled" color="warning">Warning</Button>
			<Button display="filled" disabled>Disabled</Button>
		</nav>
	</div>
	<div>
		<h2 class="text-base font-bold text-center mb-4">Outlined</h2>
		<nav class="flex flex-col space-y-4">
			<Button display="outlined">Button</Button>
			<Button href="http://www.google.com" target="_blank" display="outlined">Anchor</Button>
			<Button display="outlined" color="primary">Primary</Button>
			<Button display="outlined" color="accent">Accent</Button>
			<Button display="outlined" color="warning">Warning</Button>
			<Button display="outlined" disabled>Disabled</Button>
		</nav>
	</div>
	<div>
		<h2 class="text-base font-bold text-center mb-4">Text</h2>
		<nav class="flex flex-col space-y-4">
			<Button display="text">Button</Button>
			<Button href="http://www.google.com" target="_blank" display="text">Anchor</Button>
			<Button display="text" color="primary">Primary</Button>
			<Button display="text" color="accent">Accent</Button>
			<Button display="text" color="warning">Warning</Button>
			<Button display="text" disabled>Disabled</Button>
		</nav>
	</div>
	<div>
		<h2 class="text-base font-bold text-center mb-4">Icon</h2>
		<nav class="flex flex-col space-y-4">
			<Button display="text">&#9733;</Button>
			<Button href="http://www.google.com" target="_blank" display="text">&#9733;</Button>
			<Button display="text" color="primary">&#9733;</Button>
			<Button display="text" color="accent">&#9733;</Button>
			<Button display="text" color="warning">&#9733;</Button>
			<Button display="text" disabled>&#9733;</Button>
		</nav>
	</div>
</Card>

<h3 class="text-2xl font-bold my-4">Usage</h3>
<CodeBlock class="mb-4">{`import {Button} from '@brainandbones/skeleton';\n\n<Button display="filled" color="primary">Primary</Button>`}</CodeBlock>

<!-- Properties -->
<h3 class="text-2xl font-bold my-4">Properties</h3>
<Table source="{tableProps}"></Table>
