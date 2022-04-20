<script lang="ts">

import Card from "$lib/Card/Card.svelte";
import RangeSlider from "$lib/RangeSlider/RangeSlider.svelte";
import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
import Table from "$lib/Table/Table.svelte";

let tickLabels = ['0','20', "40", "60", "80", "100"];
let ticks = ["╵", "╵", "╵", "╵", "╵", "╵"];

const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Required', 'Description'],
        data: [
            ['value', 'number','-', '0' , 'false', 'Get or set the value of the range slider'],
            ['min', 'number', '-' , '0' , 'false', 'Set the minimum value of the slider'],
            ['max', 'number', '-' , '10' , 'false', 'Set the maximum value of the slider'],
            ['step', 'number', '-', '1' , 'false', 'Set the step of the slider'],
            ['color', 'class', 'accent-{color}-{weight}', '-' , 'false', 'Specify the accent color of the slider (such as accent-{color}-500)'],
            ['size', 'string', 'sm | md | lg', 'md', 'false', 'Specify the accent color of the slider (such as accent-{color}-500)'],
            ['showValue', 'boolean', 'true | false', 'false', 'false' , 'Specify if value should be shown after the component'],
            ['showValueFront', 'boolean', 'true | false', 'false' , 'false', 'Specify if value should be shown before the component'],
            ['ticklist', 'string[]', '-', '-', 'false', 'Specify the array of strings to be shown below the component as ticks/labels'],
        ],
    };

</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Range Slider</h1>
		<p>TODO</p>
		<CodeBlock language="js" code={`<script>import {RangeSlider} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
	</header>

    <!-- Examples -->
	<section class="space-y-4">

        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
            
            <Card class="">
                <h4 class="mb-4">Default</h4>
                <RangeSlider />
            </Card>
            
            <Card class="">
                <h4 class="mb-4">Accent Color with Label</h4>
                <RangeSlider color="accent-primary-400" label="Range"/>
            </Card>
          
            <Card class="">
                <h4 class="mb-4">Value Label</h4>
                <RangeSlider color="accent-warning-400" label="Range" showValue/>
            </Card>
        
            <Card class="">
                <h4 class="mb-4">Tickmarks</h4>
                <RangeSlider tickmarks={ticks} color="accent-warning-400" label="Range" showValue/>
            </Card>
     
            <Card class="">
                <h4 class="mb-4">Tick Labels</h4>
                <RangeSlider tickmarks={tickLabels} color="accent-orange-400" max={100} label="Range" showValue/>
            </Card>
       
            <Card class="">
                <h4 class="mb-4">Disabled</h4>
                <RangeSlider disabled tickmarks={tickLabels} color="accent-orange-400" max={100} label="Range" showValue/>
            </Card>
        </div>

        <Card class="">
            <div class="space-y-4">
                <h4 class="mb-4">Sizes</h4>
                <RangeSlider color="accent-primary-400" label="Small" size="sm"/>
                <RangeSlider color="accent-primary-400" label="Medium" size="md"/>
                <RangeSlider color="accent-primary-400" label="Large" size="lg"/>
            </div>
        </Card>

    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <CodeBlock language="js" code={`let ticklabels = [0, 2, 4, 6, 8, 10];\nlet value = null;`}></CodeBlock>
        <CodeBlock language="html" code={`<RangeSlider color="accent-primary-200" min={0} max={10} step={1} tickmarks={ticklabels} showValue label="Slider" />`}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2 class="text-2xl font-bold">Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>
</div>