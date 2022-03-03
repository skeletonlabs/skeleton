<script lang="ts">
    import LogoCloud from "$lib/LogoCloud/LogoCloud.svelte";
    import Logo from "$lib/LogoCloud/Logo.svelte";
    // Docs
    import CodeBlock from '$lib/_CodeBlock/CodeBlock.svelte';
</script>

<h2 class="text-3xl font-bold mb-4">Logo Clouds</h2>
<p class="text-base opacity-70 mb-4">Allows for 2-4 logos with optional icon and label slots.</p>

<LogoCloud class="mb-4">
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
<h4 class="text-xl font-bold my-4">Slotted</h4>
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

<h3 class="text-2xl font-bold my-4">Usage</h3>
<CodeBlock class="mb-4">{`
import {LogoCloud, Logo} from '@brainandbones/skeleton';\n
<LogoCloud>
    <!-- Basic -->
    <Logo>Acme</Logo>
    <!-- Slotted -->
    <Logo>
        <svelte:fragment slot="icon">(icon)</svelte:fragment>
        <svelte:fragment slot="label">Acme</svelte:fragment>
    </Logo>
</LogoCloud>
`.trim()}</CodeBlock>
