<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Card from "$lib/Card/Card.svelte";
    import List from '$lib/List/List.svelte';
    import ListItem from '$lib/List/ListItem.svelte';
    import Divider from '$lib/Divider/Divider.svelte';
    import DataTable from '$lib/Table/DataTable.svelte';
    import Paginator from '$lib/Paginator/Paginator.svelte';

    // Content
    const content: any = {
        headings: ['Positions', 'Name', 'Weight', 'Symbol'],
        source: [
            { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
            { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
            { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
            { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
            { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
            { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
            { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
            { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
            { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
            { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        ]
    };
    $: contentSliced = content.source.slice(
        page.offset*page.limit,
        page.offset*page.limit+page.limit
    );
    const page: any = {
        amounts: [1,2,5,content.source.length],
        limit: 5,
        offset: 0,
        size: content.source.length
    };

    // Event Handlers
    function onPageChange(e: any): void { console.log('event:page', e.detail); }
    function onAmountChange(e: any): void { console.log('event:amount', e.detail); }

    // Props
    const tableProps: any = {
        headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        source: [
            {prop: 'amounts', type: 'number[]', default: '[1,5,10,50,100]', req: '-', desc: 'List of possible amounts of items users can select.'},
            {prop: 'limit', type: 'number', default: '5', req: '&check;', desc: 'Limit how many items per page.'},
            {prop: 'offset', type: 'number', default: '0', req: '&check;', desc: 'The starting item starting index.'},
            {prop: 'size', type: 'number', default: '10', req: '&check;', desc: 'A count of the total number of items available.'},
        ],
    };
    const tablePropsDesign: any = {
        headings: ['Prop', 'Type', 'Default', 'Description'],
        source: [
            {prop: 'justify', type: 'string', default: 'justify-between', desc: 'Provide a class to set justification.'},
            {prop: 'text', type: 'string', default: 'text-xs', desc: 'Provide a class to style page context text.'},
            {prop: 'select', type: 'string', default: '-', desc: 'Provide one or more classes to style the amounts select element.'},
            {prop: 'variant', type: 'string', default: 'filled-primary', desc: 'Provide button variant reference. See button documentation for all options.'},
            {prop: 'rounded', type: 'string', default: '-', desc: 'Provide a class to set the button rounding style.'},
        ],
    };

    // Events
    const tableEvents: any = {
        headings: ['Name', 'Description'],
        source: [
            {name: 'amount', desc: 'Fires when the amount selection changes. Provides the new amount value.'},
            {name: 'page', desc: 'Fires when the next/back buttons are pressed. Provides the new item index offset.'},
        ],
    }
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Paginators</h2>
        <p>Navigate between multiple pages of content.</p>
        <CodeBlock language="javascript" code={`import { Paginator } from '@brainandbones/skeleton';`}></CodeBlock>
    </header>

    <!-- Examples -->
    <section class="space-y-4">
        <Card class="space-y-4">
            <List>
                {#each contentSliced as e, i}
                <ListItem>{e.name}</ListItem>
                {#if i < contentSliced.limit-1}<Divider />{/if}
                {/each}
            </List>
            <Paginator
                bind:amounts={page.amounts}
                bind:limit={page.limit}
                bind:offset={page.offset}
                bind:size={page.size}
                on:page={onPageChange}
                on:amount={onAmountChange}
            ></Paginator>
        </Card>
        <Card>
            <DataTable headings={content.headings} source={contentSliced}></DataTable>
            <Paginator
                bind:amounts={page.amounts}
                bind:limit={page.limit}
                bind:offset={page.offset}
                bind:size={page.size}
                on:page={onPageChange}
                on:amount={onAmountChange}
            ></Paginator>
        </Card>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="typescript" code={`
const page: any = {
    amounts: [1,2,5,10],
    limit: 5,
    offset: 0,
    size: source.length
};
        `.trim()}></CodeBlock>
        <CodeBlock language="typescript" code={`
function onPageChange(e: any): void { console.log('event:page', e.detail); }
function onAmountChange(e: any): void { console.log('event:amount', e.detail); }
        `.trim()}></CodeBlock>
        <CodeBlock language="html" code={`
<Paginator
    bind:amounts={page.amounts}
    bind:limit={page.limit}
    bind:offset={page.offset}
    bind:size={page.size}
    on:page={onPageChange}
    on:amount={onAmountChange}
></Paginator>
        `.trim()}></CodeBlock>
    </section>

    <!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} ></DataTable>
		<DataTable headings={tablePropsDesign.headings} source={tablePropsDesign.source} ></DataTable>
	</section>

    <!-- Events -->
	<section class="space-y-4">
		<h2>Events</h2>
		<DataTable headings={tableEvents.headings} source={tableEvents.source} ></DataTable>
	</section>
    
</div>
