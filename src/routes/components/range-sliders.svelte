<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Table from "$lib/Table/Table.svelte";
    import Alert from "$lib/Alert/Alert.svelte";
    import RangeSlider from "$lib/RangeSlider/RangeSlider.svelte";

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
            ['accent', 'string', 'accent-accent-500' , 'false', 'Provide a class to set the input accent color.'],
            ['height', 'string', '-' , 'false', 'Provide a class to set the input height.'],
        ],
    };
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Range Slider</h1>
		<p>Capture input from a range of values, including optional ticks.</p>
		<CodeBlock language="js" code={`<script>import {RangeSlider} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
	</header>

    <!-- Examples -->
	<section class="space-y-4">
        <Card class="space-y-4">
            <RangeSlider value={5} />
            <RangeSlider value={5} accent="accent-primary-500"/>
            <RangeSlider value={5} accent="accent-warning-500"/>
            <RangeSlider value={5} accent="accent-yellow-500"/>
        </Card>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <Card class="space-y-4">
                <RangeSlider value={5} label="Labeled"/>
            </Card>
            <Card class="space-y-4">
                <RangeSlider accent="accent-primary-500" value={5} label="Ticked" ticked/>
            </Card>
            <Card class="space-y-4">
                <RangeSlider accent="accent-warning-500" max={100} value={50} step={5} label="Ticked with Steps" ticked/>
            </Card>
            <Card class="space-y-4">
                <RangeSlider max={100} value={50} step={5} disabled label="Disabled" ticked/>
            </Card>
        </div>
        <Card class="space-y-4">
            <h4>Height</h4>
            <RangeSlider label="Small" height="h-[3px]"/>
            <RangeSlider accent="accent-primary-500" label="Medium" height="h-[6px]"/>
            <RangeSlider accent="accent-warning-500" label="Large" height="h-[9px]"/>
        </Card>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <CodeBlock language="html" code={`<RangeSlider label="Skeleton" max={100} value={50} step={5} accent="accent-orange-500" ticked/>`}></CodeBlock>
    </section>

     <!-- Warning -->
     <Alert visible={true} duration={0}>
        <svelte:fragment slot="title">Cross-Browser Support</svelte:fragment>
        <svelte:fragment slot="message">Please note that some browsers may not fully support tickmarks, which are generated using a datalist element. <a class="!text-white" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range" target="_blank">Review support on MDN.</a></svelte:fragment>      
    </Alert>


    <!-- Properties -->
    <section class="space-y-4">
        <h2 class="text-2xl font-bold">Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>
</div>