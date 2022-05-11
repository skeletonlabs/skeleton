<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Table from "$lib/Table/Table.svelte";
    import Card from "$lib/Card/Card.svelte";

    import AccordionGroup from '$lib/Accordion/AccordionGroup.svelte';
    import Accordion from '$lib/Accordion/Accordion.svelte';
    import Avatar from '$lib/Avatar/Avatar.svelte';

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        data: [
            ['name', '-', '-', '-', '...'],
        ],
    };
    const tableSlots: any = {
        columns: ['Name', 'Description'],
        data: [
            ['name', '...'],
        ],
    };

    import { writable } from "svelte/store";

    let active = writable([1, 2]);

    let icon = `<svg class="w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path class="fill-primary-500" d="M567.5 229.7C577.6 238.3 578.9 253.4 570.3 263.5C561.7 273.6 546.6 274.9 536.5 266.3L512 245.5V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V245.5L39.53 266.3C29.42 274.9 14.28 273.6 5.7 263.5C-2.875 253.4-1.634 238.3 8.473 229.7L272.5 5.7C281.4-1.9 294.6-1.9 303.5 5.7L567.5 229.7zM144 464H192V312C192 289.9 209.9 272 232 272H344C366.1 272 384 289.9 384 312V464H432C449.7 464 464 449.7 464 432V204.8L288 55.47L112 204.8V432C112 449.7 126.3 464 144 464V464zM240 464H336V320H240V464z"/></svg>`;
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Accordions</h2>
        <p>Accordions are useful for expanding a section to reveal information.</p>
        <CodeBlock language="javascript" code={`<script>import {Accordion} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card class="space-y-4">
        <AccordionGroup selected={active}>
            <Accordion index={0}>
                <svelte:fragment slot="label">Label</svelte:fragment>
                <svelte:fragment slot="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </svelte:fragment>
            </Accordion>

            <Accordion index={1}>
                <svelte:fragment slot="lead"><div>{@html icon}</div></svelte:fragment>
                <svelte:fragment slot="label">Label with lead slot</svelte:fragment>
                <svelte:fragment slot="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </svelte:fragment>
            </Accordion>

            <Accordion index={2}>
                <svelte:fragment slot="label">Label</svelte:fragment>
                <svelte:fragment slot="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </svelte:fragment>
            </Accordion>
        </AccordionGroup>
    </Card>
    <p>{$active}</p>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code={`<div>UsageExample</div>`.trim()}></CodeBlock>
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