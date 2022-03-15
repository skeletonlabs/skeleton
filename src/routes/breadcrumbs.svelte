<script lang="ts">

    import Breadcrumb from "$lib/Breadcrumb/Breadcrumb.svelte";

    // Docs
    import Card from "$lib/Card/Card.svelte";
    import Table from '$lib/_Table/Table.svelte';
    import CodeBlock from '$lib/_CodeBlock/CodeBlock.svelte';
    import BreadcrumbItem from "$lib/Breadcrumb/BreadcrumbItem.svelte";

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['separator', 'string', '-', '>', 'Set a string separator'],
            ['items', 'Items Object', '-', '-', 'Defines the breadcrumb items']
        ],
    };

    const tablePropsItem: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['text', 'string', '-', '>', 'Set a display text'],
            ['link', 'string', '-', '>', 'Set the href link'],
            ['icon', 'string | ?? (TODO) ', '-', '-', 'Set an icon'],
            ['disabled', 'boolean', 'true | false', 'false', 'Set disabled'],
        ],
    };

    const items = [
        {text: 'Home', link: '/test', icon: ''},
        {text: 'The Helm', link: '/test', icon: null, disabled: true},
    ]
</script>

<h2 class="text-3xl font-bold mb-4">Breadcrumbs</h2>

<Card class="mb-4">
    <h3 class="mb-2 text-lg">Basic</h3>
    <div class="p-4">
            <Breadcrumb separator='|'>
                <BreadcrumbItem icon='☠️' link='/'>Home</BreadcrumbItem>
                <BreadcrumbItem link='/404'>The Helm</BreadcrumbItem>
                <BreadcrumbItem link='/404'>Quizzes</BreadcrumbItem>
                <BreadcrumbItem inactive currentPage>You are here!</BreadcrumbItem>
            </Breadcrumb>
    </div>

    <h3 class="mb-2 text-lg">TODO:</h3>
    <div class="p-4">
            <Breadcrumb separator='>'>
                <BreadcrumbItem icon='☠️' link='/'>Home</BreadcrumbItem>
                <BreadcrumbItem link='/404'>The Helm</BreadcrumbItem>
                <BreadcrumbItem link='/404'>Quizzes</BreadcrumbItem>
            </Breadcrumb>
    </div>
</Card>

<h3 class="text-2xl font-bold my-4">Usage</h3>
<CodeBlock class="mb-4">
    {
        `import Breadcrumb from '@brainandbones/skeleton';\n
        <Breadcrumb separator='|'>
                <BreadcrumbItem icon='☠️' link='/'>Home</BreadcrumbItem>
                <BreadcrumbItem link='/404'>The Helm</BreadcrumbItem>
                <BreadcrumbItem link='/404'>Quizzes</BreadcrumbItem>
                <BreadcrumbItem inactive currentPage>You are here!</BreadcrumbItem>
        </Breadcrumb>
        `}

</CodeBlock>


<!-- Properties -->
<h3 class="text-2xl font-bold my-4">Properties</h3>
<h4 class='m-2'>Breadcrumbs</h4>
<Table source="{tableProps}"></Table>
<h4 class='m-2'>Breadcrumb Item</h4>
<Table source="{tablePropsItem}"></Table>
