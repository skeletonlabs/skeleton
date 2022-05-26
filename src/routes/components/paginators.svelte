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
        offset: 0,
        limit: 5,
        size: content.source.length,
        amounts: [1,2,5,content.source.length],
    };

    // Event Handlers
    function onPageChange(e: any): void { console.log('event:page', e.detail); }
    function onAmountChange(e: any): void { console.log('event:amount', e.detail); }

    // Props
    const tableProps: any = {
        headings: ['Prop', 'Type', 'Default', 'Description'],
        source: [
            {prop: 'offset', type: 'number', default: '0', desc: 'Index of the first list item to display.'},
            {prop: 'limit', type: 'number', default: '5', desc: 'Current number of items to display.'},
            {prop: 'size', type: 'number', default: '10', desc: 'The total size (length) of your source content.'},
            {prop: 'amounts', type: '<code>number[]</code>', default: '[1,5,10,50,100]', desc: 'List of amounts available to the select input.'},
        ],
    };
    const tablePropsDesign: any = {
        headings: ['Prop', 'Type', 'Default', 'Description'],
        source: [
            {prop: 'justify', type: 'string', default: 'justify-between', desc: 'Provide a class to set flexbox justification.'},
            {prop: 'text', type: 'string', default: 'text-xs', desc: 'Provide a class to style page context text.'},
            {prop: 'select', type: 'string', default: '-', desc: 'Provide one or more classes to style the amounts select element.'},
            {prop: 'variant', type: 'string', default: 'filled-primary', desc: 'Provide a <a href="/components/buttons">button variant</a> option.'},
            {prop: 'rounded', type: 'string', default: '-', desc: 'Provide a class to overwrite the button rounding style.'},
        ],
    };

    // Events
    const tableEvents: any = {
        headings: ['Name', 'Description'],
        source: [
            {name: 'amount', desc: 'Fires when the amount selection input changes. Provides the selected amount value.'},
            {name: 'page', desc: 'Fires when the next/back buttons are pressed. Provides the new offset value.'},
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
                <Divider />
                {/each}
            </List>
            <Paginator
                bind:offset={page.offset}
                bind:limit={page.limit}
                bind:size={page.size}
                bind:amounts={page.amounts}
                on:page={onPageChange}
                on:amount={onAmountChange}
            ></Paginator>
        </Card>
        <Card>
            <DataTable headings={content.headings} source={contentSliced}></DataTable>
            <Paginator
                bind:offset={page.offset}
                bind:limit={page.limit}
                bind:size={page.size}
                bind:amounts={page.amounts}
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
    offset: 0,
    limit: 5,
    size: source.length
    amounts: [1,2,5,10],
};
        `.trim()}></CodeBlock>
        <CodeBlock language="typescript" code={`
function onPageChange(e: any): void { console.log('event:page', e.detail); }
function onAmountChange(e: any): void { console.log('event:amount', e.detail); }
        `.trim()}></CodeBlock>
        <CodeBlock language="html" code={`
<Paginator
    bind:offset={page.offset}
    bind:limit={page.limit}
    bind:size={page.size}
    bind:amounts={page.amounts}
    on:page={onPageChange}
    on:amount={onAmountChange}
></Paginator>
        `.trim()}></CodeBlock>
        <h4>Utilizing Pagination</h4>
        <p>Once your paginator component is setup you'll need to limit your content. See a minimal example below using the Javascript slice method.</p>
        <CodeBlock language="typescript" code={`const source: any[] = [ /* ... */ ]`.trim()}></CodeBlock>
        <CodeBlock language="typescript" code={`
$: sourcePaginated = source.slice(
    page.offset * page.limit, // index of the first item
    page.offset * page.limit + page.limit // index of the last item
);
        `.trim()}></CodeBlock>
        <CodeBlock language="html" code={`
<ul>
    {#each sourcePaginated as row}
    <li>{row}</li>
    {/each}
</ul>
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
