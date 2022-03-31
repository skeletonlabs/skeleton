<script lang="ts">
    import GradientHeading from "$lib/GradientHeading/GradientHeading.svelte";
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Table from "$lib/Table/Table.svelte";

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['size', 'string', 'sm | md | lg | xl | 2xl | ... | 9xl', '4xl', 'The font size to be used.'],
            ['direction', 'string', 't | b | l | r | tl | tr | bl | br', 't', 'Abbreviated direction of the gradient.'],
            ['from', 'string', 'class', 'from-primary-500', 'Provide a Tailwind "from-" class.'],
            ['to', 'string', 'class', 'to-accent-500', 'Provide a Tailwind "to-" class.'],
        ],
    };

    $: props = {
        size: '5xl',
        direction: 'r',
        from: 'from-primary-500',
        to: 'to-accent-500',
    }
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Gradient Heading</h1>
        <p>Quickly add a gradient header with customizable size and gradient direction.</p>
        <CodeBlock language="javascript" code="{`<script>import {GradientHeading} from '@brainandbones/skeleton';</\script>`}"></CodeBlock>
    </header>

    <!-- Sandbox -->
    <section class="space-y-4">
		<div class="space-y-4 xl:space-y-0 xl:grid grid-cols-[2fr,1fr] gap-2">
			<!-- Example -->
			<Card class="space-y-4 flex justify-center items-center">
				<svelte:component
					this={GradientHeading}
                    size={props.size}
                    direction={props.direction}
                    from={props.from}
                    to={props.to}
				>Skeleton</svelte:component>
            </Card>
			<!-- Options -->
			<Card class="space-y-4">
                <!-- Size -->
				<label>
                    <span>Size</span>
                    <select name="size" id="size" bind:value={props.size}>
                        <option value="sm">sm</option>
                        <option value="md">md</option>
                        <option value="lg">lg</option>
                        <option value="xl">xl</option>
                        <option value="2xl">2xl</option>
                        <option value="3xl">3xl</option>
                        <option value="4xl">4xl</option>
                        <option value="5xl">5xl</option>
                        <option value="6xl">6xl</option>
                        <option value="7xl">7xl</option>
                        <option value="8xl">8xl</option>
                        <option value="9xl">9xl</option>
                    </select>
                </label>
                <!-- Direction -->
				<label>
                    <span>Direction</span>
                    <select name="direction" id="direction" bind:value={props.direction}>
                        <option value="t">t</option>
                        <option value="b">b</option>
                        <option value="l">l</option>
                        <option value="r">r</option>
                        <option value="tl">tl</option>
                        <option value="tr">tr</option>
                        <option value="bl">bl</option>
                        <option value="br">br</option>
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
			code={`<GradientHeading size=${props.size} direction="${props.direction}" from="${props.from}" to="${props.to}">Skeleton</GradientHeading>`}
		></CodeBlock>
	</section>
    
    <!-- Examples -->
    <!-- <section class="space-y-4">
        <Card class="space-y-4">
            <GradientHeading size="sm">Skeleton sm</GradientHeading>
            <GradientHeading size="md">Skeleton md</GradientHeading>
            <GradientHeading size="lg">Skeleton lg</GradientHeading>
            <GradientHeading size="xl">Skeleton xl</GradientHeading>
            <GradientHeading size="2xl">Skeleton 2xl</GradientHeading>
            <GradientHeading size="3xl">Skeleton 3xl</GradientHeading>
            <GradientHeading size="4xl">Skeleton 4xl</GradientHeading>
            <GradientHeading size="5xl">Skeleton 5xl</GradientHeading>
            <GradientHeading size="6xl">Skeleton 6xl</GradientHeading>
            <GradientHeading size="7xl">Skeleton 7xl</GradientHeading>
            <GradientHeading size="8xl">Skeleton 8xl</GradientHeading>
            <GradientHeading size="9xl">Skeleton 9xl</GradientHeading>
        </Card>
        <h4>Gradient Directions</h4>
        <Card class="space-y-4">
            <h6>Top to Bottom</h6>
            <GradientHeading direction="t">Hello Skeleton!</GradientHeading>
            <h6>Left to Right</h6>
            <GradientHeading direction="r">Hello Skeleton!</GradientHeading>
            <h6>Top-Right to Bottom-Left</h6>
            <GradientHeading size="4xl" direction="bl">Hello Skeleton!</GradientHeading>
        </Card>
        <h4>Colors</h4>
        <Card class="space-y-4">
            <h6>Rose-500 to Blue-500</h6>
            <GradientHeading from="from-rose-500" to="to-blue-500">Hello Skeleton!</GradientHeading>
        </Card>
    </section> -->
    
    <!-- Usage -->
    <!-- <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code="{`<GradientHeading from="from-rose-500" to="to-blue-500" size="6xl" direction="l">{Text}</GradientHeading>`}"></CodeBlock>
    </section> -->
    
    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>