<script lang="ts">
	import { getContext } from "svelte";
	import type { TabsPanelProps } from "./types.js";

    let {
        value,
        group,
        // Root
        base = getContext<string>('panelBase'),
        classes = getContext<string>('panelClasses'),
        // Snippets
        children,
    }: TabsPanelProps = $props();
</script>

{#if value === group && children}
    <div class="{base} {classes}">
        {@render children()}
    </div>
{/if}