<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import Table from '$lib/_Table/Table.svelte';
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Breadcrumb from "$lib/Breadcrumb/Breadcrumb.svelte";
    import Crumb from "$lib/Breadcrumb/Crumb.svelte";

    // Examples
    const items = [
        {text: 'Home', link: '/test'},
        {text: 'The Helm', link: ''},
    ]

    // Props
    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['styling', 'string', 'basic | outlined', 'basic', 'Set styling'],
            ['items', 'Items Object', '{text: string, href: string}', '-', 'Defines the breadcrumb items']
        ],
    };
    const tablePropsCrumb: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['href', 'string', '-', '-', 'Set the href'],
            ['currentPage', 'boolean', ' true | false', 'false', 'Set if current page (no trailing separator)'],
            ['inactive', 'boolean ', 'true | false', 'false', 'Set the crumb to inactive (no interaction/hover)'],
        ],
    };
</script>

<div class="space-y-8">
    
    <!-- Heading -->
    <heading class="space-y-4">
        <h1>Breadcrumbs</h1>
        <p>Breadcrumbs allow for easy an easy peek into where in the site/section hierachy you are. It can be a useful component to display for sub-pages.</p>
    </heading>

    <!-- Examples -->
    <section class="space-y-4">
        <h4>Basic</h4>
        <Card class="space-y-4">
            <Breadcrumb>
                <Crumb href='/'>Home</Crumb>
                <Crumb href='/404'>The Helm</Crumb>
                <Crumb href='/404'>Quizzes</Crumb>
                <Crumb inactive currentPage>You are here!</Crumb>
            </Breadcrumb>
        </Card>
        <h4>Predefined List Items</h4>
        <Card class="space-y-4">
            <Breadcrumb items={items}></Breadcrumb>
        </Card>
        <h4>Outlined Style</h4>
        <Card class="space-y-4">
            <Breadcrumb styling='outlined' >
                <Crumb href='/'>Home</Crumb>
                <Crumb href='/'>The Helm</Crumb>
                <Crumb currentPage inactive icon='X'>You are here!</Crumb>
            </Breadcrumb>
        </Card>
        <h4>Crumb Icon</h4>
        <Card class="space-y-4">
            <Breadcrumb styling='basic'>
                <Crumb href='/'>
                    <svelte:fragment slot="icon">
                        <svg class='invert dark:invert-0' xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 48 48"><path d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.072266 4.3222656 L 8.859375 15.519531 C 7.0554772 16.941163 6 19.113506 6 21.410156 L 6 40.5 C 6 41.863594 7.1364058 43 8.5 43 L 18.5 43 C 19.863594 43 21 41.863594 21 40.5 L 21 30.5 C 21 30.204955 21.204955 30 21.5 30 L 26.5 30 C 26.795045 30 27 30.204955 27 30.5 L 27 40.5 C 27 41.863594 28.136406 43 29.5 43 L 39.5 43 C 40.863594 43 42 41.863594 42 40.5 L 42 21.410156 C 42 19.113506 40.944523 16.941163 39.140625 15.519531 L 24.927734 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.285156 17.876953 C 38.369258 18.731322 39 20.030807 39 21.410156 L 39 40 L 30 40 L 30 30.5 C 30 28.585045 28.414955 27 26.5 27 L 21.5 27 C 19.585045 27 18 28.585045 18 30.5 L 18 40 L 9 40 L 9 21.410156 C 9 20.030807 9.6307412 18.731322 10.714844 17.876953 L 24 7.4101562 z"/></svg>
                    </svelte:fragment>
                    Home
                </Crumb>
                <Crumb href='/'>
                    <svelte:fragment slot="icon">
                        <img src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/atom.svg" alt="">
                    </svelte:fragment>
                    The Helm
                </Crumb>
                <Crumb currentPage inactive icon='X'>You are here!</Crumb>
            </Breadcrumb>
        </Card>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="javascript" code={`<script>import Breadcrumb from '@brainandbones/skeleton';</\script>`}></CodeBlock>
        <CodeBlock language="html" code={`
<Breadcrumb>
    <Crumb href='/'><svelte:fragment>{icon}</svelte:fragment>Home</Crumb>
    <Crumb href='/404'>The Helm</Crumb>
    <Crumb href='/404'>Quizzes</Crumb>
    <Crumb inactive currentPage>You are here!</Crumb>
</Breadcrumb>
        `.trim()}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <h4>Breadcrumb</h4>
        <Table source="{tableProps}"></Table>
        <h4>Crumb</h4>
        <Table source="{tablePropsCrumb}"></Table>
    </section>
</div>
