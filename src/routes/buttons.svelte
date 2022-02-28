<script lang="ts">
	import Button from '$lib/Button/Button.svelte';
	import Card from '$lib/Card/Card.svelte';
    import DataTable from '$lib/_DataTable/DataTable.svelte';
    import CodeBlock from '$lib/_CodeBlock/CodeBlock.svelte';

    const tableDisplay: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['filled', 'boolean', 'true | false', 'false', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'],
            ['outlined', 'boolean', 'true | false', 'false', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'],
            ['text', 'boolean', 'true | false', 'false', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'],
        ],
    };
    const tableColors: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['primary', 'boolean', 'true | false', 'false', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'],
            ['accent', 'boolean', 'true | false', 'false', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'],
            ['warning', 'boolean', 'true | false', 'false', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'],
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
			<Button
				on:click={(_) => {
					alert('Hello World');
				}}>Default</Button
			>
		</nav>
	</div>
	<div>
		<h2 class="text-base font-bold text-center mb-4">Filled</h2>
		<nav class="flex flex-col space-y-4">
			<Button filled>Button</Button>
			<Button href="http://www.google.com" target="_blank" filled>Anchor</Button>
			<Button filled primary>Primary</Button>
			<Button filled accent>Accent</Button>
			<Button filled warning>Warning</Button>
			<Button filled disabled>Disabled</Button>
		</nav>
	</div>
	<div>
		<h2 class="text-base font-bold text-center mb-4">Outlined</h2>
		<nav class="flex flex-col space-y-4">
			<Button outlined>Button</Button>
			<Button href="http://www.google.com" target="_blank" outlined>Anchor</Button>
			<Button outlined primary>Primary</Button>
			<Button outlined accent>Accent</Button>
			<Button outlined warning>Warning</Button>
			<Button outlined disabled>Disabled</Button>
		</nav>
	</div>
	<div>
		<h2 class="text-base font-bold text-center mb-4">Text</h2>
		<nav class="flex flex-col space-y-4">
			<Button text>Button</Button>
			<Button href="http://www.google.com" target="_blank" text>Anchor</Button>
			<Button text primary>Primary</Button>
			<Button text accent>Accent</Button>
			<Button text warning>Warning</Button>
			<Button text disabled>Disabled</Button>
		</nav>
	</div>
	<div>
		<h2 class="text-base font-bold text-center mb-4">Icon</h2>
		<nav class="flex flex-col space-y-4">
			<Button text>&#9733;</Button>
			<Button href="http://www.google.com" target="_blank" text>&#9733;</Button>
			<Button text primary>&#9733;</Button>
			<Button text accent>&#9733;</Button>
			<Button text warning>&#9733;</Button>
			<Button text disabled>&#9733;</Button>
		</nav>
	</div>
</Card>

<h3 class="text-2xl font-bold my-4">Usage</h3>
<CodeBlock class="mb-4">{`import Button from '@foo/button';\n\n<Button filled primary>Button</Button>`}</CodeBlock>

<!-- Properties -->
<h3 class="text-2xl font-bold my-4">Properties</h3>

<h4 class="text-xl font-bold opacity-70 my-4">Display</h4>
<DataTable source="{tableDisplay}"></DataTable>

<h4 class="text-xl font-bold opacity-70 my-4">Colors</h4>
<DataTable source="{tableColors}"></DataTable>
