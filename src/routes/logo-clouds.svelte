<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import LogoCloud from "$lib/LogoCloud/LogoCloud.svelte";
    import Logo from "$lib/LogoCloud/Logo.svelte";

    const codeImport: string = `<script>import {LogoCloud, Logo} from '@brainandbones/skeleton';</\script>\n`;
    const codeBasic: string = `<LogoCloud>\n\t<Logo>Acme</Logo>\n</LogoCloud>`;
    const codeSlotted: string = `<LogoCloud>\n\t<Logo>\n\t\t<svelte:fragment slot="icon">(icon)</svelte:fragment>\n\t\t<svelte:fragment slot="label">Acme</svelte:fragment>\n\t</Logo>\n</LogoCloud>`;
</script>

<div class="space-y-4">

    <!-- Header -->
    <header class="space-y-4">
        <h2 class="text-3xl font-bold">Logo Clouds</h2>
        <p class="text-base text-surface-400">Comfortably fits 2-4 logos with optional fragement slots for icons and labels.</p>
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
        <h4 class="text-xl font-bold">Slotted</h4>
        <LogoCloud>
            <Logo>
                <svelte:fragment slot="icon">&#9733;</svelte:fragment>
                <svelte:fragment slot="label">HR Solutions Co.</svelte:fragment>
            </Logo>
            <Logo>
                <svelte:fragment slot="icon">&#9733;</svelte:fragment>
                <svelte:fragment slot="label">Acme Theaters</svelte:fragment>
            </Logo>
        </LogoCloud>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h3 class="text-2xl font-bold">Usage</h3>
        <CodeBlock language="html" code={codeImport}></CodeBlock>
        <CodeBlock language="html" code={codeBasic}></CodeBlock>
        <CodeBlock language="html" code={codeSlotted}></CodeBlock>
    </section>

</div>
