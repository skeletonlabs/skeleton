<script lang="ts">
	import Preview from "$docs/theme-generator/Preview.svelte";
import EditableSwatch from "../../../../docs/theme-generator/EditableSwatch.svelte";
	import type { ColorSettings, PassReport } from "./types";

    export let color: ColorSettings;

</script>

<div class="flex flex-col">
    <p>Click singular color swatches to edit them.</p>
    
    <!-- Examples -->
    <section class="card variant-glass p-4 space-y-8 flex flex-col">
        <EditableSwatch bind:color={color}/>
    </section>
    <section class="card variant-glass p-4 space-y-8">
        <Preview color={color.key} colorLabel={color.label}/>
    </section>
</div>