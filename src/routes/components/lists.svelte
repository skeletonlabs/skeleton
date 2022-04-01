<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import ListGroup from "$lib/Lists/ListGroup.svelte";
    import ListItem from "$lib/Lists/ListItem.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Table from "$lib/_Table/Table.svelte";
    import {writable} from 'svelte/store'
import Divider from "$lib/Divider/Divider.svelte";

    let navSingle = writable('A');
    let navMultiple = writable(['A', 'B']);
    
    const svgHeart: string = '<svg class="fill-primary-500 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 400V464C416 490.5 394.5 512 368 512H320V464C320 455.2 312.8 448 304 448C295.2 448 288 455.2 288 464V512H224V464C224 455.2 216.8 448 208 448C199.2 448 192 455.2 192 464V512H144C117.5 512 96 490.5 96 464V400C96 399.6 96 399.3 96.01 398.9C37.48 357.8 0 294.7 0 224C0 100.3 114.6 0 256 0C397.4 0 512 100.3 512 224C512 294.7 474.5 357.8 415.1 398.9C415.1 399.3 416 399.6 416 400V400zM160 192C124.7 192 96 220.7 96 256C96 291.3 124.7 320 160 320C195.3 320 224 291.3 224 256C224 220.7 195.3 192 160 192zM352 320C387.3 320 416 291.3 416 256C416 220.7 387.3 192 352 192C316.7 192 288 220.7 288 256C288 291.3 316.7 320 352 320z"/></svg>';
    const svgEllipsis: string = `<svg class="fill-surface-500 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"/></svg>`;

    const tablePropsGroup: any = {
        columns: ['Prop', 'Type', 'Default', 'Description'],
        data: [
            ['role', 'string', 'ul', 'Defines the wrapping list element.'],
            ['active', 'Writable', '-', 'Provides a data store to track active selection.'],
            ['multiple', 'boolean', 'false', 'Declare if active is an array with multiple selection allowed.'],
            ['spacing', 'string', '-', 'Set the spacing style.'],
            ['hover', 'string', 'hover:bg-primary-500/10', 'Provide a background class for the hovered items.'],
            ['accent', 'string', '!bg-primary-500', 'Provide a background class for the active highlighted item.'],
        ],
    };

    const tablePropsItem: any = {
        columns: ['Prop', 'Type', 'Default', 'Description'],
        data: [
            ['href', 'string', '-', `The list item's destination URL.`],
            ['value', 'any', '-', `The list item's selectable value.`],
        ],
    };
    
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Lists</h2>
        <p class='space-y-4'>Lists are continuous, vertical indexes of text options.</p>
        <CodeBlock language="js" code={`<script>import {ListGroup, ListItem} from '@brainandbones/skeleton';`}></CodeBlock>
    </header>

    <!-- Reference -->
    <!-- <section class="space-y-4">
        <h4>Reference</h4>
        <Card class="grid grid-cols-4 gap-4">
            <section>
                <h4>Unordered List</h4>
                <ul>
                    <li>Item A</li>
                    <li>Item B</li>
                    <li>Item C</li>
                </ul>
            </section>
            <section>
                <h4>Ordered List</h4>
                <ol>
                    <li>Item A</li>
                    <li>Item B</li>
                    <li>Item C</li>
                </ol>
            </section>
            <section>
                <h4>Description List</h4>
                <dl>
                    <div>
                        <dt>Item A</dt>
                        <dd>Details about Item A</dd>
                    </div>
                    <div>
                        <dt>Item B</dt>
                        <dd>Details about Item B</dd>
                    </div>
                    <div>
                        <dt>Item C</dt>
                        <dd>Details about Item C</dd>
                    </div>
                </dl>
            </section>
            <section>
                <h4>Nav List</h4>
                <nav>
                    <a href="/" class="block">Item A</a>
                    <a href="/" class="block">Item B</a>
                    <a href="/" class="block">Item C</a>
                </nav>
            </section>
        </Card>
    </section> -->

    <!-- Roles -->
    <section class="space-y-4">
        <h4>Roles</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <section class="space-y-4">
                <Card class="space-y-4">
                    <h6>Unordered</h6>
                    <ListGroup role="ul">
                        {#each ['A', 'B', 'C'] as v}
                        <ListItem>
                            <svelte:fragment slot="lead">{@html svgHeart}</svelte:fragment>
                            Item {v}
                            <svelte:fragment slot="trail">{@html svgEllipsis}</svelte:fragment>
                        </ListItem>
                        {/each}
                    </ListGroup>
                </Card>
            </section>
            <section class="space-y-4">
                <Card class="space-y-4">
                    <h6>Ordered</h6>
                    <ListGroup role="ol">
                        {#each ['A', 'B', 'C'] as v, i}
                        <ListItem>
                            <svelte:fragment slot="lead"><div class="circle">{i+1}.</div></svelte:fragment>
                            Item {v}
                        </ListItem>
                        {/each}
                    </ListGroup>
                </Card>
            </section>
            <section class="space-y-4">
                <Card class="space-y-4">
                    <h6>Description</h6>
                    <ListGroup role="dl">
                        {#each ['A', 'B'] as v, i}
                        <ListItem>
                            <svelte:fragment slot="dt">Item {v}</svelte:fragment>
                            <svelte:fragment slot="dd"><p>Description for {v}</p></svelte:fragment>
                        </ListItem>
                        {/each}
                    </ListGroup>
                </Card>
            </section>
        </div>
    </section>

    <!-- Navigation -->
    <section class="space-y-4">
        <h4>Navigation</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <section class="space-y-4">
                <Card class="space-y-4">
                    <h6>Anchor + Dividers + Comfortable</h6>
                    <ListGroup role="nav" active={navSingle} spacing="comfortable">
                        <ListItem href="/">Page A</ListItem>
                        <Divider />
                        <ListItem href="/">Page B</ListItem>
                        <Divider />
                        <ListItem href="/">Page C</ListItem>
                    </ListGroup>
                </Card>
            </section>
            <section class="space-y-4">
                <Card class="space-y-4">
                    <h6>Select (single)</h6>
                    <ListGroup role="nav" active={navSingle}>
                        <ListItem value={'A'}>Item A</ListItem>
                        <ListItem value={'B'}>Item B</ListItem>
                        <ListItem value={'C'}>Item C</ListItem>
                    </ListGroup>
                    <CodeBlock language="html" code={$navSingle}></CodeBlock>
                </Card>
            </section>
            <section class="space-y-4">
                <Card class="space-y-4">
                    <h6>Select (multiple)</h6>
                    <ListGroup role="nav" active={navMultiple} multiple accent="!bg-accent-500" hover="hover:bg-accent-500/10">
                        <ListItem value={'A'}>Item A</ListItem>
                        <ListItem value={'B'}>Item B</ListItem>
                        <ListItem value={'C'}>Item C</ListItem>
                    </ListGroup>
                    <CodeBlock language="html" code={$navMultiple.join(', ')}></CodeBlock>
                </Card>
            </section>
        </div>
    </section>

    <!-- Usage -->
    <section class='space-y-4'>
        <h2>Usage</h2>
        <CodeBlock language="html" code={`
<ListGroup role="ul" active={store} multiple>
    <ListItem>Item A</ListItem>
    <ListItem>Item B</ListItem>
    <ListItem>Item C</ListItem>
</ListGroup>
        `.trim()}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class='space-y-4'>
        <h2>Properties</h2>
        <h4>List Group</h4>
        <Table source="{tablePropsGroup}"></Table>
        <h4>(Nav) List Item</h4>
        <Table source="{tablePropsItem}"></Table>
    </section>

</div>

<style lang="postcss">
    .circle { @apply bg-primary-500 text-xs w-7 h-7 aspect-square text-center flex justify-center items-center rounded-full; }
</style>