<script lang="ts">
	import Card from '$lib/Card/Card.svelte';
    import Table from '$lib/_Table/Table.svelte';
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import Button from '$lib/Button/Button.svelte';

	const icon: string = `&#9733;`;
    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        data: [
            ['background', 'string', '-', 'false', 'Provided a class to define background.'],
            ['color', 'string', 'text-black dark:text-white', 'false', 'Provide a class to define text color.'],
            ['ring', 'string', 'ring-transparent', 'false', 'Provide a class to define ring color.'],
            ['weight', 'string', 'ring-1', 'false', 'Provide a class to define ring weight.'],
            ['rounded', 'string', 'rounded-lg', 'false', 'Provide a class to define border radius.'],
            ['href', 'string', '-', 'false', 'Converts the button to an anchor tag.'],
            ['disabled', 'boolean', 'false', 'false', 'Disables button; not available to anchors.'],
        ],
    };
    const tableSlots: any = {
        columns: ['Slot', 'Position', 'Description'],
        data: [
            ['lead', 'Left of label', 'Allows for adding a lead icon.'],
            ['tail', 'Right of label', 'Allows for adding a trailing icon.'],
        ],
    };

	$:props = {
		size: 'base',
		background: 'bg-primary-500',
		color: 'text-white',
		ring: undefined,
		weight: undefined,
		rounded: 'rounded-lg',
		disabled: false
	};
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Buttons</h1>
		<p>Buttons allow users to take actions and make choices with a single tap.</p>
		<CodeBlock language="js" code={`<script>import {Button} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
	</header>

	<!-- Sandbox -->
	<section class="space-y-4">
		<div class="space-y-4 lg:space-y-0 lg:grid grid-cols-[2fr,1fr] gap-2">
			<!-- Example -->
			<Card class="space-y-4 flex justify-center items-center">
				<svelte:component
					this={Button}
					size={props.size}
					background={props.background}
					color={props.color}
					ring={props.ring}
					weight={props.weight}
					rounded={props.rounded}
					disabled={props.disabled}
				>Skeleton</svelte:component>
            </Card>
			<!-- Options -->
			<Card class="space-y-4">
				<!-- Size -->
				<label>
                    <span>Size</span>
                    <select name="size" id="size" bind:value={props.size}>
                        <option value="none">none</option>
                        <option value="sm">sm</option>
                        <option value="base">base</option>
                        <option value="lg">lg</option>
                        <option value="xl">xl</option>
                    </select>
                </label>
				<!-- Background -->
				<label>
                    <span>Background</span>
                    <select name="background" id="background" bind:value={props.background}>
                        <option value="">none</option>
                        <option value="bg-primary-500">bg-primary-500</option>
                        <option value="bg-accent-500">bg-accent-500</option>
                        <option value="bg-warning-500">bg-warning-500</option>
                        <option value="bg-primary-500/10">bg-primary-500/10</option>
                        <option value="bg-accent-500/10">bg-accent-500/10</option>
                        <option value="bg-warning-500/10">bg-warning-500/10</option>
                    </select>
                </label>
				<!-- Color -->
				<label>
                    <span>Color</span>
                    <select name="color" id="color" bind:value={props.color}>
                        <option value="text-white">text-white</option>
                        <option value="text-black">text-black</option>
                        <option value="text-primary-500">text-primary-500</option>
                        <option value="text-accent-500">text-accent-500</option>
                        <option value="text-warning-500">text-warning-500</option>
                    </select>
                </label>
				<!-- Ring Color -->
				<label>
                    <span>Ring Color</span>
                    <select name="ring" id="ring" bind:value={props.ring}>
                        <option value="">none</option>
                        <option value="ring-white">ring-white</option>
                        <option value="ring-black">ring-black</option>
                        <option value="ring-primary-500">ring-primary-500</option>
                        <option value="ring-accent-500">ring-accent-500</option>
                        <option value="ring-warning-500">ring-warning-500</option>
                    </select>
                </label>
				<!-- Ring Weight -->
				<label>
                    <span>Ring Weight</span>
                    <select name="weight" id="weight" bind:value={props.weight}>
                        <option value="">none</option>
                        <option value="ring-1">ring-1</option>
                        <option value="ring-2">ring-2</option>
                        <option value="ring-4">ring-4</option>
                    </select>
                </label>
				<!-- Rounded -->
				<label>
                    <span>Rounded</span>
                    <select name="rounded" id="rounded" bind:value={props.rounded}>
                        <option value="none">none</option>
                        <option value="rounded-xs">rounded-xs</option>
                        <option value="rounded">rounded</option>
                        <option value="rounded-lg">rounded-lg</option>
                        <option value="rounded-full">rounded-full</option>
                    </select>
                </label>
				<!-- Disabled -->
				<label class="flex items-center">
					<input type="checkbox" bind:checked={props.disabled} />
					<p class="ml-2">Disabled</p>
				</label>
			</Card>
		</div>
		<CodeBlock
			language="html"
			code={`<Button size="${props.size}" background="${props.background}" color="${props.color}" ring="${props.ring}" weight="${props.weight}" rounded="${props.rounded}" disabled={${props.disabled}}>Skeleton</Button>`}
		></CodeBlock>
	</section>

	<!-- Variants -->
	<section class="space-y-4">
		<h4>Variants</h4>
		<p>Skeleton provides variants to quickly and easily create buttons with predefined styles.</p>
		<Card class="flex justify-center space-x-8">
			<section>
				<h4 class="text-center mb-4">Text</h4>
				<nav class="flex flex-col space-y-4">
					<Button variant="text">text</Button>
					<Button variant="text-primary">text-primary</Button>
					<Button variant="text-accent">text-accent</Button>
					<Button variant="text-warning">text-warning</Button>
				</nav>
			</section>
			<section>
				<h4 class="text-center mb-4">Filled</h4>
				<nav class="flex flex-col space-y-4">
					<Button variant="filled">filled</Button>
					<Button variant="filled-primary">filled-primary</Button>
					<Button variant="filled-accent">filled-accent</Button>
					<Button variant="filled-warning">filled-warning</Button>
				</nav>
			</section>
			<section>
				<h4 class="text-center mb-4">Ring</h4>
				<nav class="flex flex-col space-y-4">
					<Button variant="ring">ring</Button>
					<Button variant="ring-primary">ring-primary</Button>
					<Button variant="ring-accent">ring-accent</Button>
					<Button variant="ring-warning">ring-warning</Button>
				</nav>
			</section>
			<section>
				<h4 class="text-center mb-4">Ghost</h4>
				<nav class="flex flex-col space-y-4">
					<Button variant="ghost">ghost</Button>
					<Button variant="ghost-primary">ghost-primary</Button>
					<Button variant="ghost-accent">ghost-accent</Button>
					<Button variant="ghost-warning">ghost-warning</Button>
				</nav>
			</section>
		</Card>
		<CodeBlock language="html" code={`<Button variant="filled-primary">Skeleton</Button>`}></CodeBlock>
	</section>
	
	<!-- Arbitrary -->
	<section class="space-y-4">
		<h4>Arbitrary Examples</h4>
		<Card class="flex justify-center space-x-8">
			<section>
				<nav class="flex flex-row space-x-4">
					<Button color="text-orange-500" ring="ring-orange-500" rounded="rounded-full">
						<svelte:fragment slot="lead">{@html icon}</svelte:fragment>
						Orange
					</Button>
					<Button background="bg-sky-500">
						<svelte:fragment slot="lead">
							<svg class="fill-white inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
						</svelte:fragment>
						Twitter
					</Button>
					<Button background="bg-pink-200" color="text-red-500" rounded="rounded-xl">
						Cancel
						<svelte:fragment slot="tail">&#9447;</svelte:fragment>
					</Button>
				</nav>
			</section>
		</Card>
	</section>
	
	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<Table source="{tableProps}"></Table>
	</section>
	
	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<Table source="{tableSlots}"></Table>
	</section>

</div>
