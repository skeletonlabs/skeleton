<script lang="ts">
    import AppRail from "$lib/components/AppRail/AppRail.svelte";
	import AppRailTile from "$lib/components/AppRail/AppRailTile.svelte";
	import Preview from "./Preview.svelte";

</script>
<div class="flex">
    <AppRail>
        <AppRailTile tag="a" href="/docs/colors">Colors</AppRailTile>
        <AppRailTile tag="a" href="/docs/text">Text</AppRailTile>
        <AppRailTile tag="a" href="/docs/shapes">Shapes</AppRailTile>
    </AppRail>
    <slot></slot>
    <Preview/>
</div>
