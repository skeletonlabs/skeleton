<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Table from "$lib/Table/Table.svelte";
    import Alert from "$lib/Alert/Alert.svelte";
    import RangeSlider from "$lib/RangeSlider/RangeSlider.svelte";

    let valueA: number = 5;
    let valueB: number = 50;

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        data: [
            ['id', 'string', '(unique id)' , 'false', 'Provide a unique input ID.'],
            ['name', 'string', '(match id)' , 'false', 'Provide a unique input name.'],
            ['min', 'number', '0' , 'false', 'Set the input minimum range.'],
            ['max', 'number', '10' , 'false', 'Set the input maximum range.'],
            ['step', 'number', '1' , 'false', 'Set the input step offset.'],
            ['value', 'number', '0' , 'false', 'Set the current input value.'],
            ['label', 'string', '-' , 'false', 'Provide an input label.'],
            ['ticked', 'boolean', 'false' , 'false', 'Enable to show tickmarks.'],
            ['accent', 'string', 'accent-primary-500' , 'false', 'Provide a class to set the input accent color.'],
        ],
    };
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Range Slider</h1>
		<p>Capture input from a range of values, including optional ticks.</p>
		<CodeBlock language="js" code={`import { RangeSlider } from '@brainandbones/skeleton';`}></CodeBlock>
	</header>

    <!-- Examples -->
	<section class="space-y-4">
        <Card class="space-y-4">
            <RangeSlider bind:value={valueA} />
            <RangeSlider bind:value={valueA} accent="accent-accent-500" />
            <RangeSlider bind:value={valueA} accent="accent-warning-500" />
        </Card>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <Card class="space-y-4">
                <RangeSlider label="Labeled" bind:value={valueA} />
            </Card>
            <Card class="space-y-4">
                <RangeSlider disabled label="Disabled" />
            </Card>
            <Card class="space-y-4">
                <RangeSlider label="Ticked" bind:value={valueA} ticked />
            </Card>
            <Card class="space-y-4">
                <RangeSlider label="Stepped" max={100} bind:value={valueB} step={5} ticked />
            </Card>
        </div>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <CodeBlock language="typescript" code={`let myValue: number = 50;`}></CodeBlock>
        <CodeBlock language="html" code={`<RangeSlider label="Skeleton" max={100} step={5} bind:value={myValue} accent="accent-primary-500" ticked />`}></CodeBlock>
    </section>


    <!-- Properties -->
    <section class="space-y-4">
        <h2 class="text-2xl font-bold">Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

    <!-- Warning: Cross-Browser -->
    <Alert background="bg-warning-500" visible={true} duration={0}>
        <svelte:fragment slot="title">Cross-Browser Support</svelte:fragment>
        <svelte:fragment slot="message">Skeleton utilizes <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range" target="_blank" class="!text-white">native HTML range inputs</a>. Browser support is mixed for <a class="!text-white" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range" target="_blank">native datalist element</a>, which generates tickmarks. Additionally, some browser (ex: Chrome) alter the track color to ensure contrast between the track and meter. Please keep accessibility in mind when utilize this component.</svelte:fragment>      
    </Alert>
</div>