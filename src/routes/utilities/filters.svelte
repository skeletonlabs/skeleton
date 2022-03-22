
<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Avatar from "$lib/Avatar/Avatar.svelte";

    import {filter} from "$lib/Filters/Filters";
    let placeholder = "https://i.pravatar.cc/160";
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Filters</h2>
        <p>Bring life to your elements by applying filters.</p>
    </header>

    <!-- Examples -->
    <section class="space-y-4">

        <h4>Colors</h4>
        <Card class="space-y-4">
           <div class='flex justify-items-start'>
                <div class='m-2'>
                    <p class='m-2'>Emerald</p>
                    <img use:filter={'Emerald'} src={placeholder} alt="">
                </div>
               
                <div class='m-2'>
                    <p class='m-2'>Blue Night</p>
                    <img use:filter={'BlueNight'} src={placeholder} alt="">
                </div>
           
           </div>
        </Card>

    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h3 class="text-2xl font-bold">Usage</h3>
        <p>Filters can be applied in two ways. The first is by specifying the filter on the element by using an Action. Using the filter this way, a hidden element with the used filters will
            be added to the page automatically. You can also apply a filter on an element by importing the filter, and adding the filter component(s) to the page yourself.</p>
        <CodeBlock language="javascript" code={`<script>import {filter} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
        <CodeBlock language="html" code={`<img use:filter={'filterName'} src='imageSource'>`}></CodeBlock>
        <h4>OR</h4>
        <CodeBlock language="javascript" code={`<script>import FilterName from '@brainandbones/skeleton';</\script>`}></CodeBlock>
        <CodeBlock language="html" code={`<FilterName />\n<img style='filter: url(#FilterName)' src='imageSource'>`}></CodeBlock>
    </section>
    
</div>