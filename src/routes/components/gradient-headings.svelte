<script lang="ts">
    import GradientHeading from "$lib/GradientHeading/GradientHeading.svelte";
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Table from "$lib/Table/Table.svelte";

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['size', 'string', 'text-[x]', 'text-4xl lg:text-6xl', 'Define the text size.'],
            ['direction', 'string', 'bg-gradient-to-[x]', 'bg-gradient-to-r', 'Define the gradient direction.'],
            ['from', 'string', 'from-[color]-[weight]', 'from-primary-500', 'Define the "from" color.'],
            ['to', 'string', 'to-[color]-[weight]', 'to-accent-500', 'Define the "to" color.'],
        ],
    };

    $: props = {
        size: 'text-6xl',
        direction: 'bg-gradient-to-r',
        from: 'from-primary-500',
        to: 'to-accent-500',
    }
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Gradient Heading</h1>
        <p>Quickly add a gradient header with customizable size and gradient direction.</p>
        <CodeBlock language="javascript" code="{`import {GradientHeading} from '@brainandbones/skeleton';`}"></CodeBlock>
    </header>

    <!-- Sandbox -->
    <section class="space-y-4">
		<div class="space-y-4 xl:space-y-0 xl:grid grid-cols-[2fr,1fr] gap-2">
			<!-- Example -->
			<Card class="space-y-4">
				<div class="w-full h-full overflow-y-hidden overflow-x-auto flex justify-center items-center">
                    <svelte:component
                        this={GradientHeading}
                        size={props.size}
                        direction={props.direction}
                        from={props.from}
                        to={props.to}
                    >Skeleton</svelte:component>
                </div>
            </Card>
			<!-- Options -->
			<Card class="space-y-4">
                <!-- Size -->
				<label>
                    <span>Size</span>
                    <select name="size" id="size" bind:value={props.size}>
                        <option value="text-sm">text-sm</option>
                        <option value="text-md">text-md</option>
                        <option value="text-lg">text-lg</option>
                        <option value="text-xl">text-xl</option>
                        <option value="text-2xl">text-2xl</option>
                        <option value="text-3xl">text-3xl</option>
                        <option value="text-4xl">text-4xl</option>
                        <option value="text-5xl">text-5xl</option>
                        <option value="text-6xl">text-6xl</option>
                        <option value="text-7xl">text-7xl</option>
                        <option value="text-8xl">text-8xl</option>
                        <option value="text-9xl">text-9xl</option>
                    </select>
                </label>
                <!-- Direction -->
				<label>
                    <span>Direction</span>
                    <select name="direction" id="direction" bind:value={props.direction}>
                        <option value="bg-gradient-to-t">bg-gradient-to-t</option>
                        <option value="bg-gradient-to-b">bg-gradient-to-b</option>
                        <option value="bg-gradient-to-l">bg-gradient-to-l</option>
                        <option value="bg-gradient-to-r">bg-gradient-to-r</option>
                        <option value="bg-gradient-to-tl">bg-gradient-to-tl</option>
                        <option value="bg-gradient-to-tr">bg-gradient-to-tr</option>
                        <option value="bg-gradient-to-bl">bg-gradient-to-bl</option>
                        <option value="bg-gradient-to-br">bg-gradient-to-br</option>
                        <option value="bg-gradient-to-r">bg-gradient-to-r</option>
                    </select>
                </label>
                <!-- From -->
				<label>
                    <span>From</span>
                    <select name="from" id="from" bind:value={props.from}>
                        <option value="from-primary-500">from-primary-500</option>
                        <option value="from-accent-500">from-accent-500</option>
                        <option value="from-warning-500">from-warning-500</option>
                    </select>
                </label>
                <!-- To -->
				<label>
                    <span>To</span>
                    <select name="to" id="to" bind:value={props.to}>
                        <option value="to-primary-500">to-primary-500</option>
                        <option value="to-accent-500">to-accent-500</option>
                        <option value="to-warning-500">to-warning-500</option>
                    </select>
                </label>
			</Card>
		</div>
		<CodeBlock
			language="html"
			code={`<GradientHeading size="${props.size}" direction="${props.direction}" from="${props.from}" to="${props.to}">Skeleton</GradientHeading>`}
		></CodeBlock>
	</section>
    
    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>