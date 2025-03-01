<script lang="ts">
import { Slider } from "@skeletonlabs/skeleton-svelte";

let value = $state([40]);
</script>

<Slider name="example" {value} onValueChange={(e) => (value = e.value)} />
