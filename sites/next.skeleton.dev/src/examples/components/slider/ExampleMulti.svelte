<script lang="ts">
import { Slider } from "@skeletonlabs/skeleton-svelte";

let valueMulti = $state([40, 60]);
</script>

<Slider value={valueMulti} onValueChange={(e) => (valueMulti = e.value)} />
