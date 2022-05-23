<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import LogoCloud from "$lib/LogoCloud/LogoCloud.svelte";
    import Table from '$lib/Table/Table.svelte';
    import Logo from "$lib/LogoCloud/Logo.svelte";

    const tablePropsCloud: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['background', 'string', 'class', 'bg-surface-200 dark:bg-surface-800', 'Provide a class to set background color.'],
            ['color', 'string', 'class', 'text-black dark:text-white', 'Provide a class to set text color.'],
            ['text', 'string', 'class', 'text-base font-bold', 'Provide a class to set text styles.'],
        ],
    };
    const tablePropsLogo: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['background', 'string', 'class', 'bg-surface-200 dark:bg-surface-800', 'Provide a class to override background color.'],
            ['color', 'string', 'class', 'text-black dark:text-white', 'Provide a class to override text color.'],
            ['text', 'string', 'class', 'text-base font-bold', 'Provide a class to override text styles.'],
        ],
    };
    const tableSlots: any = {
        columns: ['Name', 'Description'],
        data: [
            ['icon', 'Dedicated icon slot, left of the label.'],
            ['label', 'Dedicated slot for adding a label.'],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Logo Clouds</h1>
        <p>Comfortably fits 2-4 logos with optional fragement slots for icons and labels.</p>
        <CodeBlock language="js" code={`import { LogoCloud, Logo } from '@brainandbones/skeleton';`}></CodeBlock>
    </header>

    <!-- Examples -->
    <section class="space-y-4">
        <LogoCloud>
            <Logo>HR Solutions Co.</Logo>
            <Logo>Acme Theaters</Logo>
            <Logo>Cruisin' Cuisine</Logo>
            <Logo>Arcane Security</Logo>
        </LogoCloud>
        <LogoCloud>
            <Logo>HR Solutions Co.</Logo>
            <Logo>Acme Theaters</Logo>
            <Logo>Cruisin' Cuisine</Logo>
        </LogoCloud>
        <LogoCloud>
            <Logo>
                <svelte:fragment slot="icon"><span>💼</span></svelte:fragment>
                <svelte:fragment slot="label">HR Solutions Co.</svelte:fragment>
            </Logo>
            <Logo>
                <svelte:fragment slot="icon"><span>🍿</span></svelte:fragment>
                <svelte:fragment slot="label">Acme Theaters</svelte:fragment>
            </Logo>
        </LogoCloud>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code={`<LogoCloud>\n\t<Logo>Skeleton</Logo>\n</LogoCloud>`}></CodeBlock>
        <CodeBlock language="html" code={`<LogoCloud>\n\t<Logo>\n\t\t<svelte:fragment slot="icon">{@html icon}</svelte:fragment>\n\t\t<svelte:fragment slot="label">Skeleton</svelte:fragment>\n\t</Logo>\n</LogoCloud>`}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <h4>Logo Cloud</h4>
        <Table source="{tablePropsCloud}"></Table>
        <h4>Logo</h4>
        <Table source="{tablePropsLogo}"></Table>
    </section>

    <!-- Slots -->
    <section class="space-y-4">
        <h2>Slots</h2>
        <Table source="{tableSlots}"></Table>
    </section>
</div>
