<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import DataTable from "$lib/Table/DataTable.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Divider from '$lib/Divider/Divider.svelte';
    import Drawer from '$lib/Drawer/Drawer.svelte';

    const tableProps: any = {
        headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        source: [
            ['visible', 'Writable(boolean)', '-', '&check;', 'Provide a boolean store to control open/closed state.'],
            ['fixed', 'string', 'undefined | left | right', '-', 'When undefined shows inline. Fixed to the left/right on mobile when specified.'],
            ['background', 'string', 'bg-surface-50 dark:bg-surface-900', '-', 'Provide class to set drawer background color.'],
            ['border', 'string', 'border-r border-surface-200 dark:border-surface-800', '-', 'Provide classes to customize the border style.'],
            ['backdrop', 'string', 'bg-white/50 dark:bg-black/50', '-', 'Provide class to set backdrop background color.'],
        ],
    };
    const tableSlots: any = {
        headings: ['Name', 'Description'],
        source: [
            ['header', 'Reserved space for header content, such as branding.'],
            ['main', 'Reserved space for navigation elements.'],
            ['footer', 'Reserved space for footer content, such as legal links or copyright info.'],
        ],
    };
</script>

<section class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Drawers</h1>
        <p>Displays navigation bar, with optional overlay options.</p>
        <CodeBlock language="javascript" code={`import { Drawer } from '@brainandbones/skeleton';`}></CodeBlock>
    </header>

    <!-- Example -->
    <Card class="p-1">
        <div class="flex-none">
            <Drawer class="h-[400px]">
                <svelte:fragment slot="header">
                    <p class="p-4 text-center">(header)</p>
                    <Divider />
                </svelte:fragment>
                <svelte:fragment slot="main">
                    <p class="p-4 text-center">(main)</p>
                </svelte:fragment>
                <svelte:fragment slot="footer">
                    <Divider />
                    <p class="p-4 text-center">(footer)</p>
                </svelte:fragment>
            </Drawer>
        </div>
    </Card>
    
    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="typescript" code={`
const drawer: Writable<boolean> = writable(false);
const drawerOpen: any = () => { drawer.set(true); }
const drawerClose: any = () => { drawer.set(false); }
        `.trim()}></CodeBlock>
        <CodeBlock language="html" code={`<Button on:click={drawerOpen}>Menu</Button>`}></CodeBlock>
        <CodeBlock language="html" code={`
<Drawer visible={drawer}>
<svelte:fragment slot="header">
    <p class="p-4 text-center">(header slot)</p>
    <Divider />
</svelte:fragment>
<svelte:fragment slot="main">
    <p class="p-4 text-center">(main slot)</p>
</svelte:fragment>
<svelte:fragment slot="footer">
    <Divider />
    <p class="p-4 text-center">(footer slot)</p>
</svelte:fragment>
</Drawer>
        `.trim()}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <DataTable headings="{tableProps.headings}" source="{tableProps.source}"></DataTable>
    </section>
    
    <!-- Slots -->
    <section class="space-y-4">
        <h2>Slots</h2>
        <DataTable headings="{tableSlots.headings}" source="{tableSlots.source}"></DataTable>
    </section>

</section>
