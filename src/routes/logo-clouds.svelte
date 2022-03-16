<script lang="ts">
    import LogoCloud from "$lib/LogoCloud/LogoCloud.svelte";
    import Logo from "$lib/LogoCloud/Logo.svelte";
    // Docs
    import CodeBlock from '$lib/_CodeBlock/CodeBlock.svelte';

    const codeImport: string = `<script>import {LogoCloud, Logo} from '@brainandbones/skeleton';</\script>\n`;
    const codeBasic: string = `
<LogoCloud>
    <Logo>Acme</Logo>
</LogoCloud>
    `.trim();
    const codeSlotted: string = `
<LogoCloud>
    <Logo>
        <svelte:fragment slot="icon">(icon)</svelte:fragment>
        <svelte:fragment slot="label">Acme</svelte:fragment>
    </Logo>
</LogoCloud>
    `.trim();
</script>

<div class="space-y-4">

    <!-- Header -->
    <header class="space-y-4">
        <h2 class="text-3xl font-bold">Logo Clouds</h2>
        <p class="text-base text-surface-400">Allows for 2-4 logos with optional icon and label slots.</p>
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

    <section class="space-y-4">
        <h3 class="text-2xl font-bold">Usage</h3>
        <CodeBlock language="html" code={codeImport}></CodeBlock>
        <CodeBlock language="html" code={codeBasic}></CodeBlock>
        <CodeBlock language="html" code={codeSlotted}></CodeBlock>
    </section>

</div>
