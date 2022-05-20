<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Table from "$lib/Table/Table.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Divider from '$lib/Divider/Divider.svelte';
    import Drawer from '$lib/Drawer/Drawer.svelte';

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        data: [
            ['visible', 'writable(boolean)', '-', 'true', 'Provide a boolean store to control open/closed state.'],
            ['fixed', 'boolean', 'false', 'false', 'Inline by default, fixed when enabled and overlays on small screens.'],
            // ['position', 'string', 'left|right', 'false', 'Defines which side of the screen the drawer operates.'],
            ['border', 'string', 'border-r border-surface-200 dark:border-surface-800', 'false', 'Provide classes to customize the border style.'],
        ],
    };
    const tableSlots: any = {
        columns: ['Name', 'Description'],
        data: [
            ['header', 'Reserved space for header content, such as branding.'],
            ['main', 'Reserved space for navigation elements.'],
            ['footer', 'Reserved space for footer content, such as legal or copyrights.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Drawers</h2>
        <p>Displays navigation bar, with optional overlay options.</p>
        <CodeBlock language="javascript" code={`import { Drawer } from '@brainandbones/skeleton';`}></CodeBlock>
    </header>

    <!-- Examples -->
    <Card class="space-y-4">
        <Drawer class="mx-auto">
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
		<Table source="{tableProps}"></Table>
	</section>
	
	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<Table source="{tableSlots}"></Table>
	</section>
    
</div>
