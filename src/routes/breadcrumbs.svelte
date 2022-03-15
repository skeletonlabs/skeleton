<script lang="ts">

    import Breadcrumb from "$lib/Breadcrumb/Breadcrumb.svelte";

    // Docs
    import Card from "$lib/Card/Card.svelte";
    import Table from '$lib/_Table/Table.svelte';
    import CodeBlock from '$lib/_CodeBlock/CodeBlock.svelte';
    import Crumb from "$lib/Breadcrumb/Crumb.svelte";

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['styling', 'string', 'basic | outlined', 'basic', 'Set styling'],
            ['items', 'Items Object', '-', '-', 'Defines the breadcrumb items']
        ],
    };

    const tablePropsCrumb: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['link', 'string', '-', '-', 'Set the link'],
            ['currentPage', 'boolean', ' true | false', 'false', 'Set if current page (no trailing separator)'],
            ['inactive', 'boolean ', 'true | false', 'false', 'Set the crumb to inactive (no interaction/hover)'],
        ],
    };

    const items = [
        {text: 'Home', link: '/test', icon: ''},
        {text: 'The Helm', link: '/test', icon: null, disabled: true},
    ]
</script>

<h2 class="text-3xl font-bold mb-4">Breadcrumbs</h2>
<p class="text-base opacity-70 mb-4">Breadcrumbs allow for easy an easy peek into where in the site/section hierachy you are. It can be a useful component to display for sub-pages.</p>

<Card class="mb-4">
    <h3 class="mb-2 text-lg">Basic</h3>
    <div class="p-2">
            <Breadcrumb>
                <Crumb icon='☠️' link='/'>Home</Crumb>
                <Crumb link='/404'>The Helm</Crumb>
                <Crumb link='/404'>Quizzes</Crumb>
                <Crumb inactive currentPage>You are here!</Crumb>
            </Breadcrumb>
    </div>
</Card>

<Card class="mb-4">

    <h3 class="mb-2 text-lg">Predefined List Items</h3>
    <div class="p-4">
            <Breadcrumb items={items}>
            </Breadcrumb>
    </div>
</Card>

<Card class="mb-4">
    <h3 class="mb-2 text-lg">Outlined Style</h3>
    <div class="p-4">
            <Breadcrumb styling='outlined' >
                <Crumb link='/'>Home</Crumb>
                <Crumb link='/'>The Helm</Crumb>
                <Crumb currentPage inactive icon='X'>You are here!</Crumb>
            </Breadcrumb>
    </div>
</Card>

<Card class="mb-4">
    <h3 class="mb-2 text-lg">Crumb Icon</h3>
    <div class="p-4">
            <Breadcrumb styling='basic' >
                <Crumb link='/'>
                    <svelte:fragment slot="icon">
                        <img src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/cc.svg" alt="">
                    </svelte:fragment>
                    Home
                </Crumb>
                <Crumb link='/'>
                    <svelte:fragment slot="icon">
                    <img src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/atom.svg" alt="">
                    </svelte:fragment>
                    The Helm
                </Crumb>
                <Crumb currentPage inactive icon='X'>You are here!</Crumb>
            </Breadcrumb>
    </div>
</Card>

<h3 class="text-2xl font-bold my-4">Usage</h3>
<CodeBlock class="mb-4">
    {
        `import Breadcrumb from '@brainandbones/skeleton';\n
        <Breadcrumb separator='|'>
                <Crumb link='/'> <svelte:fragment> {icon} </svelte:fragment> Home </Crumb>
                <Crumb link='/404'> The Helm </Crumb>
                <Crumb link='/404'> Quizzes </Crumb>
                <Crumb inactive currentPage> You are here! </Crumb>
        </Breadcrumb>
        `}

</CodeBlock>


<!-- Properties -->
<h3 class="text-2xl font-bold my-4">Properties</h3>
<h4 class='m-2'>Breadcrumbs</h4>
<Table source="{tableProps}"></Table>
<h4 class='m-2'>Crumb Component</h4>
<Table source="{tablePropsCrumb}"></Table>
