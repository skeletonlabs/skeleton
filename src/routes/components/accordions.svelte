<script lang="ts">
    import { writable } from "svelte/store";

    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Table from "$lib/Table/Table.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Avatar from '$lib/Avatar/Avatar.svelte';

    import AccordionGroup from '$lib/Accordion/AccordionGroup.svelte';
    import AccordionItem from '$lib/Accordion/AccordionItem.svelte';

    let activeStoreA = writable([]);
    let activeStoreB = writable([1,2]);
    let activeStoreC = writable([0]);

    const tablePropsGroup: any = {
        columns: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        data: [
            ['selected', 'any', '-', 'true', 'A svelte store that can be used to set the default opened accordions.'],
            ['multiple', 'boolean', 'false', 'false', 'If set to true, multiple accordion elements can be active at the same time.'],
            ['spacing', 'class', 'spacing-y-2', 'false', 'Set the spacing between accordion elements.'],
        ],
    };
    const tablePropsItem: any = {
        columns: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        data: [
            ['value', 'integer', '-', 'true', 'Set the selection value for the item, typically an index.'],
            ['hover', 'string', 'hover:bg-primary-500/10', 'false', 'Provide a style to set the hover color.'],
            ['spacing', 'string', 'space-y-0', 'false', 'Provide a style to set title and description vertical spacing.'],
            ['padding', 'string', 'p-2', 'false', 'Provide a style to set the description padding.'],
        ],
    };
    const tableSlots: any = {
        columns: ['Name', 'Description'],
        data: [
            ['lead', 'Optonal slot for providing a lead element, such as an icon.'],
            ['title', 'Required slot for providing the title content of the accordion item.'],
            ['description', 'Required slot for providing the description content of the accordion item.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Accordions</h2>
        <p>Accordions are useful for storing description that can be expanded, in a compact way.</p>
        <CodeBlock language="javascript" code={`<script>import {AccordionGroup, AccordionItem} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Examples -->
    <section class="space-y-4">
        <Card class="space-y-4">
            <pre class="bg-black/20 p-4">Values: {$activeStoreA.length ? $activeStoreA : 'None'}</pre>
            <AccordionGroup selected={activeStoreA}>
                <AccordionItem value={0}>
                    <svelte:fragment slot="title">Does Skeleton come with an Accordion component?</svelte:fragment>
                    <svelte:fragment slot="description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque nam deleniti rem incidunt.</p>
                    </svelte:fragment>
                </AccordionItem>
                <AccordionItem value={1}>
                    <svelte:fragment slot="title">What else do I need to know to build awesome web apps?</svelte:fragment>
                    <svelte:fragment slot="description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque nam deleniti rem incidunt.</p>
                    </svelte:fragment>
                </AccordionItem>
                <AccordionItem value={2}>
                    <svelte:fragment slot="title">What is the weather like today?</svelte:fragment>
                    <svelte:fragment slot="description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque nam deleniti rem incidunt.</p>
                    </svelte:fragment>
                </AccordionItem>
            </AccordionGroup>
        </Card>
        <!-- Multiple -->
        <h3>Multiple</h3>
        <Card class="space-y-4">
            <pre class="bg-black/20 p-4">Values: {$activeStoreB.length ? $activeStoreB : 'None'}</pre>
            <AccordionGroup selected={activeStoreB} multiple>
                <AccordionItem value={0}>
                    <svelte:fragment slot="title">Does Skeleton come with an Accordion component?</svelte:fragment>
                    <svelte:fragment slot="description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque nam deleniti rem incidunt, culpa nisi aperiam totam pariatur quae corrupti asperiores, molestiae ab, tempore alias iste et deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque nam deleniti rem incidunt, culpa nisi aperiam totam pariatur quae corrupti asperiores, molestiae ab, tempore alias iste et deserunt.</p>
                    </svelte:fragment>
                </AccordionItem>
                <AccordionItem value={1}>
                    <svelte:fragment slot="title">What else do I need to know to build awesome web apps?</svelte:fragment>
                    <svelte:fragment slot="description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque nam deleniti rem incidunt, culpa nisi aperiam totam pariatur quae corrupti asperiores, molestiae ab, tempore alias iste et deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque nam deleniti rem incidunt, culpa nisi aperiam totam pariatur quae corrupti asperiores, molestiae ab, tempore alias iste et deserunt.</p>
                    </svelte:fragment>
                </AccordionItem>
                <AccordionItem value={2}>
                    <svelte:fragment slot="title">What is the weather like today?</svelte:fragment>
                    <svelte:fragment slot="description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque nam deleniti rem incidunt, culpa nisi aperiam totam pariatur quae corrupti asperiores, molestiae ab, tempore alias iste et deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque nam deleniti rem incidunt, culpa nisi aperiam totam pariatur quae corrupti asperiores, molestiae ab, tempore alias iste et deserunt.</p>
                    </svelte:fragment>
                </AccordionItem>
            </AccordionGroup>
        </Card>
        <!-- Customized -->
        <h3>Customized</h3>
        <section class="border border-surface-500/10 p-4 rounded-xl space-y-4">
            <pre class="bg-black/20 p-4">Values: {$activeStoreC.length ? $activeStoreC : 'None'}</pre>
            <AccordionGroup selected={activeStoreC} spacing="space-y-4">
                <AccordionItem value={0} padding="p-0" spacing="space-y-4">
                    <svelte:fragment slot="lead">
                        <svg class="w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path class="fill-primary-500" d="M567.5 229.7C577.6 238.3 578.9 253.4 570.3 263.5C561.7 273.6 546.6 274.9 536.5 266.3L512 245.5V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V245.5L39.53 266.3C29.42 274.9 14.28 273.6 5.7 263.5C-2.875 253.4-1.634 238.3 8.473 229.7L272.5 5.7C281.4-1.9 294.6-1.9 303.5 5.7L567.5 229.7zM144 464H192V312C192 289.9 209.9 272 232 272H344C366.1 272 384 289.9 384 312V464H432C449.7 464 464 449.7 464 432V204.8L288 55.47L112 204.8V432C112 449.7 126.3 464 144 464V464zM240 464H336V320H240V464z"/></svg>
                    </svelte:fragment>
                    <svelte:fragment slot="title">
                        <h4>Icon and Heading</h4>
                    </svelte:fragment>
                    <svelte:fragment slot="description">
                        <Card><p>The description for the first element.</p></Card>
                    </svelte:fragment>
                </AccordionItem>
                <AccordionItem value={1} padding="p-0" spacing="space-y-4">
                    <svelte:fragment slot="lead"><Avatar size="sm" src="https://i.pravatar.cc/" /></svelte:fragment>
                    <svelte:fragment slot="title">
                        <h4>Avatar and Heading</h4>
                    </svelte:fragment>
                    <svelte:fragment slot="description">
                        <Card><p>The description for the second element.</p></Card>
                    </svelte:fragment>
                </AccordionItem>
                <AccordionItem value={2} padding="p-0" spacing="space-y-4">
                    <svelte:fragment slot="lead">
                        <Avatar initials="1" size="sm" background="bg-accent-500" />
                    </svelte:fragment>
                    <svelte:fragment slot="title">
                        <h4>Numeral and Heading</h4>
                    </svelte:fragment>
                    <svelte:fragment slot="description">
                        <Card><p>The description for the third element.</p></Card>
                    </svelte:fragment>
                </AccordionItem>
            </AccordionGroup>
        </section>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="js" code={`let storeAccordion = writable([1]);`.trim()}></CodeBlock>
        <CodeBlock language="html" code={`
<AccordionGroup selected={storeAccordion} multiple>
    <AccordionItem value={0}>
        <svelte:fragment slot="title">Title 1</svelte:fragment>
        <svelte:fragment slot="description">Description 1</svelte:fragment>
    </AccordionItem>
    <AccordionItem value={1}>
        <svelte:fragment slot="title">Title 2</svelte:fragment>
        <svelte:fragment slot="description">Description 2</svelte:fragment>
    </AccordionItem>
    <AccordionItem value={2}>
        <svelte:fragment slot="title">Title 3</svelte:fragment>
        <svelte:fragment slot="description">Description 3</svelte:fragment>
    </AccordionItem>
</AccordionGroup>
`.trim()}></CodeBlock>
    </section>

    <!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
        <h4>Group</h4>
        <Table source="{tablePropsGroup}"></Table>
        <h4>Item</h4>
		<Table source="{tablePropsItem}"></Table>
	</section>
	
	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<Table source="{tableSlots}"></Table>
	</section>
    
</div>