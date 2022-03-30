<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import LogoCloud from "$lib/LogoCloud/LogoCloud.svelte";
    import Logo from "$lib/LogoCloud/Logo.svelte";
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Logo Clouds</h1>
        <p>Comfortably fits 2-4 logos with optional fragement slots for icons and labels.</p>
        <CodeBlock language="html" code={`<script>import {LogoCloud, Logo} from '@brainandbones/skeleton';</\script>\n`}></CodeBlock>
    </header>

    <!-- Examples -->
    <section class="space-y-4">
        <h4>4x</h4>
        <LogoCloud>
            <Logo>HR Solutions Co.</Logo>
            <Logo>Acme Theaters</Logo>
            <Logo>Cruisin' Cuisine</Logo>
            <Logo>Arcane Security</Logo>
        </LogoCloud>
        <h4>3x</h4>
        <LogoCloud>
            <Logo>HR Solutions Co.</Logo>
            <Logo>Acme Theaters</Logo>
            <Logo>Cruisin' Cuisine</Logo>
        </LogoCloud>
        <h4>Fragment Slots</h4>
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
        <h2>Usage</h2>
        <CodeBlock language="html" code={`<LogoCloud>\n\t<Logo>Acme</Logo>\n</LogoCloud>`}></CodeBlock>
        <CodeBlock language="html" code={`<LogoCloud>\n\t<Logo>\n\t\t<svelte:fragment slot="icon">(icon)</svelte:fragment>\n\t\t<svelte:fragment slot="label">Acme</svelte:fragment>\n\t</Logo>\n</LogoCloud>`}></CodeBlock>
    </section>

</div>
